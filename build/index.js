"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _app = _interopRequireDefault(require("./app"));

_app["default"].listen(process.env.PORT || 5000);

console.log("sever ready");
var _default = _app["default"];
exports["default"] = _default;
//# sourceMappingURL=index.js.map