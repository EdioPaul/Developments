const mongoose = require("mongoose");
const locationSchema = new mongoose.Schema(
  {
    country: String,
    state: String,
    city: String,
  },
  { _id: false, timestamps: { createdAt: false, updatedAt: false } }
);

module.exports = locationSchema;
