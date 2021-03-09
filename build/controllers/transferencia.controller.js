"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTransferencias = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _config = _interopRequireDefault(require("../config"));

// Recibe como parametro clabe y deposito y regresa un mensaje de confirmacion de la transaccion
var createTransferencias = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, clabe, deposito, query_cuenta, balance, query_deposito;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, clabe = _req$body.clabe, deposito = _req$body.deposito;
            _context.next = 3;
            return _config["default"].query("SELECT balance from cuenta WHERE clabe=$1", [clabe]);

          case 3:
            query_cuenta = _context.sent;
            balance = query_cuenta.rows[0].balance;
            balance = parseFloat(balance);
            balance += parseFloat(deposito);
            _context.next = 9;
            return _config["default"].query("UPDATE cuenta SET balance = ($1) WHERE clabe=$2 RETURNING *", [balance, clabe]);

          case 9:
            query_deposito = _context.sent;

            if (query_deposito.rows.length > 0) {
              res.json({
                deposito: "exito"
              });
            } else {
              res.status(401).json({
                error: "error"
              });
            }

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createTransferencias(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createTransferencias = createTransferencias;