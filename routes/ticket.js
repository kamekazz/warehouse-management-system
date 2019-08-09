/* eslint-disable prettier/prettier */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
/* eslint-disable node/no-unsupported-features/es-syntax */
const express = require('express');

const router = express.Router();
// const Item = require('../model/Item');
const Pallet = require('../model/Pallets');
// const Location = require('../model/Location');
const Orders = require('../model/Order');
const Ticket = require('../model/Ticket');

router.get('/', async (req, res) => {
  try {
    const allOrder = await Orders.find();
    res.json({
      success: true,
      message: 'all orders',
      allOrder
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

  let order = await Orders.findOne({ _id: order_id });
  if (order.status === 'plash')
    return res.json({ success: false, message: 'order is allergy plash' });
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

module.exports = router;
