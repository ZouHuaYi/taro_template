"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _login = require("../api/login.js");

var _common = require("../utils/common.js");

var _tips = require("../utils/tips.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 登录的所有逻辑状态管理
exports.default = {
  namespace: 'login',
  state: {
    user: {},
    openid: '',
    unionid: '',
    codeText: '发送验证码',
    disabled: true,
    passwordStatus: false
  },
  effects: {
    // 微信自动登录
    wxLoginFn: /*#__PURE__*/regeneratorRuntime.mark(function wxLoginFn(_ref, _ref2) {
      var loginData = _ref.loginData;
      var call = _ref2.call,
          put = _ref2.put;

      var _ref3, _ref4, err, result;

      return regeneratorRuntime.wrap(function wxLoginFn$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return call((0, _common.toWork)(_login.authorLogin), loginData);

            case 2:
              _ref3 = _context.sent;
              _ref4 = _slicedToArray(_ref3, 2);
              err = _ref4[0];
              result = _ref4[1];

              if (!err) {
                _context.next = 8;
                break;
              }

              return _context.abrupt("return");

            case 8:
              if (!(result.messageCode == 900)) {
                _context.next = 14;
                break;
              }

              _context.next = 11;
              return put({
                type: 'save',
                data: {
                  user: result.data.user,
                  openid: result.data.openid
                }
              });

            case 11:
              _common.globalData.userInfo = result.data.user;
              _context.next = 21;
              break;

            case 14:
              if (!(result.messageCode == 132)) {
                _context.next = 20;
                break;
              }

              _context.next = 17;
              return put({
                type: 'save',
                data: {
                  openid: result.data.openid,
                  unionid: result.data.unionid
                }
              });

            case 17:
              // 跳转到登录页面
              _index2.default.navigateTo({
                url: '/pages/login/login'
              });
              _context.next = 21;
              break;

            case 20:
              // 接口出错的时候
              _tips.Tips.toast(result.message || '无法获取数据');

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, wxLoginFn, this);
    }),

    // 发送验证码
    sendCodeFun: /*#__PURE__*/regeneratorRuntime.mark(function sendCodeFun(_ref5, _ref6) {
      var phone = _ref5.phone;
      var call = _ref6.call,
          put = _ref6.put;

      var _ref7, _ref8, err, result, tim;

      return regeneratorRuntime.wrap(function sendCodeFun$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _tips.Tips.loading('正在发送');
              _context2.next = 3;
              return call((0, _common.toWork)(_login.sendCode), phone);

            case 3:
              _ref7 = _context2.sent;
              _ref8 = _slicedToArray(_ref7, 2);
              err = _ref8[0];
              result = _ref8[1];

              _tips.Tips.loaded();

              if (!err) {
                _context2.next = 10;
                break;
              }

              return _context2.abrupt("return");

            case 10:
              if (!(result.messageCode == 900)) {
                _context2.next = 27;
                break;
              }

              _tips.Tips.toast('验证码发送成功');
              _context2.next = 14;
              return put({ type: 'save', data: { disabled: false } });

            case 14:
              tim = 59;

            case 15:
              if (!(tim > 0)) {
                _context2.next = 23;
                break;
              }

              tim--;
              _context2.next = 19;
              return call(_common.delay, 1000);

            case 19:
              _context2.next = 21;
              return put({ type: 'save', data: { codeText: tim + "s\u540E\u91CD\u8BD5" } });

            case 21:
              _context2.next = 15;
              break;

            case 23:
              _context2.next = 25;
              return put({ type: 'save', data: { codeText: "\u91CD\u65B0\u83B7\u53D6" } });

            case 25:
              _context2.next = 28;
              break;

            case 27:
              _tips.Tips.toast(result.message || '验证码发送失败');

            case 28:
              _context2.next = 30;
              return put({ type: 'save', data: { disabled: true } });

            case 30:
            case "end":
              return _context2.stop();
          }
        }
      }, sendCodeFun, this);
    }),

    // 点击登录按钮进行登录
    btnLoginFun: /*#__PURE__*/regeneratorRuntime.mark(function btnLoginFun(_ref9, _ref10) {
      var params = _ref9.params;
      var call = _ref10.call,
          put = _ref10.put;

      var _ref11, _ref12, err, result;

      return regeneratorRuntime.wrap(function btnLoginFun$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _tips.Tips.loading('正在登录');
              _context3.next = 3;
              return call((0, _common.toWork)(_login.loginApi), params);

            case 3:
              _ref11 = _context3.sent;
              _ref12 = _slicedToArray(_ref11, 2);
              err = _ref12[0];
              result = _ref12[1];

              _tips.Tips.loaded();

              if (!err) {
                _context3.next = 10;
                break;
              }

              return _context3.abrupt("return");

            case 10:
              if (!(result.messageCode == 900)) {
                _context3.next = 18;
                break;
              }

              _context3.next = 13;
              return put({ type: 'save', data: {
                  user: result.data
                } });

            case 13:
              _common.globalData.userInfo = result.data;
              _context3.next = 16;
              return put({
                type: "bindWechat"
              });

            case 16:
              _context3.next = 25;
              break;

            case 18:
              if (!(result.messageCode == 129)) {
                _context3.next = 24;
                break;
              }

              _context3.next = 21;
              return put({ type: 'save', data: { passwordStatus: true } });

            case 21:
              _common.globalData.userInfo = result.data;
              _context3.next = 25;
              break;

            case 24:
              _tips.Tips.toast(result.message || '验证码出错');

            case 25:
            case "end":
              return _context3.stop();
          }
        }
      }, btnLoginFun, this);
    }),

    // 输入密码的
    inputPassword: /*#__PURE__*/regeneratorRuntime.mark(function inputPassword(_ref13, _ref14) {
      var password = _ref13.password;
      var call = _ref14.call,
          put = _ref14.put;

      var _ref15, _ref16, err, result;

      return regeneratorRuntime.wrap(function inputPassword$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _tips.Tips.loading('提交密码');
              _context4.next = 3;
              return call((0, _common.toWork)(_login.finishPassword), password);

            case 3:
              _ref15 = _context4.sent;
              _ref16 = _slicedToArray(_ref15, 2);
              err = _ref16[0];
              result = _ref16[1];

              _tips.Tips.loaded();

              if (!err) {
                _context4.next = 10;
                break;
              }

              return _context4.abrupt("return");

            case 10:
              if (!(result.messageCode == 900)) {
                _context4.next = 15;
                break;
              }

              _context4.next = 13;
              return put({
                type: "bindWechat"
              });

            case 13:
              _context4.next = 16;
              break;

            case 15:
              _tips.Tips.toast(result.message || '无法设置密码');

            case 16:
            case "end":
              return _context4.stop();
          }
        }
      }, inputPassword, this);
    }),
    bindWechat: /*#__PURE__*/regeneratorRuntime.mark(function bindWechat(_, _ref17) {
      var call = _ref17.call,
          select = _ref17.select;
      var user;
      return regeneratorRuntime.wrap(function bindWechat$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return select(function (state) {
                return state.login;
              });

            case 2:
              user = _context5.sent;

              console.log(user, 'x-x-');
              _context5.next = 6;
              return call((0, _common.toWork)(_login.bindWechat), {
                wechat: user.unionid,
                unionId: user.unionid,
                id: user.user.id
              });

            case 6:
              _index2.default.navigateBack();

            case 7:
            case "end":
              return _context5.stop();
          }
        }
      }, bindWechat, this);
    })
  },
  reducers: {
    save: function save(state, action) {
      return _extends({}, state, action.data);
    }
  }
};