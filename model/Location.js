/* eslint-disable no-undef */
/* eslint-disable no-multi-assign */
const mongoose = require('mongoose');

const { Schema } = mongoose;

const LocationSchema = new Schema({
  zone: {
    type: String,
    required: true,
    trim: true
  },
  row: {
    type: Number,
    required: true,
    trim: true
  },
  location: {
    type: Number,
    required: true,
    trim: true
  },
  level: {
    type: Number,
    required: true,
    trim: true
  },
  department: {
    type: String
  },
  fullName: {
    type: String,
    required: true,
    unique: true
  },
  skuNumber: {
    type: String,
    default: null
  },
  maxSize: {
    type: Number,
    default: 0
  },
  size: {
    type: Number,
    default: 0
  },
  status: {
    type: String,
    default: 'empty'
  },
  palletId: [{ type: Schema.Types.ObjectId, ref: 'pallets' }],
  activate: [{ type: Number }],
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = Location = mongoose.model('locations', LocationSchema);
