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

require("../../npm/@tarojs/async-await/index.js");

var _index2 = require("../../npm/@tarojs/redux/index.js");

var _withShare = require("../../components/Hoc/withShare.js");

var _withShare2 = _interopRequireDefault(_withShare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShopIndex = (_temp2 = _class = function (_BaseComponent) {
  _inherits(ShopIndex, _BaseComponent);

  function ShopIndex() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, ShopIndex);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ShopIndex.__proto__ || Object.getPrototypeOf(ShopIndex)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["defaultIndex", "category", "sellStatus", "priceStatus", "bannerList", "productList", "id", "dispatch", "shopIndex"], _this.tabChangeCategory = function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id, key) {
        var dispatch;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch = _this.props.dispatch;

                _this.setState({
                  defaultIndex: key,
                  id: id,
                  sellStatus: false,
                  priceStatus: 0
                });
                _context.next = 4;
                return dispatch({
                  type: 'shopIndex/save',
                  data: {
                    page: 1
                  }
                });

              case 4:
                dispatch({
                  type: 'shopIndex/getBannerList',
                  params: {
                    id: id
                  }
                });
                dispatch({
                  type: 'shopIndex/getPruductList',
                  params: {
                    id: id
                  }
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.orderTabList = function (num) {
      var _this$state = _this.state,
          sellStatus = _this$state.sellStatus,
          id = _this$state.id;
      var dispatch = _this.props.dispatch;

      _this.setState({
        priceStatus: 0,
        sellStatus: !sellStatus
      }, _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return dispatch({
                  type: 'shopIndex/save',
                  data: {
                    page: 1
                  }
                });

              case 2:
                dispatch({
                  type: 'shopIndex/getPruductList',
                  params: {
                    id: id,
                    order: sellStatus ? undefined : num
                  }
                });

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      })));
    }, _this.priceOrder = function () {
      var _this$state2 = _this.state,
          priceStatus = _this$state2.priceStatus,
          id = _this$state2.id;
      var dispatch = _this.props.dispatch;

      _this.setState({
        sellStatus: false
      });
      if (priceStatus < 2) {
        _this.setState({
          priceStatus: priceStatus + 1
        }, _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return dispatch({
                    type: 'shopIndex/save',
                    data: {
                      page: 1
                    }
                  });

                case 2:
                  dispatch({
                    type: 'shopIndex/getPruductList',
                    params: {
                      id: id,
                      order: priceStatus + 2
                    }
                  });

                case 3:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, _this2);
        })));
      } else {
        _this.setState({
          priceStatus: 0
        }, _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return dispatch({
                    type: 'shopIndex/save',
                    data: {
                      page: 1
                    }
                  });

                case 2:
                  dispatch({
                    type: 'shopIndex/getPruductList',
                    params: {
                      id: id
                    }
                  });

                case 3:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, _this2);
        })));
      }
    }, _this.addProductList = function () {
      var id = _this.state.id;

      _this.props.dispatch({
        type: 'shopIndex/getPruductList',
        params: {
          id: id
        }
      });
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ShopIndex, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(ShopIndex.prototype.__proto__ || Object.getPrototypeOf(ShopIndex.prototype), "_constructor", this).call(this, props);
      // 点击切换不同的分类

      this.state = {
        defaultIndex: 0,
        id: 0,
        sellStatus: false,
        priceStatus: 0
      };
    }
  }, {
    key: "componentDidMount",
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var id;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.props.dispatch({
                  type: 'shopIndex/getCategoryList'
                });

              case 2:
                id = this.props.shopIndex.category[0].id;

                this.setState({
                  id: id
                });

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function componentDidMount() {
        return _ref6.apply(this, arguments);
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

      var _props$shopIndex = this.__props.shopIndex,
          category = _props$shopIndex.category,
          bannerList = _props$shopIndex.bannerList,
          productList = _props$shopIndex.productList;
      var _state = this.__state,
          defaultIndex = _state.defaultIndex,
          sellStatus = _state.sellStatus,
          priceStatus = _state.priceStatus;

      Object.assign(this.__state, {
        category: category,
        bannerList: bannerList,
        productList: productList
      });
      return this.__state;
    }
  }]);

  return ShopIndex;
}(_index.Component), _class.properties = {
  "dispatch": {
    "type": null,
    "value": null
  },
  "shopIndex": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["tabChangeCategory", "orderTabList", "priceOrder", "addProductList"], _temp2);
ShopIndex = tslib_1.__decorate([(0, _index2.connect)(function (_ref7) {
  var shopIndex = _ref7.shopIndex;
  return { shopIndex: shopIndex };
})
// @ts-ignore

, (0, _withShare2.default)()], ShopIndex);
exports.default = ShopIndex;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(ShopIndex, true));