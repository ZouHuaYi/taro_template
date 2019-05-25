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

var _tips = require("../../utils/tips.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AreaList = (_temp2 = _class = function (_BaseComponent) {
  _inherits(AreaList, _BaseComponent);

  function AreaList() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, AreaList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AreaList.__proto__ || Object.getPrototypeOf(AreaList)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["areaListData", "defaultAreaId", "dispatch", "areaList"], _this.setDefaultArea = function (id) {
      _this.props.dispatch({
        type: 'areaList/setDefaultData',
        params: {
          id: id
        }
      });
    }, _this.selectAreaList = function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(key) {
        var selectAreaData;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                selectAreaData = _this.props.areaList.areaListData[key];
                _context.next = 3;
                return _this.props.dispatch({
                  type: 'areaList/save',
                  data: {
                    selectAreaData: selectAreaData
                  }
                });

              case 3:
                _index2.default.navigateBack();

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.deleteAreaData = function (id) {
      _tips.Tips.modal('您是否要删除该地址信息', function () {
        _this.props.dispatch({
          type: 'areaList/deleteAreaList',
          params: {
            id: id
          }
        });
      });
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AreaList, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(AreaList.prototype.__proto__ || Object.getPrototypeOf(AreaList.prototype), "_constructor", this).call(this, props);
      // 设置默认地址

      this.state = {};
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.dispatch({
        type: 'areaList/fetchAreaListData'
      });
      if (!this.props.areaList.defaultArea) {
        this.props.dispatch({
          type: 'areaList/getDefaultData'
        });
      }
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var _props$areaList = this.__props.areaList,
          areaListData = _props$areaList.areaListData,
          defaultArea = _props$areaList.defaultArea;

      var defaultAreaId = defaultArea ? defaultArea.id : 0;
      Object.assign(this.__state, {
        areaListData: areaListData,
        defaultAreaId: defaultAreaId
      });
      return this.__state;
    }
  }]);

  return AreaList;
}(_index.Component), _class.properties = {
  "dispatch": {
    "type": null,
    "value": null
  },
  "areaList": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["selectAreaList", "setDefaultArea", "deleteAreaData"], _temp2);
AreaList = tslib_1.__decorate([(0, _index3.connect)(function (_ref3) {
  var areaList = _ref3.areaList;
  return { areaList: areaList };
})], AreaList);
exports.default = AreaList;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(AreaList, true));