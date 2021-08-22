const request = require("supertest");
const app = require("../../src/routes/app");

describe("genericRouteBuilder", () => {
  test("test all automatically generated 'getAll' routes", async () => {
    const notesResponse = await request(app).get("/notes");
    console.log("notesResponse ", notesResponse.body);
    expect(notesResponse.statusCode).toBe(200);

    const usersResponse = await request(app).get("/users");
    console.log("usersResponse ", usersResponse.body);
    expect(usersResponse.statusCode).toBe(200);

    // we want to be sure it only creates routes we expect
    const losersResponse = await request(app).get("/losers");
    expect(losersResponse.statusCode).toBe(404);
  });
});
