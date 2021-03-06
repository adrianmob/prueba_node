"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var authCtrl = _interopRequireWildcard(require("../controllers/auth.controller"));

var router = (0, _express.Router)();
router.post("/", authCtrl.login);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=auth.routes.js.map