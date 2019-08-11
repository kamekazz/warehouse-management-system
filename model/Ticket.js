const mongoose = require('mongoose');
const { Schema } = mongoose;

const TicketSchema = new Schema({
  customerId: { type: Schema.Types.ObjectId, ref: 'customers' },
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
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'products'
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
