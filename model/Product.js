const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
  status: {
    type: String,
    default: 'plash'
  },
  location: {
    type: String
  },
  sku_number: {
    type: String
  },
  cont: {
    type: Number
  },
  cont_to_be_pick: {
    type: Number
  },
  ticketId: { type: Schema.Types.ObjectId, ref: 'tickets' },
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = Product = mongoose.model('products', ProductSchema);
