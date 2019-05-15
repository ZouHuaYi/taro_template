"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _common = require("../../utils/common.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Layout, _BaseComponent);

  function Layout() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Layout);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Layout.__proto__ || Object.getPrototypeOf(Layout)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "anonymousState__temp5", "anonymousState__temp6", "noHeader", "isHome", "noBack", "title", "children"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Layout, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Layout.prototype.__proto__ || Object.getPrototypeOf(Layout.prototype), "_constructor", this).call(this, props);
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

      var _props = this.__props,
          title = _props.title,
          isHome = _props.isHome,
          noBack = _props.noBack,
          noHeader = _props.noHeader;

      var statusBarHeight = _common.globalData.systemInfo ? _common.globalData.systemInfo.statusBarHeight : 0;
      var titleHeight = statusBarHeight + 40;
      var barHeight = statusBarHeight;
      var anonymousState__temp = noHeader ? (0, _index.internal_inline_style)({ "top": barHeight + 'px' }) : null;
      var anonymousState__temp2 = (0, _index.internal_inline_style)({ 'height': titleHeight + 'px' });
      var anonymousState__temp3 = isHome ? (0, _index.internal_inline_style)({ "top": barHeight + 'px' }) : null;
      var anonymousState__temp4 = !noBack ? (0, _index.internal_inline_style)({ "top": barHeight + 'px' }) : null;
      var anonymousState__temp5 = (0, _index.internal_inline_style)({ "paddingTop": barHeight + "px" });
      var anonymousState__temp6 = (0, _index.internal_inline_style)({ "paddingTop": titleHeight + "px" });
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        anonymousState__temp5: anonymousState__temp5,
        anonymousState__temp6: anonymousState__temp6,
        noHeader: noHeader,
        isHome: isHome,
        noBack: noBack,
        title: title
      });
      return this.__state;
    }
  }]);

  return Layout;
}(_index.Component), _class.properties = {
  "title": {
    "type": null,
    "value": null
  },
  "isHome": {
    "type": null,
    "value": null
  },
  "noBack": {
    "type": null,
    "value": null
  },
  "noHeader": {
    "type": null,
    "value": null
  }
}, _class.$$events = [], _temp2);

Layout.externalClasses = ['app-page', 'layout'];
exports.default = Layout;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Layout));