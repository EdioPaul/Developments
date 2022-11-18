const mongoose = require("mongoose");
const locationSchema = require("./Location");

const companySchema = new mongoose.Schema(
  {
    name: String,
    location: locationSchema,
  },
  { _id: false, timestamps: { createdAt: false, updatedAt: false } }
);

module.exports = companySchema;
