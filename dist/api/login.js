'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bindWechat = exports.finishPassword = exports.loginApi = exports.sendCode = exports.authorLogin = undefined;

// 获取用户的登录信息
var authorLogin = exports.authorLogin = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(params) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', (0, _request2.default)({
              url: '/rest/user/getAppletUnionId',
              data: {
                encryptedData: params.encryptedData,
                iv: params.iv,
                code: params.code
              }
            }));

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function authorLogin(_x) {
    return _ref.apply(this, arguments);
  };
}();
// 发送验证码


var sendCode = exports.sendCode = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(params) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt('return', (0, _request2.default)({
              url: '/rest/user/send_code',
              data: {
                phone: params.phone,
                type: 5
              }
            }));

          case 1:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function sendCode(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
// 验证码登录


var loginApi = exports.loginApi = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(params) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt('return', (0, _request2.default)({
              url: '/rest/user/login_by_code',
              data: {
                phone: params.phone,
                code: params.code
              }
            }));

          case 1:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function loginApi(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
// 完善密码


var finishPassword = exports.finishPassword = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(params) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt('return', (0, _request2.default)({
              url: '/rest/user/improve_password',
              data: {
                password: params.password
              }
            }));

          case 1:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function finishPassword(_x4) {
    return _ref4.apply(this, arguments);
  };
}();
// 绑定微信


var bindWechat = exports.bindWechat = function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(params) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt('return', (0, _request2.default)({
              url: '/rest/user/open_bind_unbundled',
              data: {
                wechat: params.unionId,
                unionId: params.unionId,
                id: params.id,
                action: 0
              }
            }));

          case 1:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function bindWechat(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

var _request = require('../utils/request.js');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }