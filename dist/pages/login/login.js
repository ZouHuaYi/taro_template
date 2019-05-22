"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _tslib = require("../../npm/tslib/tslib.js");

var tslib_1 = _interopRequireWildcard(_tslib);

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = require("../../npm/@tarojs/redux/index.js");

var _tips = require("../../utils/tips.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Login, _BaseComponent);

  function Login() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Login);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Login.__proto__ || Object.getPrototypeOf(Login)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["passwordStatus", "disabled", "codeText", "phone", "login", "dispatch"], _this.formSubmit = function (e) {
      var _e$detail$value = e.detail.value,
          phone = _e$detail$value.phone,
          code = _e$detail$value.code;

      if (phone === '') {
        _tips.Tips.toast('手机号码不能为空！');
        return;
      }
      if (!/^1\d{10}$/.test(phone)) {
        _tips.Tips.toast('手机号码格式不正确！');
        return;
      }
      if (code === '') {
        _tips.Tips.toast('验证码不能为空！');
        return;
      }
      _this.props.dispatch({
        type: 'login/btnLoginFun',
        params: {
          phone: phone,
          code: code
        }
      });
    }, _this.sendCode = function () {
      if (!_this.props.login.disabled) {
        return;
      }var phone = _this.state.phone;
      if (!phone || phone === '') {
        _tips.Tips.toast('手机号码不能为空！');
        return;
      }
      if (!/^1\d{10}$/.test(phone)) {
        _tips.Tips.toast('手机号码格式不正确！');
        return;
      }
      // 发送验证码的函数
      _this.props.dispatch({
        type: 'login/sendCodeFun',
        phone: { phone: phone }
      });
    }, _this.phoneChange = function (e) {
      _this.setState({
        phone: e.detail.value
      });
    }, _this.putPassword = function (e) {
      var _e$detail$value2 = e.detail.value,
          password = _e$detail$value2.password,
          repassword = _e$detail$value2.repassword;

      if (password === '') {
        _tips.Tips.toast('密码不能为空！');
        return;
      }
      if (password.length < 6) {
        _tips.Tips.toast('密码太短！');
        return;
      }
      if (password !== repassword) {
        _tips.Tips.toast('两次密码不一样！');
        return;
      }
      _this.props.dispatch({
        type: 'login/inputPassword',
        password: {
          password: password
        }
      });
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Login, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Login.prototype.__proto__ || Object.getPrototypeOf(Login.prototype), "_constructor", this).call(this, props);
      // 提交登录

      this.state = {
        phone: ''
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var _props$login = this.__props.login,
          disabled = _props$login.disabled,
          codeText = _props$login.codeText,
          passwordStatus = _props$login.passwordStatus;

      Object.assign(this.__state, {
        passwordStatus: passwordStatus,
        disabled: disabled,
        codeText: codeText
      });
      return this.__state;
    }
  }]);

  return Login;
}(_index.Component), _class.properties = {
  "login": {
    "type": null,
    "value": null
  },
  "dispatch": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["putPassword", "formSubmit", "phoneChange", "sendCode"], _temp2);
Login = tslib_1.__decorate([(0, _index2.connect)(function (_ref2) {
  var login = _ref2.login;
  return { login: login };
})], Login);
exports.default = Login;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Login, true));