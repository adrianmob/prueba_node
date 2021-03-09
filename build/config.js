"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _pg = require("pg");

var pool = new _pg.Pool({
  host: "localhost",
  user: "adrian",
  password: "",
  database: "prueba",
  port: "5432"
});
var _default = pool;
exports["default"] = _default;