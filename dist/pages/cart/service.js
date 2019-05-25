"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addOrDel = exports.cartShopList = undefined;

// 获取所有的顾购物车数据
var cartShopList = exports.cartShopList = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", (0, _request2.default)({
              url: '/rest/shoppingcart/list',
              data: {
                userId: _common.globalData.userInfo.id
              }
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function cartShopList() {
    return _ref.apply(this, arguments);
  };
}();
// 删除购物车的接口


var addOrDel = exports.addOrDel = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function addOrDel() {
    return _ref2.apply(this, arguments);
  };
}();

var _request = require("../../utils/request.js");

var _request2 = _interopRequireDefault(_request);

var _common = require("../../utils/common.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }