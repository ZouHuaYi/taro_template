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

var _tips = require("../../utils/tips.js");

var _withShare = require("../../components/Hoc/withShare.js");

var _withShare2 = _interopRequireDefault(_withShare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Order = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Order, _BaseComponent);

  function Order() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Order);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Order.__proto__ || Object.getPrototypeOf(Order)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["selectAreaData", "hasIdState", "detailData", "orderNumber", "payAccountList", "payMonney", "price", "remark", "detail", "cart", "dispatch", "areaList"], _this.addOrMinus = function (key) {
      var orderNumber = _this.state.orderNumber;
      var price = _this.state.price;
      if (key === 'minus') {
        if (orderNumber === 1) {
          return;
        }_this.setState({
          orderNumber: orderNumber - 1,
          payMonney: (orderNumber - 1) * price
        });
      } else if (key === 'add') {
        _this.setState({
          orderNumber: orderNumber + 1,
          payMonney: (orderNumber + 1) * price
        });
      }
    }, _this.buyShop = function () {
      var selectAreaData = _this.props.areaList.selectAreaData;
      var _this$$router$params = _this.$router.params,
          id = _this$$router$params.id,
          type = _this$$router$params.type;
      var _this$state = _this.state,
          orderNumber = _this$state.orderNumber,
          payMonney = _this$state.payMonney,
          remark = _this$state.remark;

      if (!selectAreaData.id) {
        _tips.Tips.toast('请选择先地址');
        return;
      }
      // 只有一个商品的时候生成一个订单的接口
      if (id) {
        var orderPlaceData = _this.props.detail.orderPlaceData;

        var item = JSON.stringify([_extends({}, orderPlaceData.item, {
          number: orderNumber
        })]);
        _this.props.dispatch({
          type: 'detail/createPayOrder',
          params: {
            item: item,
            remark: remark,
            areaid: selectAreaData.id,
            price: payMonney,
            hospitalid: orderPlaceData.hospitalid
          }
        });
      } else if (type === 'cart') {
        // 多个产品生成一个订单
        var payAccountList = _this.props.cart.payAccountList;

        var accountList = [].concat(_toConsumableArray(payAccountList));
        accountList = accountList.map(function (item) {
          item.remark = remark;
          return item;
        });
        var _item = JSON.stringify(accountList);
        _this.props.dispatch({
          type: 'detail/createMoreOrder',
          params: {
            areaid: selectAreaData.id,
            item: _item
          }
        });
      }
    }, _this.inputRemark = function (e) {
      _this.setState({
        remark: e.detail.value
      });
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Order, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Order.prototype.__proto__ || Object.getPrototypeOf(Order.prototype), "_constructor", this).call(this, props);
      // 点击增加或者减少数量的按钮

      this.state = {
        orderNumber: 1,
        payMonney: null,
        price: null,
        hasIdState: false,
        remark: ''
      };
    }
  }, {
    key: "componentDidMount",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _$router$params, id, type, _props$detail, detailData, cartAccountList, payAccountList, price, area;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _$router$params = this.$router.params, id = _$router$params.id, type = _$router$params.type;
                _props$detail = this.props.detail, detailData = _props$detail.detailData, cartAccountList = _props$detail.cartAccountList;
                payAccountList = this.props.cart.payAccountList;
                price = 0;

                if (id) {
                  // 单点击产品的时候
                  this.setState({
                    hasIdState: true
                  });
                } else if (type == 'cart') {
                  // 计算购物车过来的数据
                  payAccountList.forEach(function (item) {
                    item.item.forEach(function (it) {
                      price += Number(it.discountPrice * it.number);
                    });
                  });
                  this.setState({
                    hasIdState: false
                  });
                }

                if (!(detailData.length == 0 && id)) {
                  _context.next = 8;
                  break;
                }

                _context.next = 8;
                return this.props.dispatch({
                  type: 'detail/getDetailData',
                  params: {
                    id: id
                  }
                });

              case 8:
                area = this.props.areaList.selectAreaData;

                if (!area) {
                  this.props.dispatch({
                    type: 'areaList/getDefaultData'
                  });
                }
                // 设置起初价格
                this.setState({
                  payMonney: type === 'cart' ? price : detailData.discount_price,
                  price: detailData.discount_price
                });

              case 11:
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
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var detailData = this.__props.detail.detailData;
      var payAccountList = this.__props.cart.payAccountList;
      var selectAreaData = this.__props.areaList.selectAreaData;
      var _state = this.__state,
          payMonney = _state.payMonney,
          orderNumber = _state.orderNumber,
          hasIdState = _state.hasIdState;

      Object.assign(this.__state, {
        selectAreaData: selectAreaData,
        detailData: detailData,
        payAccountList: payAccountList
      });
      return this.__state;
    }
  }]);

  return Order;
}(_index.Component), _class.properties = {
  "detail": {
    "type": null,
    "value": null
  },
  "cart": {
    "type": null,
    "value": null
  },
  "dispatch": {
    "type": null,
    "value": null
  },
  "areaList": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["addOrMinus", "inputRemark", "buyShop"], _temp2);
Order = tslib_1.__decorate([(0, _index2.connect)(function (_ref3) {
  var detail = _ref3.detail,
      areaList = _ref3.areaList,
      cart = _ref3.cart;
  return { detail: detail, areaList: areaList, cart: cart };
})
// @ts-ignore

, (0, _withShare2.default)()], Order);
exports.default = Order;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Order, true));