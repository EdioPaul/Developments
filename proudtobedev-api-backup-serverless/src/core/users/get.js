const User = require("../../collections/User");
const connectDb = require("../../connection");

module.exports = async (filters) => {
  try {
    await connectDb();
    const users = await User.findOne(filters);

    return users;
  } catch (e) {
    throw e.message;
  }
};
