"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;
// import { connect } from '@tarojs/redux'

var _tslib = require("../../npm/tslib/tslib.js");

var tslib_1 = _interopRequireWildcard(_tslib);

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _common = require("../../utils/common.js");

var _withShare = require("../../components/Hoc/withShare.js");

var _withShare2 = _interopRequireDefault(_withShare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var wait_pay = "/assets/user/wait_pay.png";
var wait_send = "/assets/user/wait_send.png";
var wait_have = "/assets/user/wait_have.png";
var wait_commit = "/assets/user/wait_commit.png";
var default_logo = "/assets/user/default.png";
// @ts-ignore
var User = (_temp2 = _class = function (_BaseComponent) {
  _inherits(User, _BaseComponent);

  function User() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, User);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = User.__proto__ || Object.getPrototypeOf(User)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["userInfo", "default_logo", "wait_pay", "wait_send", "wait_have", "wait_commit"], _this.navToOrderApp = function () {
      _index2.default.navigateToMiniProgram({
        appId: 'wxe121a943656499fc',
        path: 'pages/index/index'
      });
    }, _this.callPhone = function () {
      _index2.default.makePhoneCall({
        phoneNumber: '18988967945'
      });
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(User, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(User.prototype.__proto__ || Object.getPrototypeOf(User.prototype), "_constructor", this).call(this, props);

      this.state = {
        userInfo: {}
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      if (_common.globalData.userInfo) {
        this.setState({
          userInfo: _common.globalData.userInfo
        });
      }
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var userInfo = this.__state.userInfo;

      Object.assign(this.__state, {
        default_logo: default_logo,
        wait_pay: wait_pay,
        wait_send: wait_send,
        wait_have: wait_have,
        wait_commit: wait_commit
      });
      return this.__state;
    }
  }]);

  return User;
}(_index.Component), _class.properties = {}, _class.$$events = ["callPhone", "navToOrderApp"], _temp2);
User = tslib_1.__decorate([(0, _withShare2.default)()], User);
exports.default = User;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(User, true));