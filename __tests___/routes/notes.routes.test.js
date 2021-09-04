const request = require("supertest");
const app = require("../../src/routes/app");

describe("CRUD", () => {
  describe("POST", () => {
    test("Full body", async () => {
      const newUserRequest = await request(app)
        .post("/users")
        .send({ userName: "Tsuki the Cat" });

      expect(newUserRequest.statusCode).toBe(200);

      const newNoteRequest = await request(app).post("/notes").send({
        note: "MEOWWWWW",
        userId: newUserRequest.body[0].id,
      });

      expect(newNoteRequest.statusCode).toBe(200);

      expect(newNoteRequest.body[0]).toStrictEqual({
        note: "MEOWWWWW",
        id: newNoteRequest.body[0].id,
        user_id: newUserRequest.body[0].id,
      });
    });

    test("No userId", async () => {
      const newNoteRequest = await request(app).post("/notes").send({
        note: "MEOWWWWW",
      });

      expect(newNoteRequest.statusCode).toBe(400);
      expect(newNoteRequest.error.text).toBe("'note' and 'userId' are needed.");
    });

    test("No note", async () => {
      const newNoteRequest = await request(app).post("/notes").send({
        note: "MEOWWWWW",
      });

      expect(newNoteRequest.statusCode).toBe(400);
      expect(newNoteRequest.error.text).toBe("'note' and 'userId' are needed.");
    });
  });
});
