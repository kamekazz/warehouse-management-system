/* eslint-disable prettier/prettier */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
/* eslint-disable node/no-unsupported-features/es-syntax */
const express = require('express');

const router = express.Router();
// const Item = require('../model/Item');

// const Location = require('../model/Location');
const Orders = require('../model/Order');

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
  const {
    //   ticketsId, customerId,
    items
  } = req.body;
  const newOrder = new Orders({
    //    ticketsId, customerId,
    items
  });
  newOrder.status = 'create';
  try {
    await newOrder.save();
    res.json({
      success: true,
      message: 'Order create',
      newOrder
    });
  } catch (err) {
    console.error(err);
    res.json({
      success: false,
      err: err
    });
  }
});

router.post('/submit', async (req, res) => {
  const { id } = req.body;
  try {
    const order = await Orders.findOne({ _id: id });
    const ticketItems = [];
    const orderItemsI = [];

    res.json({
      success: true,
      message: 'orders',
      items: order.items,
      ticketItems,
      orderItemsI,
      palletAvilaval
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
