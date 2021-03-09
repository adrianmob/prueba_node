import request from "supertest";
import app from "../src/index";

const chai = require("chai");
const expect = chai.expect;

/**
 * Testing Post auth funcion login
 */
describe("POST /login", () => {
  it("respon with token de autenticacion", () => {
    return request(app)
      .post("/api/auth")
      .send({
        email: "admin@gmail.com",
        password: 123456789,
      })
      .then((res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.a("string");
      });
  });
});

/**
 * Testing Post auth funcion login
 */
describe("POST /login", () => {
  it("respon with token de autenticacion", () => {
    return request(app)
      .post("/api/auth")
      .send({
        email: "admin@gmail.com",
        password: 123456789,
      })
      .then((res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.a("string");
      });
  });
});
