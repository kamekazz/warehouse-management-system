const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
  size: {
    type: Number
  },
  activate: [{ type: Number }],
  quantity: {
    type: Number
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = Location = mongoose.model('locations', LocationSchema);
