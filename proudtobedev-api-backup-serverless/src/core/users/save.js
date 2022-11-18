const User = require("../../collections/User");
const connectDb = require("../../connection");
const userValidator = require("../../validators/userValidator");

module.exports = async (data) => {
  try {
    const userData = data.data;
    await userValidator.validateSync(userData);

    await connectDb();

    const user = await User.findOneAndUpdate(
      { login: userData.login },
      userData,
      {
        new: true,
        upsert: true,
      }
    );
    return user;
  } catch (e) {
    throw e.message;
  }
};
