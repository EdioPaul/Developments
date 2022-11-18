"use strict";

const getUser = require("../../core/users/list");

module.exports.get = async (event, context) => {
  try {
    const filters = event.pathParameters;
    const user = await getUser({ filters });
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
