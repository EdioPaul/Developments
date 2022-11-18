const mongoose = require('mongoose');
const Products = mongoose.model('product');

exports.listProducts = async () => {
  const res = await Products.find({}, 'product -_id');
  return res;
};

exports.createProduct = async data => {
  const Product = new Products(data);
  await Product.save();
};

exports.updateProduct = async (id, data) => {
  await Products.findByIdAndUpdate(id, {
    $set: data
  });
};

exports.deleteProduct = async id => {
  await Products.findByIdAndDelete(id);
};