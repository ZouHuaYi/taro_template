"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _common = require("../../utils/common.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import defaultShareImg from '../../assets/user/default.png';


function withShare(opts) {
  // 设置默认
  var defalutPath = 'pages/index/index';
  var defalutTitle = '未来密码mm';
  // const defaultImageUrl = defaultShareImg;
  return function demoComponent(Component) {
    var WithShare = function (_Component) {
      _inherits(WithShare, _Component);

      function WithShare() {
        _classCallCheck(this, WithShare);

        return _possibleConstructorReturn(this, (WithShare.__proto__ || Object.getPrototypeOf(WithShare)).apply(this, arguments));
      }

      _createClass(WithShare, [{
        key: "componentWillMount",
        value: function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _index2.default.showShareMenu({
                      withShareTicket: true
                    });
                    if (_get(WithShare.prototype.__proto__ || Object.getPrototypeOf(WithShare.prototype), "componentWillMount", this)) {
                      _get(WithShare.prototype.__proto__ || Object.getPrototypeOf(WithShare.prototype), "componentWillMount", this).call(this);
                    }

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function componentWillMount() {
            return _ref.apply(this, arguments);
          }

          return componentWillMount;
        }()
        // 点击分享的那一刻会进行调用

      }, {
        key: "onShareAppMessage",
        value: function onShareAppMessage() {
          var userInfo = _common.globalData.userInfo;
          var title = opts.title,
              _opts$path = opts.path,
              path = _opts$path === undefined ? null : _opts$path;
          // 从继承的组件获取配置

          if (this.$setSharePath && typeof this.$setSharePath === 'function') {
            path = this.$setSharePath();
          }
          // 从继承的组件获取配置
          if (this.$setShareTitle && typeof this.$setShareTitle === 'function') {
            title = this.$setShareTitle();
          }
          if (!path) {
            path = defalutPath;
          }
          // 每条分享都补充用户的分享id
          // 如果path不带参数，分享出去后解析的params里面会带一个{''： ''}
          var sharePath = '';
          if (userInfo.id) {
            sharePath = path + "&shareFromUser=" + userInfo.id;
          } else {
            sharePath = "" + path;
          }
          return {
            title: title || defalutTitle,
            path: sharePath
          };
        }
      }, {
        key: "render",
        value: function render() {
          return _get(WithShare.prototype.__proto__ || Object.getPrototypeOf(WithShare.prototype), "render", this).call(this);
        }
      }]);

      return WithShare;
    }(Component);

    return WithShare;
  };
}
exports.default = withShare;