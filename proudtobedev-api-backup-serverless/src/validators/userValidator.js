const yup = require("yup");
const githubDataValidator = require("./githubDataValidator");
const locationValidator = require("./locationValidator");
const companyValidator = require("./companyValidator");

module.exports = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  email: yup.string().email().required(),
  website: yup.string().url(),
  login: yup.string().required(),
  github: githubDataValidator,
  location: locationValidator,
  company: companyValidator,
});
