const mongoose = require('mongoose');
const Categories = mongoose.model('category');

exports.listCategories = async () => {
  const res = await Categories.find({}, 'category -_id');
  return res.json(category);
};

exports.createCategory = async data => {
  const Category = new Categories(data);
  await Category.save();
};

exports.updateCategory = async (id, data) => {
  await Categories.findByIdAndUpdate(id, {
    $set: data
  });
};

exports.deleteCategory = async id => {
  await Categories.findByIdAndDelete(id);
};
