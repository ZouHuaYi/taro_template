"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _common = require("../../utils/common.js");

var _service = require("./service.js");

var _tips = require("../../utils/tips.js");

var _service2 = require("../detail/service.js");

exports.default = {
  namespace: 'cart',
  state: {
    cartList: [],
    payAccountList: []
  },
  effects: {
    // 获取购物车列表的数据
    getCartListData: /*#__PURE__*/regeneratorRuntime.mark(function getCartListData(_, _ref) {
      var call = _ref.call,
          put = _ref.put;

      var _ref2, _ref3, err, result;

      return regeneratorRuntime.wrap(function getCartListData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _tips.Tips.loading('正在加载');
              _context.next = 3;
              return call((0, _common.toWork)(_service.cartShopList), _);

            case 3:
              _ref2 = _context.sent;
              _ref3 = _slicedToArray(_ref2, 2);
              err = _ref3[0];
              result = _ref3[1];

              _tips.Tips.loaded();

              if (!err) {
                _context.next = 10;
                break;
              }

              return _context.abrupt("return");

            case 10:
              if (!(result.messageCode == 900)) {
                _context.next = 15;
                break;
              }

              _context.next = 13;
              return put({
                type: 'save',
                data: {
                  cartList: result.data,
                  payAccountList: []
                }
              });

            case 13:
              _context.next = 21;
              break;

            case 15:
              if (!(result.messageCode == 905)) {
                _context.next = 20;
                break;
              }

              _context.next = 18;
              return put({
                type: 'save',
                data: {
                  cartList: []
                }
              });

            case 18:
              _context.next = 21;
              break;

            case 20:
              _tips.Tips.toast(result.message || '加载数据失败');

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, getCartListData, this);
    }),

    // 删除购物车数据
    deleteCartList: /*#__PURE__*/regeneratorRuntime.mark(function deleteCartList(_ref4, _ref5) {
      var params = _ref4.params;
      var call = _ref5.call,
          put = _ref5.put;

      var _ref6, _ref7, err, result;

      return regeneratorRuntime.wrap(function deleteCartList$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return call((0, _common.toWork)(_service2.addOrdeleteCartAction), _extends({}, params, { action: 0, userid: _common.globalData.userInfo.id }));

            case 2:
              _ref6 = _context2.sent;
              _ref7 = _slicedToArray(_ref6, 2);
              err = _ref7[0];
              result = _ref7[1];

              if (!err) {
                _context2.next = 8;
                break;
              }

              return _context2.abrupt("return");

            case 8:
              if (!(result.messageCode == 900)) {
                _context2.next = 15;
                break;
              }

              _context2.next = 11;
              return put({
                type: 'getCartListData'
              });

            case 11:
              _context2.next = 13;
              return put({
                type: 'detail/getCartAllNumber'
              });

            case 13:
              _context2.next = 16;
              break;

            case 15:
              _tips.Tips.toast(result.message || '删除失败');

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, deleteCartList, this);
    })
  },
  reducers: {
    save: function save(state, action) {
      return _extends({}, state, action.data);
    }
  }
};