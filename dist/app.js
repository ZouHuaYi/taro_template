"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require("./npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

require("./npm/@tarojs/async-await/index.js");

var _index3 = require("./npm/@tarojs/redux/index.js");

var _dva = require("./utils/dva.js");

var _dva2 = _interopRequireDefault(_dva);

var _index4 = require("./models/index.js");

var _index5 = _interopRequireDefault(_index4);

var _common = require("./utils/common.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
var dvaApp = _dva2.default.createApp({
  initialState: {},
  models: _index5.default
});
var store = dvaApp.getStore();
(0, _index3.setStore)(store);

var _App = function (_BaseComponent) {
  _inherits(_App, _BaseComponent);

  function _App() {
    _classCallCheck(this, _App);

    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */
    var _this = _possibleConstructorReturn(this, (_App.__proto__ || Object.getPrototypeOf(_App)).apply(this, arguments));

    _this.config = {
      "pages": ['pages/index/index', 'pages/detail/detail', 'pages/cart/cart', 'pages/shopIndex/shopIndex', 'pages/order/order', 'pages/addArea/addArea', 'pages/areaList/areaList', 'pages/user/user', 'pages/search/search', 'pages/login/login', 'pages/buyOrder/buyOrder', 'pages/test/index', 'pages/impower/impower'],
      "window": {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'white',
        navigationStyle: "custom"
      },
      "tabBar": {
        "color": "#7D7C85",
        "selectedColor": "#EE6697",
        "list": [{
          "pagePath": "pages/index/index",
          "iconPath": "./assets/tab/shop_default.png",
          "selectedIconPath": "./assets/tab/shop_active.png",
          "text": "首页"
        }, {
          "pagePath": "pages/shopIndex/shopIndex",
          "iconPath": "./assets/tab/shop_default.png",
          "selectedIconPath": "./assets/tab/shop_active.png",
          "text": "全部商品"
        }]
      }
    };
    return _this;
  }

  _createClass(_App, [{
    key: "componentDidMount",
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var sys;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // 获取设备信息
                _common.globalData.store = store;
                _context.next = 3;
                return _index2.default.getSystemInfo();

              case 3:
                sys = _context.sent;

                sys && (_common.globalData.systemInfo = sys);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _ref.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "componentDidShow",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _ref3, _ref4, err, result, _ref5, _ref6, userErr, user, _ref7, _ref8, loginErr, login;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _common.toWork)(_index2.default.getSetting)();

              case 2:
                _ref3 = _context2.sent;
                _ref4 = _slicedToArray(_ref3, 2);
                err = _ref4[0];
                result = _ref4[1];

                if (!(err || !result.authSetting['scope.userInfo'])) {
                  _context2.next = 8;
                  break;
                }

                return _context2.abrupt("return");

              case 8:
                _context2.next = 10;
                return (0, _common.toWork)(_index2.default.getUserInfo)();

              case 10:
                _ref5 = _context2.sent;
                _ref6 = _slicedToArray(_ref5, 2);
                userErr = _ref6[0];
                user = _ref6[1];

                if (!userErr) {
                  _context2.next = 16;
                  break;
                }

                return _context2.abrupt("return");

              case 16:
                _common.globalData.wxUseInfoData = user;
                _context2.next = 19;
                return (0, _common.toWork)(_index2.default.login)();

              case 19:
                _ref7 = _context2.sent;
                _ref8 = _slicedToArray(_ref7, 2);
                loginErr = _ref8[0];
                login = _ref8[1];

                if (!loginErr) {
                  _context2.next = 25;
                  break;
                }

                return _context2.abrupt("return");

              case 25:
                store.dispatch({
                  type: 'login/wxLoginFn',
                  loginData: {
                    code: login.code,
                    encryptedData: user.encryptedData,
                    iv: user.iv
                  }
                });
                console.log(user);

              case 27:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidShow() {
        return _ref2.apply(this, arguments);
      }

      return componentDidShow;
    }()
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "componentDidCatchError",
    value: function componentDidCatchError() {}
    // 在 App 类中的 render() 函数没有实际作用
    // 请勿修改此函数

  }, {
    key: "_createData",
    value: function _createData() {}
  }]);

  return _App;
}(_index.Component);

exports.default = _App;

App(require('./npm/@tarojs/taro-weapp/index.js').default.createApp(_App));
_index2.default.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});