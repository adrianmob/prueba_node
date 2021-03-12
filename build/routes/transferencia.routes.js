"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var tranCtrl = _interopRequireWildcard(require("../controllers/transferencia.controller"));

var _jwt = require("../middleware/jwt");

var router = (0, _express.Router)();
router.post("/", _jwt.verifyToken, tranCtrl.createTransferencias);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=transferencia.routes.js.map