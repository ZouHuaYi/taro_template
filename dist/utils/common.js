"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.delay = exports.loginStatus = exports.globalData = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// 判断用户是否已经登录
var loginStatus = exports.loginStatus = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _ref2, _ref3, err, result, _ref4, _ref5, userErr, user, _ref6, _ref7, loginErr, login;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return toWork(_index2.default.getSetting)();

          case 2:
            _ref2 = _context.sent;
            _ref3 = _slicedToArray(_ref2, 2);
            err = _ref3[0];
            result = _ref3[1];

            if (!(err || !result.authSetting['scope.userInfo'])) {
              _context.next = 9;
              break;
            }

            // 用户没有授权的时候跳转到授权页面
            _index2.default.navigateTo({
              url: '/pages/impower/impower '
            });
            return _context.abrupt("return");

          case 9:
            _context.next = 11;
            return toWork(_index2.default.getUserInfo)();

          case 11:
            _ref4 = _context.sent;
            _ref5 = _slicedToArray(_ref4, 2);
            userErr = _ref5[0];
            user = _ref5[1];

            if (!userErr) {
              _context.next = 18;
              break;
            }

            // 无法获取用户信息
            _tips2.default.toast('小程序无法获取用户信息，请重启小程序');
            return _context.abrupt("return");

          case 18:
            globalData.wxUseInfoData = user;
            _context.next = 21;
            return toWork(_index2.default.login)();

          case 21:
            _ref6 = _context.sent;
            _ref7 = _slicedToArray(_ref6, 2);
            loginErr = _ref7[0];
            login = _ref7[1];

            if (!loginErr) {
              _context.next = 28;
              break;
            }

            // 小程序无法登录
            _tips2.default.toast('小程序无法登录，请重启小程序');
            return _context.abrupt("return");

          case 28:
            //  获取微信登录的信息
            globalData.store.dispatch({
              type: 'login/wxLoginFn',
              loginData: {
                code: login.code,
                encryptedData: user.encryptedData,
                iv: user.iv
              }
            });

          case 29:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function loginStatus() {
    return _ref.apply(this, arguments);
  };
}();
// async await 的错误处理


exports.toWork = toWork;

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _tips = require("./tips.js");

var _tips2 = _interopRequireDefault(_tips);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
// 延迟时间
var delay = exports.delay = function delay(timeout) {
  return new Promise(function (resolve) {
    setTimeout(resolve, timeout);
  });
};