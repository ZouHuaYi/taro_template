"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _common = require("../../utils/common.js");

var _service = require("./service.js");

var _tips = require("../../utils/tips.js");

exports.default = {
  namespace: 'detail',
  state: {
    detailData: {},
    shopCartNumber: 0,
    cartAccountList: []
  },
  effects: {
    // 获取详细信息
    getDetailData: /*#__PURE__*/regeneratorRuntime.mark(function getDetailData(_ref, _ref2) {
      var params = _ref.params;
      var call = _ref2.call,
          put = _ref2.put;

      var _ref3, _ref4, err, result;

      return regeneratorRuntime.wrap(function getDetailData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return put({
                type: 'save',
                data: {
                  detailData: {}
                }
              });

            case 2:
              _tips.Tips.loading('正在加载');
              _context.next = 5;
              return call((0, _common.toWork)(_service.getDetail), params);

            case 5:
              _ref3 = _context.sent;
              _ref4 = _slicedToArray(_ref3, 2);
              err = _ref4[0];
              result = _ref4[1];

              _tips.Tips.loaded();

              if (!err) {
                _context.next = 12;
                break;
              }

              return _context.abrupt("return");

            case 12:
              if (!(result.messageCode == 900)) {
                _context.next = 17;
                break;
              }

              _context.next = 15;
              return put({
                type: 'save',
                data: {
                  detailData: result.data
                }
              });

            case 15:
              _context.next = 18;
              break;

            case 17:
              _tips.Tips.toast(result.message || '无法加载数据');

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, getDetailData, this);
    }),

    // 购物车操作
    addOrdeleteCartAction: /*#__PURE__*/regeneratorRuntime.mark(function addOrdeleteCartAction(_ref5, _ref6) {
      var params = _ref5.params;
      var call = _ref6.call,
          put = _ref6.put;

      var formData, _ref7, _ref8, err, result;

      return regeneratorRuntime.wrap(function addOrdeleteCartAction$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return call(_common.loginJudge);

            case 2:
              formData = _extends({}, params, {
                userid: _common.globalData.userInfo.id
              });
              _context2.next = 5;
              return call((0, _common.toWork)(_service.addOrdeleteCartAction), formData);

            case 5:
              _ref7 = _context2.sent;
              _ref8 = _slicedToArray(_ref7, 2);
              err = _ref8[0];
              result = _ref8[1];

              if (!err) {
                _context2.next = 11;
                break;
              }

              return _context2.abrupt("return");

            case 11:
              if (!(result.messageCode == 900)) {
                _context2.next = 18;
                break;
              }

              _context2.next = 14;
              return put({
                type: 'getCartAllNumber'
              });

            case 14:
              _context2.next = 16;
              return put({
                type: 'cart/getCartListData'
              });

            case 16:
              _context2.next = 19;
              break;

            case 18:
              _tips.Tips.toast(result.message || '操作失败');

            case 19:
            case "end":
              return _context2.stop();
          }
        }
      }, addOrdeleteCartAction, this);
    }),

    // 获取购物车数量
    getCartAllNumber: /*#__PURE__*/regeneratorRuntime.mark(function getCartAllNumber(_, _ref9) {
      var call = _ref9.call,
          put = _ref9.put;

      var _ref10, _ref11, err, result;

      return regeneratorRuntime.wrap(function getCartAllNumber$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return call(_common.loginJudge);

            case 2:
              _context3.next = 4;
              return call((0, _common.toWork)(_service.getShopCartNumber), { userid: _common.globalData.userInfo.id });

            case 4:
              _ref10 = _context3.sent;
              _ref11 = _slicedToArray(_ref10, 2);
              err = _ref11[0];
              result = _ref11[1];

              if (!err) {
                _context3.next = 10;
                break;
              }

              return _context3.abrupt("return");

            case 10:
              if (!(result.messageCode == 900)) {
                _context3.next = 15;
                break;
              }

              _context3.next = 13;
              return put({
                type: 'save',
                data: {
                  shopCartNumber: result.data
                }
              });

            case 13:
              _context3.next = 16;
              break;

            case 15:
              _tips.Tips.toast(result.message || '无法获取购物车数量');

            case 16:
            case "end":
              return _context3.stop();
          }
        }
      }, getCartAllNumber, this);
    })
  },
  reducers: {
    save: function save(state, action) {
      return _extends({}, state, action.data);
    }
  }
};