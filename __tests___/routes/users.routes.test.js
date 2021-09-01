const request = require("supertest");
const app = require("../../src/routes/app");

// const knex = require("../../config/config");

describe("CRUD", () => {
  describe("POST", () => {
    test("Full body", async () => {
      const newUserRequest = await request(app)
        .post("/users")
        .send({ userName: "Tsuki the Cat" });

      expect(newUserRequest.body[0]).toStrictEqual({
        user_name: "Tsuki the Cat",
        id: newUserRequest.body[0].id,
      });
    });

    test("No userName", async () => {
      // TODO
    });
  });
});
