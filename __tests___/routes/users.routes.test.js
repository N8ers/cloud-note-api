const request = require("supertest");
const app = require("../../src/routes/app");

describe("CRUD", () => {
  describe("POST", () => {
    test("Full body", async () => {
      const newUserRequest = await request(app)
        .post("/users")
        .send({ userName: "Tsuki the Cat" });

      expect(newUserRequest.statusCode).toBe(200);

      expect(newUserRequest.body[0]).toStrictEqual({
        user_name: "Tsuki the Cat",
        id: newUserRequest.body[0].id,
      });
    });

    test("No userName", async () => {
      const newUserRequest = await request(app).post("/users").send();

      expect(newUserRequest.statusCode).toBe(400);
      expect(newUserRequest.error.text).toBe("Username is needed.");
    });
  });
});
