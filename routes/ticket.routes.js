const express = require('express');
const router = express.Router();
const Pallet = require('../model/Pallets');
const Orders = require('../model/Order');
const Ticket = require('../model/Ticket');

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

  let new_items = [];
  const order_id = req.body['order_id'];
  const customer_id = req.body['customerId'];

  let order = await Orders.findOne({ _id: order_id, status: 'create' });
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
      let pallets = [];
      let palletsCont = [];
      let pallet = await Pallet.find({
        skuNumber: order['items'][i]['skuNumber'],
        location: { $exists: true }
      });
      for (let j = 0; j < pallet.length; j++) {
        if (item_qty <= pallet[j]['contAvailable'] && is_updated == 0) {
          let toBePick = item_qty;
          palletsCont.push(toBePick);
          pallet[j]['contAvailable'] = pallet[j]['contAvailable'] - item_qty;
          pallets.push(pallet[j]._id);
          is_updated = 1;
        } else if (item_qty > pallet[j]['contAvailable']) {
          let toBePick = pallet[j]['contAvailable'];
          palletsCont.push(toBePick);
          item_qty = item_qty - pallet[j]['contAvailable'];
          pallet[j]['contAvailable'] = 0;
          pallets.push(pallet[j]._id);
        }
        await pallet[j].save();
      }
      item = {};
      item['skuNumber'] = order['items'][i]['skuNumber'];
      item['cont'] = order['items'][i]['cont'];
      item['palletId'] = pallets;
      item['palletsCont'] = palletsCont;
      item['status'] = 'plash';
      new_items.push(item);
    }
  }

  try {
    newTicket = new Ticket({
      status: 'plash',
      customerId: customer_id,
      items: new_items,
      itemsI: not_found
    });
    await newTicket.save();
    order.status = 'plash';
    order.ticketsId = newTicket._id;
    await order.save();

    res.json({
      success: true,
      message: 'Ticket created',
      newTicket
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
