const request = require("supertest");
const app = require("../../src/routes/app");

// const knex = require("../../config/config");

describe("CRUD", () => {
  describe("POST", () => {
    test("Full body", async () => {
      let newUserId;
      await request(app)
        .post("/users")
        .send({ userName: "Tsuki the Cat" })
        .expect((res) => {
          newUserId = res.body[0].id;

          let userName = res.body[0].user_name;
          let id = res.body[0].id;
          delete res.body;

          res.body = {
            userName,
            id,
          };

          console.log("res ", res.body);
        })
        .expect(200, {
          userName: "Tsuki the Cat",
          id: 1,
        });
    });

    test("No userName", async () => {
      // TODO
    });
  });
});
