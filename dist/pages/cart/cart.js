"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _tslib = require("../../npm/tslib/tslib.js");

var tslib_1 = _interopRequireWildcard(_tslib);

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = require("../../npm/@tarojs/redux/index.js");

var _common = require("../../utils/common.js");

var _tips = require("../../utils/tips.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cart = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Cart, _BaseComponent);

  function Cart() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Cart);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Cart.__proto__ || Object.getPrototypeOf(Cart)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["cartStatusObj", "cartShopListData", "allSelectStatus", "allMonney", "dispatch", "cart"], _this.selectOrder = function (key) {
      var _this$state = _this.state,
          cartShopListData = _this$state.cartShopListData,
          cartStatusObj = _this$state.cartStatusObj;

      var allMonney = _this.state.allMonney;
      if (cartStatusObj['sl_' + key]) {
        cartStatusObj['sl_' + key] = false;
        if (cartShopListData[key]) {
          allMonney -= cartShopListData[key].discountPrice * cartShopListData[key].number;
        }
      } else {
        cartStatusObj['sl_' + key] = true;
        if (cartShopListData[key]) {
          allMonney += cartShopListData[key].discountPrice * cartShopListData[key].number;
        }
      }
      _this.setState({
        cartStatusObj: cartStatusObj,
        allMonney: allMonney,
        allSelectStatus: false
      });
      var cartAccountList = [];
      for (var k in cartStatusObj) {
        if (cartStatusObj[k]) {
          var v = k.substring(3);
          cartAccountList.push(cartShopListData[v]);
        }
      }
      _this.props.dispatch({
        type: 'detail/save',
        data: {
          cartAccountList: cartAccountList
        }
      });
    }, _this.addOrSubtractNumber = function (e) {
      var _e$currentTarget$data = e.currentTarget.dataset,
          status = _e$currentTarget$data.status,
          key = _e$currentTarget$data.key;
      var _this$state2 = _this.state,
          cartShopListData = _this$state2.cartShopListData,
          cartStatusObj = _this$state2.cartStatusObj;

      var allMonney = _this.state.allMonney;
      if (cartStatusObj['sl_' + key]) {
        allMonney = allMonney - cartShopListData[key].number * cartShopListData[key].discountPrice;
      }
      if (status) {
        // 加
        cartShopListData[key].number += 1;
      } else {
        // 减
        if (cartShopListData[key].number > 1) {
          cartShopListData[key].number -= 1;
        }
      }
      if (cartStatusObj['sl_' + key]) {
        allMonney = allMonney + cartShopListData[key].number * cartShopListData[key].discountPrice;
      }
      _this.setState({
        cartShopListData: cartShopListData,
        allMonney: allMonney
      });
    }, _this.deleteCartFun = function (id) {
      _tips.Tips.modal('你是否要删除该条数据', function () {
        _this.props.dispatch({
          type: 'cart/deleteCartList',
          params: {
            ids: JSON.stringify([id])
          }
        });
      });
    }, _this.selectAllList = function () {
      var _this$state3 = _this.state,
          cartShopListData = _this$state3.cartShopListData,
          cartStatusObj = _this$state3.cartStatusObj,
          allSelectStatus = _this$state3.allSelectStatus;

      var allMonney = 0;
      var cartObj = cartStatusObj;
      var cartAccountList = cartShopListData;
      if (!allSelectStatus) {
        cartShopListData.forEach(function (item, key) {
          cartObj['sl_' + key] = true;
          allMonney += Number(item.number * item.discountPrice);
        });
        cartAccountList = cartShopListData;
      } else {
        cartShopListData.forEach(function (item, key) {
          cartObj['sl_' + key] = false;
        });
        cartAccountList = [];
      }
      _this.setState({
        allMonney: allMonney,
        cartStatusObj: _extends({}, cartObj),
        cartShopListData: cartShopListData,
        allSelectStatus: !allSelectStatus
      });
      _this.props.dispatch({
        type: 'detail/save',
        data: {
          cartAccountList: cartAccountList
        }
      });
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Cart, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Cart.prototype.__proto__ || Object.getPrototypeOf(Cart.prototype), "_constructor", this).call(this, props);
      // 选择 - 订单

      this.state = {
        cartShopListData: [],
        cartStatusObj: {},
        allMonney: 0,
        allSelectStatus: false
      };
    }
  }, {
    key: "componentDidMount",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(this.state.cartShopListData.length === 0)) {
                  _context.next = 4;
                  break;
                }

                _context.next = 3;
                return (0, _common.loginStatus)();

              case 3:
                this.props.dispatch({
                  type: 'cart/getCartListData'
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _ref2.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps, nextContext) {
      var cartShopListData = [];
      nextProps.cart.cartList.forEach(function (item) {
        if (item.item && item.item instanceof Array && item.item.length > 0) {
          cartShopListData = cartShopListData.concat(item.item);
        }
      });
      this.setState({
        cartShopListData: cartShopListData,
        allMonney: 0,
        cartStatusObj: {},
        allSelectStatus: false
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var _state = this.__state,
          cartShopListData = _state.cartShopListData,
          cartStatusObj = _state.cartStatusObj,
          allMonney = _state.allMonney,
          allSelectStatus = _state.allSelectStatus;

      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return Cart;
}(_index.Component), _class.properties = {
  "dispatch": {
    "type": null,
    "value": null
  },
  "cart": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["selectOrder", "deleteCartFun", "addOrSubtractNumber", "selectAllList"], _temp2);
Cart = tslib_1.__decorate([(0, _index2.connect)(function (_ref3) {
  var cart = _ref3.cart;
  return { cart: cart };
})], Cart);
exports.default = Cart;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Cart, true));