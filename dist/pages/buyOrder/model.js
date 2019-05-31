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
  namespace: 'buyOrder',
  state: {
    orderList: [],
    page: 1,
    rows: 10,
    orderDetail: {}
  },
  effects: {
    // 获取列表数据
    getOrderList: /*#__PURE__*/regeneratorRuntime.mark(function getOrderList(_ref, _ref2) {
      var params = _ref.params;
      var call = _ref2.call,
          put = _ref2.put,
          select = _ref2.select;

      var buyOrder, _ref3, _ref4, err, result;

      return regeneratorRuntime.wrap(function getOrderList$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _tips.Tips.loading('正在加载');
              _context.next = 3;
              return select(function (state) {
                return state.buyOrder;
              });

            case 3:
              buyOrder = _context.sent;
              _context.next = 6;
              return call((0, _common.toWork)(_service.orderList), _extends({ page: buyOrder.page, rows: buyOrder.rows }, params));

            case 6:
              _ref3 = _context.sent;
              _ref4 = _slicedToArray(_ref3, 2);
              err = _ref4[0];
              result = _ref4[1];

              _tips.Tips.loaded();

              if (!err) {
                _context.next = 13;
                break;
              }

              return _context.abrupt("return");

            case 13:
              if (!(result.messageCode == 900)) {
                _context.next = 18;
                break;
              }

              _context.next = 16;
              return put({
                type: 'save',
                data: {
                  page: buyOrder.page + 1,
                  orderList: buyOrder.orderList.concat(result.data)
                }
              });

            case 16:
              _context.next = 19;
              break;

            case 18:
              if (!(result.messageCode == 905)) {
                _tips.Tips.toast(result.message || '数据加载出错啦');
              }

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, getOrderList, this);
    }),

    // 提醒发货
    remindFun: /*#__PURE__*/regeneratorRuntime.mark(function remindFun(_ref5, _ref6) {
      var params = _ref5.params;
      var call = _ref6.call,
          put = _ref6.put;

      var _ref7, _ref8, err, result;

      return regeneratorRuntime.wrap(function remindFun$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _tips.Tips.loading('正在操作');
              _context2.next = 3;
              return call((0, _common.toWork)(_service.remindShop), params);

            case 3:
              _ref7 = _context2.sent;
              _ref8 = _slicedToArray(_ref7, 2);
              err = _ref8[0];
              result = _ref8[1];

              _tips.Tips.loaded();

              if (!err) {
                _context2.next = 10;
                break;
              }

              return _context2.abrupt("return");

            case 10:
              if (!(result.messageCode == 900)) {
                _tips.Tips.toast(result.message || '提醒发货失败');
              }

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, remindFun, this);
    }),

    // 删除订单
    deleteOrder: /*#__PURE__*/regeneratorRuntime.mark(function deleteOrder(_ref9, _ref10) {
      var params = _ref9.params;
      var call = _ref10.call,
          put = _ref10.put;

      var _ref11, _ref12, err, result;

      return regeneratorRuntime.wrap(function deleteOrder$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return call((0, _common.toWork)(_service.deleteOrder), params);

            case 2:
              _ref11 = _context3.sent;
              _ref12 = _slicedToArray(_ref11, 2);
              err = _ref12[0];
              result = _ref12[1];

              if (!err) {
                _context3.next = 8;
                break;
              }

              return _context3.abrupt("return");

            case 8:
              if (!(result.messageCode == 900)) {
                _context3.next = 15;
                break;
              }

              _context3.next = 11;
              return put({
                type: 'save',
                data: {
                  orderList: [],
                  page: 1
                }
              });

            case 11:
              _context3.next = 13;
              return put({
                type: 'getOrderList',
                params: {
                  status: params.status
                }
              });

            case 13:
              _context3.next = 16;
              break;

            case 15:
              _tips.Tips.toast(result.message || '删除失败');

            case 16:
            case "end":
              return _context3.stop();
          }
        }
      }, deleteOrder, this);
    }),

    // 取消订单
    cancalOrder: /*#__PURE__*/regeneratorRuntime.mark(function cancalOrder(_ref13, _ref14) {
      var params = _ref13.params;
      var call = _ref14.call,
          put = _ref14.put;

      var _ref15, _ref16, err, result;

      return regeneratorRuntime.wrap(function cancalOrder$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return call((0, _common.toWork)(_service.cancalOrder), params);

            case 2:
              _ref15 = _context4.sent;
              _ref16 = _slicedToArray(_ref15, 2);
              err = _ref16[0];
              result = _ref16[1];

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
                type: 'save',
                data: {
                  orderList: [],
                  page: 1
                }
              });

            case 11:
              _context4.next = 13;
              return put({
                type: 'getOrderList',
                params: {
                  status: params.status
                }
              });

            case 13:
              _context4.next = 16;
              break;

            case 15:
              _tips.Tips.toast(result.message || '取消失败');

            case 16:
            case "end":
              return _context4.stop();
          }
        }
      }, cancalOrder, this);
    }),

    // 获取订单的详细信息
    getOrderTypeDetail: /*#__PURE__*/regeneratorRuntime.mark(function getOrderTypeDetail(_ref17, _ref18) {
      var params = _ref17.params;
      var call = _ref18.call,
          put = _ref18.put;

      var _ref19, _ref20, err, result;

      return regeneratorRuntime.wrap(function getOrderTypeDetail$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _tips.Tips.loading('正在加载');
              _context5.next = 3;
              return put({
                type: 'save',
                data: {
                  orderDetail: {}
                }
              });

            case 3:
              _context5.next = 5;
              return call((0, _common.toWork)(_service.orderTypeDetail), params);

            case 5:
              _ref19 = _context5.sent;
              _ref20 = _slicedToArray(_ref19, 2);
              err = _ref20[0];
              result = _ref20[1];

              _tips.Tips.loaded();

              if (!err) {
                _context5.next = 12;
                break;
              }

              return _context5.abrupt("return");

            case 12:
              if (!(result.messageCode == 900)) {
                _context5.next = 17;
                break;
              }

              _context5.next = 15;
              return put({
                type: 'save',
                data: {
                  orderDetail: result.data
                }
              });

            case 15:
              _context5.next = 18;
              break;

            case 17:
              _tips.Tips.toast(result.message || '取消失败');

            case 18:
            case "end":
              return _context5.stop();
          }
        }
      }, getOrderTypeDetail, this);
    })
  },
  reducers: {
    save: function save(state, action) {
      return _extends({}, state, action.data);
    }
  }
};