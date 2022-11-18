const mongoose = require("mongoose");
const githubSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      unique: true,
      required: true,
    },
    avatar_url: String,
    url: String,
  },
  { _id: false, timestamps: { createdAt: false, updatedAt: false } }
);

module.exports = githubSchema;
