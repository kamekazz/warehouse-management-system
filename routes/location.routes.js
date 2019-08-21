/* eslint-disable no-undef */
/* eslint-disable node/no-unsupported-features/es-syntax */
const express = require('express');

const router = express.Router();
const Location = require('../model/Location');

router.get('/', async (req, res) => {
  try {
    const allLocation = await Location.find();
    res.json({ data: allLocation });
  } catch (err) {
    console.error(err);
    res.json({
      success: false,
      err: err
    });
  }
});

router.get('/available/all', async (req, res) => {
  try {
    const allLocation = await Location.find({ skuNumber: null });
    res.json({ data: allLocation });
  } catch (err) {
    console.error(err);
    res.json({
      success: false,
      err: err
    });
  }
});

router.get('/create', async (req, res) => {
  try {
    const lastLocationAdded = await Location.find()
      .sort({ date: -1 })
      .limit(20);
    if (!lastLocationAdded) return res.json({ message: 'no location found' });
    res.json({
      success: true,
      message: 'all create',
      allNewLocation: lastLocationAdded
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
  newLocation = new Location({ ...req.body });
  newLocation.maxSize = newLocation.size;
  newLocation.size = 0;
  const { zone, row, location, level } = newLocation;
  newLocation.fullName = `${zone}-${row}-${location}-${level}`;
  try {
    const oldLocation = await Location.findOne({
      fullName: newLocation.fullName
    });
    if (!oldLocation) {
      await newLocation.save();
      const lastLocationAdded = await Location.find()
        .sort({ date: -1 })
        .limit(5);
      res.json({
        success: true,
        message: 'location create',
        location: newLocation,
        allNewLocation: lastLocationAdded
      });
    } else {
      res.json({
        success: false,
        message: `The location (${oldLocation.fullName}) already exist `
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

router.get('/:location', async (req, res) => {
  const { location } = req.params;
  try {
    const locationFond = await Location.findOne({
      fullName: location
    });

    if (!locationFond) {
      res.json({
        success: false,
        message: `location not fond (${location})`
      });
    } else {
      res.json({
        success: true,
        message: `Location fond `,
        data: locationFond
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
  const { skuNumber, location, department, size } = req.body;
  try {
    const locationFond = await Location.findOne({
      fullName: location
    });

    if (!locationFond) {
      res.json({
        success: false,
        message: `location not fond (${location})`
      });
    } else {
      if (department) locationFond.department = department;
      if (skuNumber) locationFond.skuNumber = skuNumber;
      if (size) locationFond.size = size;
      await locationFond.save();
      res.json({
        success: true,
        message: `Location Updated `,
        data: locationFond
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
  const { location } = req.body;
  try {
    const resolve = await Location.deleteOne({ fullName: location });
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
