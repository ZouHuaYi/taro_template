'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getShopCartNumber = exports.addOrdeleteCartAction = exports.getDetail = undefined;

// 获取商品详情数据 type=1 不知是什么意思
var getDetail = exports.getDetail = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(params) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', (0, _request2.default)({
              url: '/rest/product/detail',
              data: {
                id: params.id,
                type: 1
              }
            }));

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getDetail(_x) {
    return _ref.apply(this, arguments);
  };
}();
// 添加购物车 action:1 add 0 delete


var addOrdeleteCartAction = exports.addOrdeleteCartAction = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(params) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt('return', (0, _request2.default)({
              url: '/rest/shoppingcart/add_or_delete',
              data: {
                action: params.action === 0 ? 0 : 1,
                number: params.number || undefined,
                specificationGroupId: params.typeid || undefined,
                productId: params.id || undefined,
                ids: params.ids || undefined,
                userId: params.userid
              }
            }));

          case 1:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function addOrdeleteCartAction(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
// 获取购物陈数量


var getShopCartNumber = exports.getShopCartNumber = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(params) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt('return', (0, _request2.default)({
              url: '/rest/shoppingcart/quantity',
              data: {
                userId: params.userid
              }
            }));

          case 1:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function getShopCartNumber(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

var _request = require('../../utils/request.js');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }