const knex = require("../../config/config");

async function postNote(body) {
  if (!body.note || !body.userId) {
    return {
      status: 400,
      result: "'note' and 'userId' are needed.",
    };
  }

  let result;

  try {
    result = await knex("notes")
      .insert({
        note: body.note,
        user_id: body.userId,
      })
      .returning("*");
  } catch (error) {
    return {
      status: 400,
      result: `There was a problem creating a new note: \n${error.message}`,
    };
  }

  return {
    result,
    status: 200,
  };
}

async function getNotesByUserId(body) {
  if (!body.userId) {
    return {
      status: 400,
      result: "'userId', is needed",
    };
  }

  let result;

  try {
    result = await knex("notes").where({ user_id: body.userId });
  } catch (error) {
    return {
      status: 400,
      result: `There was a problem fetching notes: \n${error.message}`,
    };
  }

  return {
    result,
    status: 200,
  };
}

module.exports = { postNote, getNotesByUserId };
