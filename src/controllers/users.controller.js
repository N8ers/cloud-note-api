const knex = require("../../config/config");

async function postUser(body) {
  const { userName } = body;

  if (!userName || !userName.length) {
    return {
      status: 400,
      result: "Username is needed.",
    };
  }

  let result;

  try {
    result = await knex("users")
      .insert({
        user_name: userName,
      })
      .returning("*");
  } catch (error) {
    return {
      status: 400,
      result: `There was a problem creating a new user: \n${error.message}`,
    };
  }

  return {
    result,
    status: 200,
  };
}

module.exports = { postUser };
