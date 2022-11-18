const mongoose = require("mongoose");
const dotenv = require("dotenv");

mongoose.Promise = global.Promise;
dotenv.config();

let isConnected;

module.exports = connectToDatabase = () => {
  if (isConnected) {
    console.log("=> using existing database connection");
    return Promise.resolve();
  }

  console.log("=> using new database connection");
  return mongoose.connect(process.env.MONGO_URI).then((db) => {
    isConnected = db.connections[0].readyState;
  });
};
