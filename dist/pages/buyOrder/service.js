"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.orderTypeDetail = exports.cancalOrder = exports.deleteOrder = exports.remindShop = exports.orderList = undefined;

// 获取数据订单列表
var orderList = exports.orderList = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(params) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", (0, _request2.default)({
              url: '/rest/order/list',
              data: {
                userId: _common.globalData.userInfo.id,
                page: params.page,
                rows: params.rows,
                type: 3,
                status: params.status
              }
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function orderList(_x) {
    return _ref.apply(this, arguments);
  };
}();
// 提醒发货


var remindShop = exports.remindShop = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(params) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", (0, _request2.default)({
              url: '/rest/order/remind',
              data: {
                orderId: params.id
              }
            }));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function remindShop(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
// 删除订单接口


var deleteOrder = exports.deleteOrder = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(params) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", (0, _request2.default)({
              url: '/rest/order/delete',
              data: {
                orderId: params.id
              }
            }));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function deleteOrder(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
// 取消订单


var cancalOrder = exports.cancalOrder = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(params) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", (0, _request2.default)({
              url: '/rest/order/update_status',
              data: {
                orderId: params.id,
                status: -1
              }
            }));

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function cancalOrder(_x4) {
    return _ref4.apply(this, arguments);
  };
}();
// 获取订单详细信息


var orderTypeDetail = exports.orderTypeDetail = function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(params) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt("return", (0, _request2.default)({
              url: '/rest/order/detail',
              data: {
                orderId: params.id
              }
            }));

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function orderTypeDetail(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

var _request = require("../../utils/request.js");

var _request2 = _interopRequireDefault(_request);

var _common = require("../../utils/common.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }