const mongoose = require("mongoose");
const LocationSchema = require("./Location");
const GithubDataSchema = require("./GithubData");
const CompanySchema = require("./Company");

const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    username: {
      type: String,
      unique: true,
      required: true,
    },
    location: LocationSchema,
    github: GithubDataSchema,
    company: CompanySchema,
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema, "users");
module.exports = User;
