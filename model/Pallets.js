const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    type: String,
    required: true
  },
  cont: {
    type: Number,
    default: 0
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = Pallet = mongoose.model('pallets', PalletSchema);
