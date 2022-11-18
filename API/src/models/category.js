const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  category: {
    type: String,
    required: true,
    trim: true
  },
  ukey: {
    type: Number,
    required: true,
    trim: true
  },
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref:'product',
  }]
  
  
  
});

module.exports = mongoose.model('category', categorySchema);