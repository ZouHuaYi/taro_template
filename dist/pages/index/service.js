'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hotProduct = exports.bannerList = undefined;

// 获取banner图
var bannerList = exports.bannerList = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', (0, _request2.default)({
              url: '/rest/banner/list',
              data: {
                page: 1,
                row: 20,
                position: 0
              }
            }));

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function bannerList() {
    return _ref.apply(this, arguments);
  };
}();
// 热门产品的数据


var hotProduct = exports.hotProduct = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt('return', (0, _request2.default)({
              url: '/rest/product/list',
              data: {
                isHot: 1,
                page: 1,
                rows: 10,
                source: 0
              }
            }));

          case 1:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function hotProduct() {
    return _ref2.apply(this, arguments);
  };
}();

var _request = require('../../utils/request.js');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }