/* eslint-disable no-undef */
/* eslint-disable node/no-unsupported-features/es-syntax */
const express = require('express');

const router = express.Router();
const Item = require('../model/Item');

// /api/item call
router.get('/', async (req, res) => {
  try {
    const allItem = await Item.find();
    res.json({ data: allItem });
  } catch (err) {
    console.error(err);
    res.json({
      success: false,
      err: err
    });
  }
});

router.post('/create', async (req, res) => {
  newItem = new Item({ ...req.body });

  const { skuNumber } = newItem;
  try {
    const oldItem = await Item.findOne({ skuNumber: skuNumber });
    if (!oldItem) {
      await newItem.save();
      res.json({
        success: true,
        message: 'item create',
        item: newItem
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
      err: err
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
        data: item
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

router.delete('/delete', async (req, res) => {
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
