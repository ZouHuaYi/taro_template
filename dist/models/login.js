"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _login = require("../api/login.js");

var _common = require("../utils/common.js");

exports.default = {
  namespace: 'login',
  state: {
    num: 90
  },
  effects: {
    wxLoginFn: /*#__PURE__*/regeneratorRuntime.mark(function wxLoginFn(_ref, _ref2) {
      var loginData = _ref.loginData;
      var call = _ref2.call,
          put = _ref2.put;

      var _ref3, _ref4, err, result;

      return regeneratorRuntime.wrap(function wxLoginFn$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return call((0, _common.toWork)(_login.authorLogin), loginData);

            case 2:
              _ref3 = _context.sent;
              _ref4 = _slicedToArray(_ref3, 2);
              err = _ref4[0];
              result = _ref4[1];

              console.log(err, result);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, wxLoginFn, this);
    })
  },
  reducers: {}
};