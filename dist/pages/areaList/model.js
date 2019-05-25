"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _common = require("../../utils/common.js");

var _service = require("./service.js");

var _tips = require("../../utils/tips.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  namespace: 'areaList',
  state: {
    areaListData: [],
    selectAreaData: null,
    defaultArea: null
  },
  effects: {
    // 获取总的数据
    fetchAreaListData: /*#__PURE__*/regeneratorRuntime.mark(function fetchAreaListData(_, _ref) {
      var call = _ref.call,
          put = _ref.put;

      var _ref2, _ref3, err, result;

      return regeneratorRuntime.wrap(function fetchAreaListData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return call((0, _common.toWork)(_service.getAreaListData), { userid: _common.globalData.userInfo.id });

            case 2:
              _ref2 = _context.sent;
              _ref3 = _slicedToArray(_ref2, 2);
              err = _ref3[0];
              result = _ref3[1];

              if (!err) {
                _context.next = 8;
                break;
              }

              return _context.abrupt("return");

            case 8:
              if (!(result.messageCode == 900)) {
                _context.next = 13;
                break;
              }

              _context.next = 11;
              return put({
                type: 'save',
                data: {
                  areaListData: result.data
                }
              });

            case 11:
              _context.next = 14;
              break;

            case 13:
              _tips.Tips.toast(result.message || '无法获取数据');

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, fetchAreaListData, this);
    }),

    // 获取选择默认地址的数据
    getDefaultData: /*#__PURE__*/regeneratorRuntime.mark(function getDefaultData(_, _ref4) {
      var call = _ref4.call,
          put = _ref4.put,
          select = _ref4.select;

      var _ref5, _ref6, err, result, area;

      return regeneratorRuntime.wrap(function getDefaultData$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return call((0, _common.toWork)(_service.getDefaultAddress), { userid: _common.globalData.userInfo.id });

            case 2:
              _ref5 = _context2.sent;
              _ref6 = _slicedToArray(_ref5, 2);
              err = _ref6[0];
              result = _ref6[1];

              if (!err) {
                _context2.next = 8;
                break;
              }

              return _context2.abrupt("return");

            case 8:
              if (!(result.messageCode == 900)) {
                _context2.next = 19;
                break;
              }

              _context2.next = 11;
              return put({
                type: 'save',
                data: {
                  defaultArea: result.data[0]
                }
              });

            case 11:
              _context2.next = 13;
              return select(function (state) {
                return state.areaList;
              });

            case 13:
              area = _context2.sent;

              if (area.selectAreaData) {
                _context2.next = 17;
                break;
              }

              _context2.next = 17;
              return put({
                type: 'save',
                data: {
                  selectAreaData: result.data[0]
                }
              });

            case 17:
              _context2.next = 20;
              break;

            case 19:
              _tips.Tips.toast(result.message || '没有更多数据');

            case 20:
            case "end":
              return _context2.stop();
          }
        }
      }, getDefaultData, this);
    }),

    // 设置默认地址信息
    setDefaultData: /*#__PURE__*/regeneratorRuntime.mark(function setDefaultData(_ref7, _ref8) {
      var params = _ref7.params;
      var call = _ref8.call,
          put = _ref8.put;

      var _ref9, _ref10, err, result;

      return regeneratorRuntime.wrap(function setDefaultData$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return call((0, _common.toWork)(_service.setDefaultAddress), _extends({}, params, { userid: _common.globalData.userInfo.id }));

            case 2:
              _ref9 = _context3.sent;
              _ref10 = _slicedToArray(_ref9, 2);
              err = _ref10[0];
              result = _ref10[1];

              if (!err) {
                _context3.next = 8;
                break;
              }

              return _context3.abrupt("return");

            case 8:
              if (!(result.messageCode == 900)) {
                _context3.next = 14;
                break;
              }

              _tips.Tips.success('设置成功');
              _context3.next = 12;
              return put({
                type: 'getDefaultData'
              });

            case 12:
              _context3.next = 15;
              break;

            case 14:
              _tips.Tips.toast(result.message || '设置默认地址失败');

            case 15:
            case "end":
              return _context3.stop();
          }
        }
      }, setDefaultData, this);
    }),

    // 删除地址
    deleteAreaList: /*#__PURE__*/regeneratorRuntime.mark(function deleteAreaList(_ref11, _ref12) {
      var params = _ref11.params;
      var call = _ref12.call,
          put = _ref12.put;

      var _ref13, _ref14, err, result;

      return regeneratorRuntime.wrap(function deleteAreaList$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return call((0, _common.toWork)(_service.deletaAreaData), params);

            case 2:
              _ref13 = _context4.sent;
              _ref14 = _slicedToArray(_ref13, 2);
              err = _ref14[0];
              result = _ref14[1];

              if (!err) {
                _context4.next = 8;
                break;
              }

              return _context4.abrupt("return");

            case 8:
              if (!(result.messageCode == 900)) {
                _context4.next = 15;
                break;
              }

              _context4.next = 11;
              return put({
                type: 'fetchAreaListData'
              });

            case 11:
              _context4.next = 13;
              return _tips.Tips.success('删除成功');

            case 13:
              _context4.next = 16;
              break;

            case 15:
              _tips.Tips.toast(result.message || '设置默认地址失败');

            case 16:
            case "end":
              return _context4.stop();
          }
        }
      }, deleteAreaList, this);
    }),

    // 更新地址数据分写法
    updateAreaList: /*#__PURE__*/regeneratorRuntime.mark(function updateAreaList(_ref15, _ref16) {
      var params = _ref15.params;
      var call = _ref16.call,
          put = _ref16.put;

      var _ref17, _ref18, err, result;

      return regeneratorRuntime.wrap(function updateAreaList$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return call((0, _common.toWork)(_service.updateArea), params);

            case 2:
              _ref17 = _context5.sent;
              _ref18 = _slicedToArray(_ref17, 2);
              err = _ref18[0];
              result = _ref18[1];

              if (!err) {
                _context5.next = 8;
                break;
              }

              return _context5.abrupt("return");

            case 8:
              if (!(result.messageCode == 900)) {
                _context5.next = 16;
                break;
              }

              _context5.next = 11;
              return _tips.Tips.success('更新成功');

            case 11:
              _context5.next = 13;
              return put({
                type: 'fetchAreaListData'
              });

            case 13:
              _index2.default.navigateBack();
              _context5.next = 17;
              break;

            case 16:
              _tips.Tips.toast(result.message || '更新失败');

            case 17:
            case "end":
              return _context5.stop();
          }
        }
      }, updateAreaList, this);
    }),

    // 添加地址
    addAreaAddress: /*#__PURE__*/regeneratorRuntime.mark(function addAreaAddress(_ref19, _ref20) {
      var params = _ref19.params;
      var call = _ref20.call,
          put = _ref20.put;

      var _ref21, _ref22, err, result;

      return regeneratorRuntime.wrap(function addAreaAddress$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _tips.Tips.loading('正在保存');
              _context6.next = 3;
              return call((0, _common.toWork)(_service.addAreaData), _extends({}, params, { userid: _common.globalData.userInfo.id }));

            case 3:
              _ref21 = _context6.sent;
              _ref22 = _slicedToArray(_ref21, 2);
              err = _ref22[0];
              result = _ref22[1];

              _tips.Tips.loaded();

              if (!err) {
                _context6.next = 10;
                break;
              }

              return _context6.abrupt("return");

            case 10:
              if (!(result.messageCode == 900)) {
                _context6.next = 16;
                break;
              }

              _context6.next = 13;
              return put({
                type: 'fetchAreaListData'
              });

            case 13:
              _index2.default.navigateBack();
              _context6.next = 17;
              break;

            case 16:
              _tips.Tips.toast(result.message || '保存失败');

            case 17:
            case "end":
              return _context6.stop();
          }
        }
      }, addAreaAddress, this);
    })
  },
  reducers: {
    save: function save(state, action) {
      return _extends({}, state, action.data);
    }
  }
};