"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.delay = exports.loginStatus = exports.globalData = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// 判断用户是否已经登录
var loginStatus = exports.loginStatus = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var _this = this;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", new Promise(function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve, reject) {
                var login_number, t, _ref3, _ref4, err, result, _ref5, _ref6, userErr, user, _ref7, _ref8, loginErr, login;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (!globalData.userInfo) {
                          _context.next = 3;
                          break;
                        }

                        resolve();
                        return _context.abrupt("return");

                      case 3:
                        if (!login_type) {
                          _context.next = 7;
                          break;
                        }

                        // 如果已经登陆同时也走进去的如何轮询获取该值
                        login_number = 0;
                        t = setInterval(function () {
                          login_number += 1;
                          console.log("\u8DD1\u4E86" + login_number + "\u6B21");
                          if (login_type === false || login_number === 50) {
                            clearInterval(t);
                            resolve();
                          }
                        }, 200);
                        return _context.abrupt("return");

                      case 7:
                        login_type = true;
                        // 获取用户是否设置信息
                        _context.next = 10;
                        return toWork(_index2.default.getSetting)();

                      case 10:
                        _ref3 = _context.sent;
                        _ref4 = _slicedToArray(_ref3, 2);
                        err = _ref4[0];
                        result = _ref4[1];

                        if (err || !result.authSetting['scope.userInfo']) {
                          // 用户没有授权的时候跳转到授权页面
                          _index2.default.navigateTo({
                            url: '/pages/impower/impower '
                          });
                          login_type = false;
                          reject();
                        }
                        _context.next = 17;
                        return toWork(_index2.default.getUserInfo)();

                      case 17:
                        _ref5 = _context.sent;
                        _ref6 = _slicedToArray(_ref5, 2);
                        userErr = _ref6[0];
                        user = _ref6[1];

                        if (userErr) {
                          // 无法获取用户信息
                          _tips2.default.toast('小程序无法获取用户信息，请重启小程序');
                          login_type = false;
                          reject();
                        }
                        globalData.wxUseInfoData = user;
                        _context.next = 25;
                        return toWork(_index2.default.login)();

                      case 25:
                        _ref7 = _context.sent;
                        _ref8 = _slicedToArray(_ref7, 2);
                        loginErr = _ref8[0];
                        login = _ref8[1];

                        if (loginErr) {
                          // 小程序无法登录
                          _tips2.default.toast('小程序无法登录，请重启小程序');
                          login_type = false;
                          reject();
                        }
                        _context.prev = 30;
                        _context.next = 33;
                        return globalData.store.dispatch({
                          type: 'login/wxLoginFn',
                          loginData: {
                            code: login.code,
                            encryptedData: user.encryptedData,
                            iv: user.iv
                          }
                        });

                      case 33:
                        // 获取购物车的数量
                        globalData.store.dispatch({
                          type: 'detail/getCartAllNumber'
                        });

                      case 34:
                        _context.prev = 34;

                        login_type = false;
                        resolve(true);
                        return _context.finish(34);

                      case 38:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, _this, [[30,, 34, 38]]);
              }));

              return function (_x, _x2) {
                return _ref2.apply(this, arguments);
              };
            }()));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function loginStatus() {
    return _ref.apply(this, arguments);
  };
}();
// async await 的错误处理


exports.toWork = toWork;
exports.loginJudge = loginJudge;

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _tips = require("./tips.js");

var _tips2 = _interopRequireDefault(_tips);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// 定义全局变量
var globalData = exports.globalData = {};
var login_type = false;function toWork(fn) {
  var _this2 = this;

  return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return fn.apply(_this2, args);

          case 3:
            _context3.t0 = _context3.sent;
            return _context3.abrupt("return", [null, _context3.t0]);

          case 7:
            _context3.prev = 7;
            _context3.t1 = _context3["catch"](0);

            console.log(_context3.t1);
            return _context3.abrupt("return", [_context3.t1]);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, _this2, [[0, 7]]);
  }));
}
// 延迟时间
var delay = exports.delay = function delay(timeout) {
  return new Promise(function (resolve) {
    setTimeout(resolve, timeout);
  });
};
// 验证是否已经登陆
function loginJudge() {
  return new Promise(function (resolve, reject) {
    if (!globalData.userInfo) {
      _index2.default.navigateTo({
        url: '/pages/login/login'
      });
      reject();
    }
    resolve();
  });
}