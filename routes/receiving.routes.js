/* eslint-disable consistent-return */
/* eslint-disable prettier/prettier */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
/* eslint-disable node/no-unsupported-features/es-syntax */
const express = require('express');

const router = express.Router();
const Item = require('../model/Item');
const Pallet = require('../model/Pallets');
const Location = require('../model/Location');

function helperNotGoodSize(location, pallet, maxLocation) {
  let result = false;
  const endSize = location + pallet;
  if (endSize > maxLocation) {
    result = true;
  }
  return result;
}

router.post('/', async (req, res) => {
  const { status } = req.body;
  const pallets = await Pallet.find({
    status
  });
  if (!pallets) {
    res.json({
      success: false,
      message: `pallets not fond on status (${status})`
    });
  } else {
    res.json({
      success: true,
      message: `pallets  fond on status (${status})`,
      pallets: pallets
    });
  }
});

router.post('/create', async (req, res) => {
  newPallet = new Pallet({ ...req.body });
  const { skuNumber, cont } = newPallet;
  newPallet.contAvailable = cont;
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
      const locations = await Location.find({
        skuNumber: skuNumber
      });
      newPallet.item = itemFond._id;
      newPallet.size = itemFond.size * newPallet.cont;
      newPallet.ounce = itemFond.ounce * newPallet.cont;
      newPallet.department = itemFond.department;
      newPallet.status = 'received';
      await newPallet.save();
      res.json({
        success: true,
        message: 'pallet create',
        newPallet,
        locations
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

router.post('/send', async (req, res) => {
  const { id, location } = req.body;
  if (!location) return res.json({ success: false, message: 'need location ' });
  try {
    const pallet = await Pallet.findOne({
      _id: id
    });
    if (!pallet) {
      res.json({
        success: false,
        message: `pallet not fond (${id})`
      });
    } else if (pallet.status === 'received') {
      const locationFond = await Location.findOne({
        fullName: location
      });

      if (
        locationFond.skuNumber === pallet.skuNumber ||
        // locationFond.skuNumber === undefined ||
        locationFond.skuNumber === null
      ) {
        if (
          helperNotGoodSize(
            locationFond.size,
            pallet.size,
            locationFond.maxSize
          )
        ) {
          return res.json({ success: false, message: `err size` });
        }
        locationFond.skuNumber = pallet.skuNumber;
        locationFond.palletId.push(pallet._id);
        locationFond.size += pallet.size;
        pallet.location = locationFond.fullName;
        pallet.status = 'r/p';
        pallet.date = Date.now();
        pallet.save();
        locationFond.save();
        res.json({
          success: true,
          message: `pallets to be stored`,
          pallet,
          locationFond
        });
      } else {
        res.json({
          success: false,
          message: `mix sku not permeated (${pallet.skuNumber} - ${locationFond.skuNumber})`
        });
      }
    } else {
      res.json({
        success: false,
        message: `pallet is  not received (${pallet.status})`
      });
    }
  } catch (error) {
    console.log('error', error);
  }
});

router.post('/put', async (req, res) => {
  const { id } = req.body;

  const pallet = await Pallet.findOne({
    _id: id
  });
  if (!pallet) return res.json({ success: false, message: 'rouge ID' });
  if (pallet.status === 'r/p') {
    res.json({
      success: true,
      message: `pallet is  take to (${pallet.location})`,
      location: pallet.location,
      pallet
    });
  } else {
    res.json({
      success: false,
      message: `pallet is  not r/p   (${pallet.status})`
    });
  }
});

router.post('/valedation', async (req, res) => {
  const { id, location } = req.body;
  const pallet = await Pallet.findOne({
    _id: id
  });
  if (pallet.status !== 'r/p') {
    return res.json({
      success: false,
      message: `pallet not r/p status (${pallet.status})`
    });
  }
  if (!pallet) {
    res.json({
      success: false,
      message: `pallet not fond (${id})`
    });
  } else if (pallet.location === location) {
    pallet.status = 'store';
    pallet.save();
    res.json({
      success: true,
      message: `pallet is  store (${pallet.location})`,
      location: pallet.location,
      pallet
    });
  } else {
    res.json({
      success: false,
      message: `location is  not valet   (${location})`
    });
  }
});

module.exports = router;
