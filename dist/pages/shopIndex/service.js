'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productList = exports.bannerList = exports.categoryList = undefined;

// /rest/category/list 获取大分类 pid=0&page=1&type=2&rows=10
var categoryList = exports.categoryList = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', (0, _request2.default)({
              url: '/rest/category/list',
              data: {
                pid: 0,
                page: 1,
                type: 2,
                rows: 20
              }
            }));

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function categoryList() {
    return _ref.apply(this, arguments);
  };
}();
// categoryId=4&page=1&rows=10&position=2 获取banner的数据


var bannerList = exports.bannerList = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(params) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt('return', (0, _request2.default)({
              url: '/rest/banner/list',
              data: {
                categoryId: params.id,
                page: 1,
                rows: 10,
                position: 2
              }
            }));

          case 1:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function bannerList(_x) {
    return _ref2.apply(this, arguments);
  };
}();
// isRecommend=1&categoryId=4&userId=4165&page=1&rows=10&source=0&city=%E5%B9%BF%E5%B7%9E%E5%B8%82
// order 1 按照销售得量的方式排序，2 价格由高到低，3 价格由低到高


var productList = exports.productList = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(params) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt('return', (0, _request2.default)({
              url: '/rest/product/list',
              data: {
                isRecommend: 1,
                categoryId: params.id,
                order: params.order || undefined,
                page: params.page || 1,
                rows: 10,
                source: 0,
                city: ''
              }
            }));

          case 1:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function productList(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

var _request = require('../../utils/request.js');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }