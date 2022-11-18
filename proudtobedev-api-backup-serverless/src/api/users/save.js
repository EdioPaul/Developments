"use strict";

const saveUser = require("../../core/users/save");

module.exports.save = async (event, context) => {
  try {
    const data = JSON.parse(event.body);
    const user = await saveUser({ data });

    return {
      statusCode: 200,
      body: JSON.stringify(user),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        error,
      }),
    };
  }
};
