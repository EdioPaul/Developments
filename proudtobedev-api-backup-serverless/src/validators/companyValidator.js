const yup = require("yup");
const locationValidator = require("./locationValidator");

module.exports = yup.object().shape({
  name: yup.string(),
  location: locationValidator,
});
