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

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../npm/@tarojs/redux/index.js");

var _common = require("../../utils/common.js");

var _tips = require("../../utils/tips.js");

var _withShare = require("../../components/Hoc/withShare.js");

var _withShare2 = _interopRequireDefault(_withShare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cart = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Cart, _BaseComponent);

  function Cart() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, Cart);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Cart.__proto__ || Object.getPrototypeOf(Cart)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["cartList", "cartStatusObj", "allSelectStatus", "allMonney", "cartShopListData", "dispatch", "cart"], _this.selectOrder = function (keys, key) {
      var cartList = _this.props.cart.cartList;
      var _this$state = _this.state,
          cartStatusObj = _this$state.cartStatusObj,
          allMonney = _this$state.allMonney,
          allSelectStatus = _this$state.allSelectStatus;

      var item = cartList[keys].item[key];
      var k = "sl_" + keys + "_" + key;
      if (cartStatusObj[k]) {
        cartStatusObj[k] = false;
        allMonney -= Number(item.discountPrice * item.number);
        allSelectStatus = false;
      } else {
        cartStatusObj[k] = true;
        allMonney += Number(item.discountPrice * item.number);
      }
      _this.setState({
        cartStatusObj: cartStatusObj,
        allMonney: allMonney,
        allSelectStatus: allSelectStatus
      });
    }, _this.addOrSubtractNumber = function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(keys, key, status) {
        var cartList, _this$state2, cartStatusObj, allMonney, item, k;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                cartList = _this.props.cart.cartList;
                _this$state2 = _this.state, cartStatusObj = _this$state2.cartStatusObj, allMonney = _this$state2.allMonney;
                item = _extends({}, cartList[keys].item[key]);
                k = "sl_" + keys + "_" + key;

                if (status) {
                  // 加
                  cartList[keys].item[key].number += 1;
                } else {
                  // 减
                  if (cartList[keys].item[key].number > 1) {
                    cartList[keys].item[key].number -= 1;
                  }
                }
                if (cartStatusObj[k]) {
                  allMonney = allMonney - item.number * item.discountPrice;
                  allMonney += cartList[keys].item[key].number * item.discountPrice;
                }
                _context.next = 8;
                return _this.props.dispatch({
                  type: 'cart/save',
                  data: {
                    cartList: cartList
                  }
                });

              case 8:
                _this.setState({
                  allMonney: allMonney
                });
                // 强制刷新
                _this.forceUpdate();

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x, _x2, _x3) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.deleteCartFun = function (id) {
      _tips.Tips.modal('你是否要删除该条数据', function () {
        var cartStatusObj = _this.state.cartStatusObj;

        for (var k in cartStatusObj) {
          cartStatusObj[k] = false;
        }
        _this.setState({
          allMonney: 0,
          cartStatusObj: _extends({}, cartStatusObj),
          allSelectStatus: false
        });
        _this.props.dispatch({
          type: 'cart/deleteCartList',
          params: {
            ids: JSON.stringify([id])
          }
        });
      });
    }, _this.goToOrder = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var cartList, cartStatusObj, key, payAccountList, newList;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              cartList = _this.props.cart.cartList;
              cartStatusObj = _this.state.cartStatusObj;
              key = Object.keys(cartStatusObj);
              payAccountList = [];
              // 计算所有的选择产品

              key.forEach(function (item) {
                if (!cartStatusObj[item]) {
                  return;
                }
                var k = item.split('_');
                var h = _extends({}, cartList[k[1]]);
                var i = h.item;
                // 循环 原来的医院中是否已经存在这个值
                h.item = [i[k[2]]];
                payAccountList.push(h);
              });
              // 判断是否选择

              if (!(payAccountList.length === 0)) {
                _context2.next = 8;
                break;
              }

              _tips.Tips.toast('请选择商品');
              return _context2.abrupt("return");

            case 8:
              newList = [];
              // 合并 相同医院的数据一起

              payAccountList.forEach(function (item) {
                if (newList.length == 0) {
                  newList.push(item);
                  return;
                }
                console.log(item.hospital, 'x-x');
                var status = false;
                newList = newList.map(function (it) {
                  if (item.hospital.id == it.hospital.id) {
                    // 如果已经存在着个医院的时候
                    status = true;
                    it.item.push(item.item[0]);
                  }
                  return it;
                });
                if (!status) {
                  newList.push(item);
                }
              });
              _context2.next = 12;
              return _this.props.dispatch({
                type: 'cart/save',
                data: {
                  payAccountList: newList
                }
              });

            case 12:
              // 跳转
              _index2.default.navigateTo({
                url: '/pages/order/order?type=cart'
              });

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    })), _this.selectAllList = function () {
      var cartList = _this.props.cart.cartList;
      var _this$state3 = _this.state,
          cartStatusObj = _this$state3.cartStatusObj,
          allSelectStatus = _this$state3.allSelectStatus;

      var allMonney = 0;
      cartList.forEach(function (item, keys) {
        item.item && item.item.forEach(function (it, key) {
          var k = "sl_" + keys + "_" + key;
          cartStatusObj[k] = !allSelectStatus;
          if (!allSelectStatus) {
            allMonney += it.number * it.discountPrice;
          }
        });
      });
      _this.setState({
        allSelectStatus: !allSelectStatus,
        cartStatusObj: _extends({}, cartStatusObj),
        allMonney: allMonney
      });
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Cart, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Cart.prototype.__proto__ || Object.getPrototypeOf(Cart.prototype), "_constructor", this).call(this, props);
      // 单 选择 的时候 - 订单

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
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(this.state.cartShopListData.length === 0)) {
                  _context3.next = 4;
                  break;
                }

                _context3.next = 3;
                return (0, _common.loginStatus)();

              case 3:
                this.props.dispatch({
                  type: 'cart/getCartListData'
                });

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function componentDidMount() {
        return _ref4.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var _state = this.__state,
          cartStatusObj = _state.cartStatusObj,
          allMonney = _state.allMonney,
          allSelectStatus = _state.allSelectStatus;
      var cartList = this.__props.cart.cartList;

      Object.assign(this.__state, {
        cartList: cartList
      });
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
}, _class.$$events = ["selectOrder", "deleteCartFun", "addOrSubtractNumber", "selectAllList", "goToOrder"], _temp2);
Cart = tslib_1.__decorate([(0, _index3.connect)(function (_ref5) {
  var cart = _ref5.cart;
  return { cart: cart };
})
// @ts-ignore

, (0, _withShare2.default)()], Cart);
exports.default = Cart;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Cart, true));