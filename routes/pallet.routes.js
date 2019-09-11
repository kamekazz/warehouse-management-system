/* eslint-disable prettier/prettier */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
/* eslint-disable node/no-unsupported-features/es-syntax */
const express = require('express');

const router = express.Router();
const Item = require('../model/Item');
const Pallet = require('../model/Pallets');
const Location = require('../model/Location');

// function helperUniqItem(arr, idParam) {
//   let result = true;
//   arr.forEach(function(item) {
//     if (item === idParam) {
//       result = false;
//       console.log('good');
//     }
//   });
//   console.log('arr', arr[0]);
//   console.log('id', idParam);
//   console.log('result', result);
//   return result;
// }

function helperNotGoodSize(location, pallet, maxLocation) {
  let result = false;
  const endSize = location + pallet;
  if (endSize > maxLocation) {
    result = true;
  }
  return result;
}

router.get('/', async (req, res) => {
  try {
    const allPallet = await Pallet.find();
    res.json({ data: allPallet });
  } catch (err) {
    console.error(err);
    res.json({
      success: false,
      err: err
    });
  }
});

router.get('/skuNumber/:skuNumber', async (req, res) => {
  const { skuNumber } = req.params;
  try {
    const palletsFond = await Pallet.find({
      skuNumber: skuNumber
    });

    if (palletsFond <= 0) {
      res.json({
        success: false,
        message: `items not fond (${skuNumber})`
      });
    } else {
      res.json({
        success: true,
        message: `items fond `,
        pallets: palletsFond
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

router.get('/id/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const palletFond = await Pallet.findOne({
      _id: id
    }).populate({ path: 'items', select: 'name' });

    if (!palletFond) {
      res.json({
        success: false,
        message: `id not fond (${id})`
      });
    } else {
      res.json({
        success: true,
        message: `id found `,
        pallet: palletFond
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

router.post('/create', async (req, res) => {
  newPallet = new Pallet({ ...req.body });
  const { skuNumber } = newPallet;
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
      newPallet.status = 'receiving';
      await newPallet.save();
      res.json({
        success: true,
        message: 'pallet create',
        item: newPallet,
        locations
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

// eslint-disable-next-line consistent-return
router.post('/update', async (req, res) => {
  const { id, status, location } = req.body;
  try {
    const pallet = await Pallet.findOne({
      _id: id
    });

    if (!pallet) {
      res.json({
        success: false,
        message: `pallet not fond (${id})`
      });
    } else {
      if (status) pallet.status = status;
      if (location) {
        const locationFond = await Location.findOne({
          fullName: location
        });
        if (!locationFond) {
          return res.json({
            success: false,
            message: `location nat valid ${location}`
          });
        }

        if (
          locationFond.skuNumber === pallet.skuNumber ||
          locationFond.skuNumber === undefined ||
          locationFond.skuNumber === null
        ) {
          locationFond.skuNumber = pallet.skuNumber;
          if (pallet.location !== locationFond.fullName) {
            if (pallet.location) {
              const oldLocation = await Location.findOne({
                fullName: pallet.location
              });
              if (oldLocation) {
                oldLocation.size -= pallet.size;
                const newPalletArry = oldLocation.palletId.filter(
                  item => item === pallet._id
                );
                oldLocation.palletId = newPalletArry;
                if (oldLocation.size <= 0) {
                  oldLocation.skuNumber = null;
                }
                await oldLocation.save();
              }
            }
            locationFond.palletId.push(pallet._id);
            if (
              helperNotGoodSize(
                locationFond.size,
                pallet.size,
                locationFond.maxSize
              )
            ) {
              return res.json({
                success: false,
                message: `err size`
              });
              // eslint-disable-next-line no-else-return
            } else {
              // eslint-disable-next-line operator-assignment
              locationFond.size = locationFond.size + pallet.size;
              pallet.location = location; // ojo
            }
          }
          await locationFond.save();
          await pallet.save();
          res.json({
            success: true,
            message: `pallet Updated `,
            pallet: pallet,
            locationFond
          });
        } else {
          res.json({
            success: false,
            message: `mix sku not permeated (${pallet.skuNumber} - ${locationFond.skuNumber})`
          });
        }
      } else {
        await pallet.save();
        res.json({
          success: true,
          message: `pallet Updated `,
          pallet: pallet
        });
      }
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
  const { id } = req.body;
  try {
    const pallet = await Pallet.findOne({ _id: id });
    if (pallet) {
      const locationFond = await Location.findOne({
        palletId: id
      });
      if (locationFond) {
        const result = locationFond.palletId.filter(
          item => item === pallet._id
        );
        locationFond.palletId = result;
        locationFond.size -= pallet.size;
        if (result <= 0) {
          locationFond.skuNumber = null;
        }
        await locationFond.save();
      }
      await pallet.delete();
      res.json({
        success: true,
        message: 'done',
        data: pallet,
        locationFond
      });
    } else {
      res.json({
        success: false,
        message: 'not fond',
        data: pallet,
        locationFond
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
