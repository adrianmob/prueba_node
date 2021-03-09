"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var tranCtrl = _interopRequireWildcard(require("../controllers/transferencia.controller"));

var _authjwt = require("../middleware/authjwt");

var router = (0, _express.Router)();
router.post("/", _authjwt.verifyToken, tranCtrl.createTransferencias);
var _default = router;
exports["default"] = _default;