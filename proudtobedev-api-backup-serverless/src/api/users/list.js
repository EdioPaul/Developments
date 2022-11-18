"use strict";

const listUsers = require("../../core/users/list");

module.exports.list = async (event, context) => {
  try {
    const filters = {};
    const users = await listUsers({ filters });

    return {
      statusCode: 200,
      body: JSON.stringify(users),
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
