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

require("../../npm/@tarojs/async-await/index.js");

var _index3 = require("../../npm/@tarojs/redux/index.js");

var _wxParse = require("../../components/wxParse/wxParse.js");

var _wxParse2 = _interopRequireDefault(_wxParse);

var _tips = require("../../utils/tips.js");

var _common = require("../../utils/common.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Detail = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Detail, _BaseComponent);

  function Detail() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, Detail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Detail.__proto__ || Object.getPrototypeOf(Detail)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["detailData", "selectIndex", "shopCartNumber", "typeid", "dispatch", "detail"], _this.addCart = function () {
      var typeid = _this.state.typeid;
      var id = _this.$router.params.id;
      if (typeid === null) {
        _tips.Tips.toast('请选择产品规格');
        return;
      }
      if (!_common.globalData.userInfo) {
        _index2.default.navigateTo({
          url: '/pages/login/login'
        });
        return;
      }
      _this.props.dispatch({
        type: 'detail/addOrdeleteCartAction',
        params: {
          typeid: typeid,
          id: id,
          number: 1
        }
      });
    }, _this.selectType = function (val, key) {
      _this.setState({
        selectIndex: key,
        typeid: val
      });
    }, _this.goToBuyPlace = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var selectIndex, detailData;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _common.loginJudge)();

            case 2:
              selectIndex = _this.state.selectIndex;

              if (!(_this.state.selectIndex === -1)) {
                _context.next = 6;
                break;
              }

              _tips.Tips.toast('请选择产品规格');
              return _context.abrupt("return");

            case 6:
              /*
              * item: [{"number":"1","productId":"3498","specificationGroup":"210"}]
              * */
              // 存储单张订单的数据
              detailData = _this.props.detail.detailData;
              _context.next = 9;
              return _this.props.dispatch({
                type: 'detail/save',
                data: {
                  orderPlaceData: {
                    hospitalid: detailData.hospital.id,
                    item: {
                      productId: detailData.id,
                      specificationGroup: detailData.specification[selectIndex].id
                    }
                  }
                }
              });

            case 9:
              _index2.default.navigateTo({
                url: "/pages/order/order?id=" + _this.$router.params.id
              });

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Detail, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Detail.prototype.__proto__ || Object.getPrototypeOf(Detail.prototype), "_constructor", this).call(this, props);
      // 点击添加购物车

      this.state = {
        selectIndex: -1,
        typeid: null
      };
    }
  }, {
    key: "componentDidMount",
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var id, _props$detail$detailD, description, specification;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = this.$router.params.id;
                _context2.next = 3;
                return this.props.dispatch({
                  type: 'detail/getDetailData',
                  params: {
                    id: Number(id)
                  }
                });

              case 3:
                _props$detail$detailD = this.props.detail.detailData, description = _props$detail$detailD.description, specification = _props$detail$detailD.specification;

                if (description) {
                  _wxParse2.default.wxParse('article', 'html', description, this.$scope, 0);
                }
                if (specification && specification.length === 1) {
                  this.setState({
                    selectIndex: 0,
                    typeid: specification[0].id
                  });
                }

              case 6:
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
    key: "onShareAppMessage",
    value: function onShareAppMessage(obj) {
      return {
        path: "pages/detail/detail?id=" + this.$router.params.id,
        title: '未来密码'
      };
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var _props$detail = this.__props.detail,
          detailData = _props$detail.detailData,
          shopCartNumber = _props$detail.shopCartNumber;
      var selectIndex = this.__state.selectIndex;

      Object.assign(this.__state, {
        detailData: detailData,
        shopCartNumber: shopCartNumber
      });
      return this.__state;
    }
  }]);

  return Detail;
}(_index.Component), _class.properties = {
  "dispatch": {
    "type": null,
    "value": null
  },
  "detail": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["selectType", "addCart", "goToBuyPlace"], _temp2);
Detail = tslib_1.__decorate([(0, _index3.connect)(function (_ref4) {
  var detail = _ref4.detail;
  return { detail: detail };
})], Detail);
exports.default = Detail;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Detail, true));