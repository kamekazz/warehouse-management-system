/* eslint-disable no-undef */
/* eslint-disable no-multi-assign */
const mongoose = require('mongoose');

const { Schema } = mongoose;

const TicketSchema = new Schema({
  // customerId: { type: Schema.Types.ObjectId, ref: 'customers' },
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
      },
      palletId: [
        {
          type: Schema.Types.ObjectId,
          ref: 'pallets'
        }
      ],
      status: {
        type: String
      },
      palletsCont: [{ type: Number }]
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
  },
  cart: { type: String }
});

module.exports = Tickets = mongoose.model('tickets', TicketSchema);
