'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setDefaultAddress = exports.getDefaultAddress = exports.updateArea = exports.addAreaData = exports.deletaAreaData = exports.getAreaListData = undefined;

// 获取地址数据列表
var getAreaListData = exports.getAreaListData = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(params) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', (0, _request2.default)({
              url: '/rest/address/list',
              data: {
                userId: params.userid,
                page: 1,
                rows: 10
              }
            }));

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getAreaListData(_x) {
    return _ref.apply(this, arguments);
  };
}();
// 删除地址


var deletaAreaData = exports.deletaAreaData = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(params) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt('return', (0, _request2.default)({
              url: '/rest/address/delete',
              data: {
                addressId: params.id
              }
            }));

          case 1:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function deletaAreaData(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
// 添加地址的接口


var addAreaData = exports.addAreaData = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(params) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt('return', (0, _request2.default)({
              url: '/rest/address/add',
              data: {
                userId: params.userid,
                area: params.area,
                receivePhone: params.phone,
                receiveName: params.name,
                address: params.address
              }
            }));

          case 1:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function addAreaData(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
// 修改数据 更新数据


var updateArea = exports.updateArea = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(params) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt('return', (0, _request2.default)({
              url: '/rest/address/update',
              data: {
                id: params.id,
                area: params.area,
                receivePhone: params.phone,
                receiveName: params.name,
                address: params.address
              }
            }));

          case 1:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function updateArea(_x4) {
    return _ref4.apply(this, arguments);
  };
}();
// 获取 默认 地址


var getDefaultAddress = exports.getDefaultAddress = function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(params) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt('return', (0, _request2.default)({
              url: '/rest/address/get_default',
              data: {
                userId: params.userid
              }
            }));

          case 1:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function getDefaultAddress(_x5) {
    return _ref5.apply(this, arguments);
  };
}();
// 设置默认地址的 api


var setDefaultAddress = exports.setDefaultAddress = function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(params) {
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            return _context6.abrupt('return', (0, _request2.default)({
              url: '/rest/address/set_default',
              data: {
                userId: params.userid,
                addressId: params.id
              }
            }));

          case 1:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function setDefaultAddress(_x6) {
    return _ref6.apply(this, arguments);
  };
}();

var _request = require('../../utils/request.js');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }