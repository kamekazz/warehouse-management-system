/* eslint-disable no-undef */
/* eslint-disable no-multi-assign */
const mongoose = require('mongoose');

const { Schema } = mongoose;

const PalletSchema = new Schema({
  item: { type: Schema.Types.ObjectId, ref: 'items' },
  size: {
    type: Number,
    required: true
  },
  skuNumber: {
    type: String,
    required: true
  },
  status: {
    type: String
  },
  location: {
    type: String
  },
  cont: {
    type: Number,
    required: true
  },
  contAvailable: {
    type: Number
  },
  ounce: {
    type: Number
  },
  department: {
    type: String
  },
  activate: [
    {
      note: { type: String },
      date: {
        type: Date,
        default: Date.now()
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = Pallet = mongoose.model('pallets', PalletSchema);
