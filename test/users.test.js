import request from "supertest";
import app from "../src/index";

const chai = require("chai");
const expect = chai.expect;

let token;

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
        token = res.body;
        expect(res.body).to.be.a("string");
      });
  });
});

/**
 * Testing Post holder funcion create holder
 */
describe("POST /holder", () => {
  it("response with object of holder", () => {
    return request(app)
      .post("/api/holder")
      .set("x-access-token", token)
      .send({
        email: "holder_prueba@gmail.com",
        password: 123456789,
      })
      .then((res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.a("object");
      });
  });
});

/**
 * Testing Post deposito funcion deposito
 */
describe("POST /deposito", () => {
  it("response with object of deposito", () => {
    return request(app)
      .post("/api/holder/deposito")
      .set("x-access-token", token)
      .send({
        id_cuenta: 18,
        deposito: 200,
      })
      .then((res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.a("object");
      });
  });
});

/**
 * Testing Post transferencia funcion transferencia
 */
describe("POST /deposito", () => {
  it("response with object of deposito", () => {
    return request(app)
      .post("/api/transferencia")
      .set("x-access-token", token)
      .send({
        clabe: 1615235431109,
        deposito: 200,
      })
      .then((res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.a("object");
      });
  });
});
