/* eslint-disable no-undef */
/* eslint-disable no-multi-assign */
const mongoose = require('mongoose');

const { Schema } = mongoose;

const LocationSchema = new Schema({
  zone: {
    type: String,
    required: true
  },
  row: {
    type: Number,
    required: true
  },
  location: {
    type: Number,
    required: true
  },
  level: {
    type: Number,
    required: true
  },
  department: {
    type: String
  },
  fullName: {
    type: String,
    required: true
  },
  skuNumber: {
    type: String
  },
  maxSize: {
    type: Number,
    default: 0
  },
  size: {
    type: Number,
    default: 0
  },
  palletId: [{ type: Schema.Types.ObjectId, ref: 'pallets' }],
  activate: [{ type: Number }],
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = Location = mongoose.model('locations', LocationSchema);
