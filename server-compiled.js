"use strict";

var _express = _interopRequireDefault(require("express"));

var _databaseOperations = require("./database-operations");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var app = (0, _express["default"])();
app.use(_express["default"].json());
(0, _databaseOperations.connectToDatabase)();
/* DECLARE ENDPOINTS */
// GET

app.get('/',
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_, res) {
    var users;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _databaseOperations.getUsers)();

          case 3:
            users = _context.sent;
            if (users) res.json(users);else console.log({
              success: false
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log({
              success: false
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}()); // POST

app.post('/',
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var user;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return res.json((0, _databaseOperations.createNewUser)(req.body));

          case 3:
            user = _context2.sent;
            if (user) console.log(user);else console.log({
              success: false
            });
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log({
              success: false
            });

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()); // UPDATE

app.put('/:id', function (req, res) {
  var user = (0, _databaseOperations.updateUser)(req.params.id, req.body);

  if (user) {
    res.json({
      success: true,
      user: user
    });
  } else res.status(404).json({
    success: false
  });
}); // DELETE

app.get('/:id', function (req, res) {
  var user = (0, _databaseOperations.deleteUser)(req.params.id);
  if (user) res.json({
    success: true
  });else res.status(404).json({
    success: false
  });
});
/* START SERVER */

var port = 5000;
app.listen(port, function () {
  return console.log("Server started on port: http://localhost:".concat(port));
});
