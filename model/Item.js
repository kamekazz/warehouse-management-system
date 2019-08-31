/* eslint-disable no-undef */
/* eslint-disable no-multi-assign */
const mongoose = require('mongoose');

const { Schema } = mongoose;

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  size: {
    type: Number,
    required: true
  },
  skuNumber: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  ounce: {
    type: Number
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = Item = mongoose.model('items', ItemSchema);
