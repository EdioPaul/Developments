const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  product: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true,
    trim: true
  },
  quantity: {
    type: Number,
    required: true,
    trim: true
  },
  is_active: {
    type: Boolean,
    required: true,
    trim: true
  },
  category_ukey: {
    type: Number,
    required: true,
    trim: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'category',
    required: true 
  }
});

module.exports = mongoose.model('product', productSchema);