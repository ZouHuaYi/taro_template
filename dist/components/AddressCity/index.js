"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _city = require("../../utils/city.js");

var _city2 = _interopRequireDefault(_city);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddressPicker = (_temp2 = _class = function (_BaseComponent) {
  _inherits(AddressPicker, _BaseComponent);

  function AddressPicker() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AddressPicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AddressPicker.__proto__ || Object.getPrototypeOf(AddressPicker)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["pickerShow", "value", "provinces", "citys", "areas", "areaInfo", "__fn_onHandleToggleShow"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AddressPicker, [{
    key: "_constructor",
    value: function _constructor() {
      _get(AddressPicker.prototype.__proto__ || Object.getPrototypeOf(AddressPicker.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        value: [18, 0, 0],
        provinces: _city2.default.provinces,
        citys: _city2.default.citys[440000],
        areas: _city2.default.areas[440100],
        areaInfo: ''
      };
    }
  }, {
    key: "cityChange",
    value: function cityChange(e) {
      var pickerValue = e.detail.value;
      var _state = this.state,
          provinces = _state.provinces,
          citys = _state.citys,
          value = _state.value;

      var provinceNum = pickerValue[0];
      var cityNum = pickerValue[1];
      var countyNum = pickerValue[2];
      // 如果省份选择项和之前不一样，表示滑动了省份，此时市默认是省的第一组数据，
      if (value[0] != provinceNum) {
        var id = provinces[provinceNum].id;
        this.setState({
          value: [provinceNum, 0, 0],
          citys: _city2.default.citys[id],
          areas: _city2.default.areas[_city2.default.citys[id][0].id]
        });
      } else if (value[1] != cityNum) {
        // 滑动选择了第二项数据，即市，此时区显示省市对应的第一组数据
        var _id = citys[cityNum].id;
        this.setState({
          value: [provinceNum, cityNum, 0],
          areas: _city2.default.areas[citys[cityNum].id]
        });
      } else {
        // 滑动选择了区
        this.setState({
          value: [provinceNum, cityNum, countyNum]
        });
      }
    }
    //  params true代表传递地址，false不传递

  }, {
    key: "handlePickerShow",
    value: function handlePickerShow(params) {
      var _this2 = this;

      if (params) {
        var _state2 = this.state,
            provinces = _state2.provinces,
            citys = _state2.citys,
            areas = _state2.areas,
            value = _state2.value;
        // 将选择的城市信息显示到输入框

        var tempAreaInfo = '';
        if (areas[value[2]]) {
          tempAreaInfo = provinces[value[0]].name + '' + citys[value[1]].name + areas[value[2]].name;
        } else {
          tempAreaInfo = provinces[value[0]].name + '' + citys[value[1]].name;
        }
        this.setState({
          areaInfo: tempAreaInfo
        }, function () {
          _this2.__triggerPropsFn("onHandleToggleShow", [null].concat([_this2.state.areaInfo]));
        });
      } else {
        this.__triggerPropsFn("onHandleToggleShow", [null].concat([false]));
      }
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var _state3 = this.__state,
          provinces = _state3.provinces,
          citys = _state3.citys,
          areas = _state3.areas,
          value = _state3.value;
      var pickerShow = this.__props.pickerShow;

      Object.assign(this.__state, {
        pickerShow: pickerShow
      });
      return this.__state;
    }
  }]);

  return AddressPicker;
}(_index.Component), _class.properties = {
  "__fn_onHandleToggleShow": {
    "type": null,
    "value": null
  },
  "pickerShow": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["handlePickerShow", "cityChange"], _temp2);
exports.default = AddressPicker;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(AddressPicker));