const yup = require("yup");

module.exports = yup.object().shape({
  github_id: yup.number().required().positive().integer(),
  avatar_url: yup.string().url(),
  url: yup.string().url(),
});
