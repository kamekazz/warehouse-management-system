/* eslint-disable prefer-destructuring */
/* eslint-disable radix */
/* eslint-disable consistent-return */
/* eslint-disable no-undef */
/* eslint-disable node/no-unsupported-features/es-syntax */
const express = require('express');

const router = express.Router();

const dateFns = require('date-fns');
const Location = require('../model/Location');

function helperDateMapping(data) {
  const now = new Date();
  const newArray = data.map(x => {
    return {
      fullName: x.fullName,
      maxSize: x.maxSize,
      status: x.status,
      date: dateFns.formatDistance(x.date, now, { addSuffix: true })
    };
  });
  return newArray;
}

router.get('/', async (req, res) => {
  try {
    const pagination = req.query.pagination
      ? parseInt(req.query.pagination)
      : 10;
    const page = req.query.page ? parseInt(req.query.page) : 1;
    delete req.query.pagination;
    delete req.query.page;

    const queryLocation = await Location.find(req.query)
      .skip(pagination * page - pagination)
      .limit(pagination);
    const count = await Location.count(req.query);
    res.json({
      success: true,
      locations: queryLocation,
      query: req.query,
      total: count,
      pages: Math.ceil(count / pagination)
    });
  } catch (err) {
    console.error(err);
    res.json({
      error: err
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
      .limit(100);
    if (!lastLocationAdded) return res.json({ message: 'no location found' });

    res.json({
      success: true,
      message: 'all create',
      allNewLocation: helperDateMapping(lastLocationAdded)
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
        .limit(50);
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
  const { skuNumber, location, department, size, maxSize, status } = req.body;

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
      if (maxSize) locationFond.maxSize = maxSize;
      if (status) locationFond.status = status;
      await locationFond.save();
      res.json({
        success: true,
        message: `Location Updated ${location}`,
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

router.delete('/delete/:locationFullName', async (req, res) => {
  const { locationFullName } = req.params;
  const location = locationFullName;
  try {
    const resolve = await Location.deleteOne({ fullName: location });
    if (!resolve) {
      res.json({
        success: false,
        message: `Location dose not exists${location}`
      });
    } else {
      res.json({
        message: `Location has ben delete: ${location}`,
        success: true
      });
    }
  } catch (err) {
    res.json({
      success: false,
      message: err
    });
  }
});

module.exports = router;

// function runFakerData() {
//   const optionRow = { min: 200, max: 212, precision: 1 };
//   const optionLocation = { min: 87, max: 212, precision: 1 };
//   const optionLevel = { min: 0, max: 40, precision: 10 };
//   newLocation = new Location();
//   newLocation.zone = faker.random.arrayElement(['a', 'b', 'c']);
//   newLocation.row = faker.random.number(optionRow);
//   newLocation.location = faker.random.number(optionLocation);
//   newLocation.level = faker.random.number(optionLevel);
//   newLocation.fullName = `${newLocation.zone}-${newLocation.row}-${newLocation.location}-${newLocation.level}`;
//   newLocation.maxSize = faker.random.number(100);
//   newLocation.status = faker.random.arrayElement([
//     'empty',
//     'maintenance',
//     'upcoming'
//   ]);
//   newLocation.save();
// }
// runFakerData();

// function runLoop() {
//   for (let i = 0; i < 1000; i++) {
//     runFakerData();
//   }
// }

// runLoop();
