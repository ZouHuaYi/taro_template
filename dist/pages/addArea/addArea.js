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

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddArea = (_temp2 = _class = function (_BaseComponent) {
  _inherits(AddArea, _BaseComponent);

  function AddArea() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AddArea);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AddArea.__proto__ || Object.getPrototypeOf(AddArea)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["_id", "areaData", "pickerStatus", "areaList", "dispatch"], _this.onSubmitData = function (e) {
      var value = e.detail.value;
      if (!value['name']) {
        _tips.Tips.toast('收货人姓名不能为空');
        return;
      }
      if (!value['phone']) {
        _tips.Tips.toast('电话不能为空');
        return;
      }
      if (!value['area']) {
        _tips.Tips.toast('所在地址不能为空');
        return;
      }
      if (!value['address']) {
        _tips.Tips.toast('详细地址不能为空');
        return;
      }
      var id = _this.$router.params.id;
      if (id) {
        _this.props.dispatch({
          type: 'areaList/updateAreaList',
          params: _extends({}, value, {
            id: id
          })
        });
      } else {
        _this.props.dispatch({
          type: 'areaList/addAreaAddress',
          params: _extends({}, value)
        });
      }
    }, _this.togglePicker = function (areaInfo) {
      if (areaInfo) {
        _this.setState(function (state) {
          return {
            areaData: _extends({}, state.areaData, {
              area: areaInfo
            })
          };
        });
      }
      _this.setState(function (state) {
        return {
          pickerStatus: !state.pickerStatus
        };
      });
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AddArea, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(AddArea.prototype.__proto__ || Object.getPrototypeOf(AddArea.prototype), "_constructor", this).call(this, props);
      // 提交保存

      this.state = {
        areaData: {},
        pickerStatus: false
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var id = this.$router.params.id;
      if (id) {
        var areaData = this.props.areaList.areaListData.filter(function (item) {
          return item.id == id;
        });
        this.setState({
          areaData: areaData[0]
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
      var _id = this.$router.params.id;

      var _state = this.__state,
          areaData = _state.areaData,
          pickerStatus = _state.pickerStatus;

      Object.assign(this.__state, {
        _id: _id
      });
      return this.__state;
    }
  }]);

  return AddArea;
}(_index.Component), _class.properties = {
  "areaList": {
    "type": null,
    "value": null
  },
  "dispatch": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["onSubmitData", "togglePicker"], _temp2);
AddArea = tslib_1.__decorate([(0, _index2.connect)(function (_ref2) {
  var areaList = _ref2.areaList;
  return { areaList: areaList };
})], AddArea);
exports.default = AddArea;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(AddArea, true));