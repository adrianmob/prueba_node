"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var userCtrl = _interopRequireWildcard(require("../controllers/user.controller"));

var _jwt = require("../middleware/jwt");

var router = (0, _express.Router)();
router.post("/", _jwt.verifyToken, userCtrl.createHolder);
router.post("/deposito", _jwt.verifyToken, userCtrl.createDeposito);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=user.routes.js.map