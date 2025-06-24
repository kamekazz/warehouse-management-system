const express = require('express');
const router = express.Router();
const Pallet = require('../model/Pallets');
const Orders = require('../model/Order');
const Ticket = require('../model/Ticket');
const Product = require('../model/Product');

router.get('/', async (req, res) => {
  try {
    const allTicket = await Ticket.find();
    res.json({
      success: true,
      message: 'all Ticket',
      allTicket
    });
  } catch (err) {
    console.error(err);
    res.json({
      success: false,
      err: err
    });
  }
});

router.post('/create', async (req, res) => {
  let not_found = [];
  const order_id = req.body['order_id'];
  const customer_id = req.body['customerId'];
  const newTicket = new Ticket();
  let products = [];
  let order = await Orders.findOne({ _id: order_id, status: 'create' });
  if (!order) return res.json({ success: false, message: 'Order not fond' });
  for (let i = 0; i < order['items'].length; i++) {
    let cont_sum = 0;
    let total_cont = await Pallet.aggregate([
      {
        $match: {
          $and: [
            {
              skuNumber: order['items'][i]['skuNumber'],
              location: { $exists: true }
            }
          ]
        }
      },
      { $group: { _id: null, totalValue: { $sum: '$contAvailable' } } }
    ]);

    if (typeof total_cont[0] !== 'undefined') {
      cont_sum = total_cont[0]['totalValue'];
    }

    if (order['items'][i]['cont'] > cont_sum) {
      not_found.push(order['items'][i]);
    } else {
      let item_qty = order['items'][i]['cont'];
      let is_updated = 0;
      let palletss = await Pallet.find({
        skuNumber: order['items'][i]['skuNumber'],
        location: { $exists: true }
      });
      for (let pallet of palletss) {
        if (item_qty <= pallet['contAvailable'] && is_updated == 0) {
          let toBePick = item_qty;
          pallet['contAvailable'] = pallet['contAvailable'] - item_qty;
          let product = new Product({
            location: pallet['location'],
            sku_number: pallet['skuNumber'],
            cont: toBePick,
            cont_to_be_pick: toBePick,
            ticketId: newTicket._id
          });
          products.push(product._id);
          await product.save();
          is_updated = 1;
        } else if (item_qty > pallet['contAvailable']) {
          let toBePick = pallet['contAvailable'];
          item_qty = item_qty - pallet['contAvailable'];
          pallet['contAvailable'] = 0;
          let product = new Product({
            location: pallet['location'],
            sku_number: pallet['skuNumber'],
            cont: toBePick,
            cont_to_be_pick: toBePick,
            ticketId: newTicket._id
          });
          products.push(product._id);
          await product.save();
        }
        await pallet.save();
      }
    }
  }

  try {
    newTicket['status'] = 'plash';
    newTicket['customerId'] = customer_id;
    newTicket['products'] = products;

    await newTicket.save();
    order.status = 'plash';
    order.itemsI = not_found;
    order.ticketsId = newTicket._id;
    await order.save();
    res.json({
      success: true,
      message: 'Ticket created',
      newTicket,
      itemI: order.itemI
    });
  } catch (err) {
    console.error(err);
    res.json({
      success: false,
      err: err
    });
  }
});

router.get('/find/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const ticket = await Ticket.findOne({ _id: id });
    if (!ticket)
      return res.json({ success: false, message: 'Ticket is not fond' });
    res.json({
      success: true,
      message: 'find one',
      ticket
    });
  } catch (err) {
    console.error(err);
    res.json({
      success: false,
      err: err
    });
  }
});

router.delete('/delete', async (req, res) => {
  const { id } = req.body;
  try {
    const resolve = await Ticket.deleteOne({ _id: id });
    res.json({
      message: 'done',
      data: resolve
    });
  } catch (err) {
    console.error(err);
    res.json({
      success: false,
      err: err
    });
  }
});

module.exports = router;
