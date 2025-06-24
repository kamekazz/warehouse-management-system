/* eslint-disable radix */
/* eslint-disable no-undef */
/* eslint-disable node/no-unsupported-features/es-syntax */
const express = require('express');

const router = express.Router();
const Item = require('../model/Item');

function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}
// /api/item call
router.get('/', async (req, res) => {
  const pagination = req.query.pagination ? parseInt(req.query.pagination) : 10;
  const page = req.query.page ? parseInt(req.query.page) : 1;
  const regex = new RegExp(escapeRegex(req.query.skuNumber), 'gi');
  try {
    const items = await Item.find({ skuNumber: regex })
      .skip(pagination * page - pagination)
      .limit(pagination);
    const count = await Item.countDocuments({ skuNumber: regex });
    res.json({
      success: true,
      query: req.query,
      total: count,
      items,
      pages: Math.ceil(count / pagination)
    });
  } catch (err) {
    console.error(err);
    res.json({
      success: false,
      err: err
    });
  }
});

router.get('/created', async (req, res) => {
  try {
    const allNewItem = await Item.find()
      .sort({ date: -1 })
      .limit(100);
    res.json({ success: true, allNewItem: allNewItem });
  } catch (err) {
    console.error(err);
    res.json({
      success: false,
      err: err
    });
  }
});

router.post('/create', async (req, res) => {
  const newItem = new Item({ ...req.body });

  const { skuNumber } = newItem;
  try {
    const oldItem = await Item.findOne({ skuNumber: skuNumber });
    if (!oldItem) {
      await newItem.save();
      res.json({
        success: true,
        message: 'item create'
      });
    } else {
      res.json({
        success: false,
        message: `The item (${skuNumber}) already exist `
      });
    }
  } catch (err) {
    console.error(err);
    res.json({
      success: false,
      message: err
    });
  }
});

router.get('/:skuNumber', async (req, res) => {
  const { skuNumber } = req.params;
  try {
    const itemFond = await Item.findOne({
      skuNumber: skuNumber
    });
    if (!itemFond) {
      res.json({
        success: false,
        message: `item not fond (${skuNumber})`
      });
    } else {
      res.json({
        success: true,
        message: `Location fond `,
        item: itemFond
      });
    }
  } catch (err) {
    console.error(err);
    res.json({
      success: false,
      err: err
    });
  }
});

router.post('/update', async (req, res) => {
  const { name, size, department, description, skuNumber, ounce } = req.body;
  try {
    const item = await Item.findOne({
      skuNumber: skuNumber
    });

    if (!item) {
      res.json({
        success: false,
        message: `item not fond (${skuNumber})`
      });
    } else {
      if (name) item.name = name;
      if (size) item.size = size;
      if (department) item.department = department;
      if (description) item.description = description;
      if (ounce) item.ounce = ounce;
      await item.save();
      res.json({
        success: true,
        message: `item Updated `,
        item: item
      });
    }
  } catch (err) {
    console.error(err);
    res.json({
      success: false,
      message: err
    });
  }
});

router.post('/delete', async (req, res) => {
  const { skuNumber } = req.body;
  try {
    const resolve = await Item.deleteOne({ skuNumber: skuNumber });
    if (resolve.deletedCount === 1) {
      res.json({
        success: true,
        message: 'done',
        data: resolve
      });
    } else {
      res.json({
        success: false,
        message: 'not fond',
        data: resolve
      });
    }
  } catch (err) {
    console.error(err);
    res.json({
      success: false,
      err: err
    });
  }
});

module.exports = router;
