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

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BuyOrder = (_temp2 = _class = function (_BaseComponent) {
  _inherits(BuyOrder, _BaseComponent);

  function BuyOrder() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BuyOrder);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BuyOrder.__proto__ || Object.getPrototypeOf(BuyOrder)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "dispatch"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BuyOrder, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(BuyOrder.prototype.__proto__ || Object.getPrototypeOf(BuyOrder.prototype), "_constructor", this).call(this, props);
      this.state = {};
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.dispatch({
        type: 'buyOrder/getOrderList',
        params: {}
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;
      var anonymousState__temp = (0, _index.internal_inline_style)({ 'width': '100%', 'height': '100%' });
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp
      });
      return this.__state;
    }
  }]);

  return BuyOrder;
}(_index.Component), _class.properties = {
  "dispatch": {
    "type": null,
    "value": null
  }
}, _class.$$events = [], _temp2);
BuyOrder = tslib_1.__decorate([(0, _index2.connect)(function (_ref2) {
  var buyOrder = _ref2.buyOrder;
  return { buyOrder: buyOrder };
})], BuyOrder);
exports.default = BuyOrder;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(BuyOrder, true));