const yup = require("yup");

module.exports = yup.object().shape({
  country: yup.string(),
  state: yup.string(),
  city: yup.string(),
});
