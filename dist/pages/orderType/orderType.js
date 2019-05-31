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

var _common = require("../../utils/common.js");

var _withShare = require("../../components/Hoc/withShare.js");

var _withShare2 = _interopRequireDefault(_withShare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrderType = (_temp2 = _class = function (_BaseComponent) {
  _inherits(OrderType, _BaseComponent);

  function OrderType() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, OrderType);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OrderType.__proto__ || Object.getPrototypeOf(OrderType)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "orderDetail", "allPrice", "dispatch", "buyOrder"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(OrderType, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(OrderType.prototype.__proto__ || Object.getPrototypeOf(OrderType.prototype), "_constructor", this).call(this, props);
      this.state = {
        allPrice: 0
      };
    }
  }, {
    key: "componentDidMount",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var id, orderDetail, allPrice;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = this.$router.params.id;
                _context.next = 3;
                return this.props.dispatch({
                  type: 'buyOrder/getOrderTypeDetail',
                  params: {
                    id: id
                  }
                });

              case 3:
                orderDetail = this.props.buyOrder.orderDetail;

                if (orderDetail.items) {
                  allPrice = 0;

                  orderDetail.items.forEach(function (item) {
                    allPrice += Number(item.price * item.number);
                  });
                  this.setState({
                    allPrice: allPrice
                  });
                }

              case 5:
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

      var orderDetail = this.__props.buyOrder.orderDetail;

      var anonymousState__temp = (0, _index.internal_inline_style)({ paddingTop: '20px' });
      var anonymousState__temp2 = (0, _common.formatTime)('yyyy-MM-dd HH:mm:ss', orderDetail.createTime);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        orderDetail: orderDetail
      });
      return this.__state;
    }
  }]);

  return OrderType;
}(_index.Component), _class.properties = {
  "dispatch": {
    "type": null,
    "value": null
  },
  "buyOrder": {
    "type": null,
    "value": null
  }
}, _class.$$events = [], _temp2);
OrderType = tslib_1.__decorate([(0, _index2.connect)(function (_ref3) {
  var buyOrder = _ref3.buyOrder;
  return { buyOrder: buyOrder };
})
// @ts-ignore

, (0, _withShare2.default)()], OrderType);
exports.default = OrderType;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(OrderType, true));