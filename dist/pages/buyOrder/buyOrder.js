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

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../npm/@tarojs/redux/index.js");

var _withShare = require("../../components/Hoc/withShare.js");

var _withShare2 = _interopRequireDefault(_withShare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
*
-1://已取消
1: //待付款
2: //待发货
3: //待收货
4://确认收货
5: //待评价
6: //已评价
7: //退款中
8: //退款成功
* */
var statusText = {
  'x_-1': '已取消',
  'x_1': '待付款',
  'x_2': '待发货',
  'x_3': '待收货',
  'x_4': '确认收货',
  'x_5': '待评价',
  'x_6': '已评价',
  'x_7': '退款中',
  'x_8': '退款成功'
};
var BuyOrder = (_temp2 = _class = function (_BaseComponent) {
  _inherits(BuyOrder, _BaseComponent);

  function BuyOrder() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, BuyOrder);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BuyOrder.__proto__ || Object.getPrototypeOf(BuyOrder)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "showStatusIndex", "scrollTop", "orderList", "statusText", "dispatch", "buyOrder"], _this.selectBtn = function (status) {
      var dispatch = _this.props.dispatch;
      _this.setState({
        showStatusIndex: status,
        scrollTop: 0
      });
      dispatch({
        type: 'buyOrder/save',
        data: {
          orderList: [],
          page: 1
        }
      });
      dispatch({
        type: 'buyOrder/getOrderList',
        params: {
          status: status
        }
      });
    }, _this.deleteOrderList = function (id, e) {
      e.stopPropagation();
      var status = _this.state.showStatusIndex;
      _this.props.dispatch({
        type: 'buyOrder/deleteOrder',
        params: {
          id: id,
          status: status
        }
      });
    }, _this.remindFun = function (id, e) {
      e.stopPropagation();
      _this.props.dispatch({
        type: 'buyOrder/remindFun',
        params: {
          id: id
        }
      });
    }, _this.buyNowChase = function (id) {
      _this.props.dispatch({
        type: 'detail/wechatPayMonney',
        params: {
          orderNumber: id
        }
      });
    }, _this.scrollToBottom = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var dispatch, status;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch = _this.props.dispatch;
              status = _this.state.showStatusIndex;
              _context.next = 4;
              return dispatch({
                type: 'buyOrder/getOrderList',
                params: {
                  status: status
                }
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _this.cancalOrder = function (id) {
      var status = _this.state.showStatusIndex;
      _this.props.dispatch({
        type: 'buyOrder/cancalOrder',
        params: {
          id: id,
          status: status
        }
      });
    }, _this.goToDetail = function (id) {
      _index2.default.navigateTo({
        url: "/pages/orderType/orderType?id=" + id
      });
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BuyOrder, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(BuyOrder.prototype.__proto__ || Object.getPrototypeOf(BuyOrder.prototype), "_constructor", this).call(this, props);
      // tab切换组件

      this.state = {
        showStatusIndex: -1,
        scrollTop: 0
      };
    }
  }, {
    key: "componentDidMount",
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var status;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                status = this.$router.params.status;

                this.setState({
                  showStatusIndex: status
                });
                _context2.next = 4;
                return this.props.dispatch({
                  type: 'buyOrder/save',
                  data: {
                    page: 1,
                    orderList: []
                  }
                });

              case 4:
                this.props.dispatch({
                  type: 'buyOrder/getOrderList',
                  params: {
                    status: status
                  }
                });

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidMount() {
        return _ref3.apply(this, arguments);
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

      var orderList = this.__props.buyOrder.orderList;
      var _state = this.__state,
          showStatusIndex = _state.showStatusIndex,
          scrollTop = _state.scrollTop;

      var anonymousState__temp = (0, _index.internal_inline_style)({ 'width': '100%', 'height': '100%' });
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        orderList: orderList,
        statusText: statusText
      });
      return this.__state;
    }
  }]);

  return BuyOrder;
}(_index.Component), _class.properties = {
  "dispatch": {
    "type": null,
    "value": null
  },
  "buyOrder": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["selectBtn", "scrollToBottom", "goToDetail", "deleteOrderList", "cancalOrder", "buyNowChase", "remindFun"], _temp2);
BuyOrder = tslib_1.__decorate([(0, _index3.connect)(function (_ref4) {
  var buyOrder = _ref4.buyOrder;
  return { buyOrder: buyOrder };
})
// @ts-ignore

, (0, _withShare2.default)()], BuyOrder);
exports.default = BuyOrder;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(BuyOrder, true));