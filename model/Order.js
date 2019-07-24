/* eslint-disable no-undef */
/* eslint-disable no-multi-assign */
const mongoose = require('mongoose');

const { Schema } = mongoose;

const OrderSchema = new Schema({
  ticketsId: { type: Schema.Types.ObjectId, ref: 'tickets' },
  customerId: { type: Schema.Types.ObjectId, ref: 'customer' },
  status: {
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
  items: [
    {
      skuNumber: {
        type: String
      },
      cont: {
        type: Number
      }
    }
  ],
  itemsI: [
    {
      skuNumber: {
        type: String
      },
      cont: {
        type: Number
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = Orders = mongoose.model('orders', OrderSchema);
