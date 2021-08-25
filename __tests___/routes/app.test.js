const request = require("supertest");
// const { testConfig } = require("../../knexFile");
const app = require("../../src/routes/app");

describe("Test the root path", () => {
  test("It should response the GET method", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
});