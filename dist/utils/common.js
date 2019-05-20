"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

// 登录验证
var getSettingStatus = exports.getSettingStatus = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getSettingStatus() {
    return _ref.apply(this, arguments);
  };
}();
// async await 的错误处理


exports.toWork = toWork;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// 定义全局变量
var globalData = exports.globalData = {};function toWork(fn) {
  var _this = this;

  return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return fn.apply(_this, args);

          case 3:
            _context2.t0 = _context2.sent;
            return _context2.abrupt("return", [null, _context2.t0]);

          case 7:
            _context2.prev = 7;
            _context2.t1 = _context2["catch"](0);
            return _context2.abrupt("return", [_context2.t1]);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, _this, [[0, 7]]);
  }));
}