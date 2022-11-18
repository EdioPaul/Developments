"use strict";

const getUser = require("../../core/users/get");
const saveUser = require("../../core/users/save");

module.exports.auth = async (event, context) => {
  try {
    const data = JSON.parse(event.body);
    let user = await getUser({ login: data.login });
    console.log(user);

    if (!user) {
      user = await saveUser({ data });
    }

    return {
      statusCode: 200,
      body: JSON.stringify(user),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 400,
      body: JSON.stringify({
        error,
      }),
    };
  }
};
