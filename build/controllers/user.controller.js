"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDeposito = exports.createHolder = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _config = _interopRequireDefault(require("../config"));

// Recibe como parametro email y password y regresa el usuario creado
var createHolder = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var role, _req$body, email, password, clabe, query_cuenta, cuenta_id, query_holder;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return checkRole(req.userId);

          case 2:
            role = _context.sent;

            if (!(role === "ADMIN")) {
              _context.next = 17;
              break;
            }

            _req$body = req.body, email = _req$body.email, password = _req$body.password;
            clabe = Date.now();
            _context.next = 8;
            return _config["default"].query("INSERT INTO cuenta (CLABE,balance)  VALUES ($1, $2) RETURNING *", [clabe, 0]);

          case 8:
            query_cuenta = _context.sent;
            cuenta_id = query_cuenta.rows[0].id;
            _context.next = 12;
            return _config["default"].query("INSERT INTO users (email,password, role, cuenta_id) VALUES ($1,$2,$3,$4) RETURNING *", [email, password, "HOLDER", cuenta_id]);

          case 12:
            query_holder = _context.sent;

            if (query_holder.rows.length > 0) {
              res.json({
                holder: query_holder.rows[0]
              });
            }

            res.json({
              error: "error"
            });
            _context.next = 18;
            break;

          case 17:
            res.status(401).json({
              message: "Unauthorized"
            });

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createHolder(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // Recibe como parametro id_cuenta y deposito y regresa un mensaje de confirmacion de la transaccion


exports.createHolder = createHolder;

var createDeposito = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var role, _req$body2, id_cuenta, deposito, query_cuenta, balance, query_deposito;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return checkRole(req.userId);

          case 2:
            role = _context2.sent;

            if (!(role === "ADMIN")) {
              _context2.next = 17;
              break;
            }

            _req$body2 = req.body, id_cuenta = _req$body2.id_cuenta, deposito = _req$body2.deposito;
            _context2.next = 7;
            return _config["default"].query("SELECT balance from cuenta WHERE id=$1", [id_cuenta]);

          case 7:
            query_cuenta = _context2.sent;
            balance = query_cuenta.rows[0].balance;
            balance = parseFloat(balance);
            balance += parseFloat(deposito);
            _context2.next = 13;
            return _config["default"].query("UPDATE cuenta SET balance = ($1) WHERE id=$2 RETURNING *", [balance, id_cuenta]);

          case 13:
            query_deposito = _context2.sent;

            if (query_deposito.rows.length > 0) {
              res.json({
                deposito: query_deposito.rows[0]
              });
            } else {
              res.status(401).json({
                error: "error"
              });
            }

            _context2.next = 18;
            break;

          case 17:
            res.status(401).json({
              message: "Unauthorized"
            });

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function createDeposito(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createDeposito = createDeposito;

var checkRole = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(userId) {
    var query_user;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _config["default"].query("SELECT role from users WHERE id=$1", [userId]);

          case 2:
            query_user = _context3.sent;
            return _context3.abrupt("return", query_user.rows[0].role);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function checkRole(_x5) {
    return _ref3.apply(this, arguments);
  };
}();