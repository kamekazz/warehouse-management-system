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
  var not_found = [];

  var new_items = [];
  const order_id = req.body['order_id'];
  const customer_id = req.body['customerId'];

  var order = await Orders.findOne({ _id: order_id });
  for (var i = 0; i < order['items'].length; i++) {
    var cont_sum = 0;
    var total_cont = await Pallet.aggregate([
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
      var item_qty = order['items'][i]['cont'];
      var is_updated = 0;
      var pallets = [];
      var location = 1;
      var pallet = await Pallet.find({
        skuNumber: order['items'][i]['skuNumber'],
        location: { $exists: true }
      });
      for (var j = 0; j < pallet.length; j++) {
        if (item_qty <= pallet[j]['contAvailable'] && is_updated == 0) {
          pallet[j]['contAvailable'] = pallet[j]['contAvailable'] - item_qty;
          pallets.push(pallet[j]._id);
          is_updated = 1;
        } else if (item_qty > pallet[j]['contAvailable']) {
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
      item['location'] = location;
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
