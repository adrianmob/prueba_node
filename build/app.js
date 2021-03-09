"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _auth = _interopRequireDefault(require("./routes/auth.routes"));

var _user = _interopRequireDefault(require("./routes/user.routes"));

var _transferencia = _interopRequireDefault(require("./routes/transferencia.routes"));

var _cors = _interopRequireDefault(require("cors"));

var app = (0, _express["default"])();
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].json());
app.get("/", function (req, res) {
  res.json("welcome");
});
app.use((0, _cors["default"])());
app.use("/api/auth", _auth["default"]);
app.use("/api/holder", _user["default"]);
app.use("/api/transferencia", _transferencia["default"]);
var _default = app;
exports["default"] = _default;