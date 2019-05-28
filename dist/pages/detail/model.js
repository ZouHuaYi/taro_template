"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _common = require("../../utils/common.js");

var _service = require("./service.js");

var _tips = require("../../utils/tips.js");

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  namespace: 'detail',
  state: {
    detailData: {},
    shopCartNumber: 0,
    cartAccountList: [],
    orderPlaceData: {}
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
                  orderPlaceData: {},
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
    }),

    // 生成支付订单
    createPayOrder: /*#__PURE__*/regeneratorRuntime.mark(function createPayOrder(_ref12, _ref13) {
      var params = _ref12.params;
      var call = _ref13.call,
          put = _ref13.put;

      var _ref14, _ref15, err, result;

      return regeneratorRuntime.wrap(function createPayOrder$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return call((0, _common.toWork)(_service.placeOder), { params: params });

            case 2:
              _ref14 = _context4.sent;
              _ref15 = _slicedToArray(_ref14, 2);
              err = _ref15[0];
              result = _ref15[1];

              if (!err) {
                _context4.next = 8;
                break;
              }

              return _context4.abrupt("return");

            case 8:
              if (!(result.messageCode == 900)) {
                _context4.next = 13;
                break;
              }

              _context4.next = 11;
              return put({
                type: 'wechatPayMonney',
                result: result
              });

            case 11:
              _context4.next = 14;
              break;

            case 13:
              _tips.Tips.toast(result.message || '该订单无法生成');

            case 14:
            case "end":
              return _context4.stop();
          }
        }
      }, createPayOrder, this);
    }),

    // 多订单一起生成订单号
    createMoreOrder: /*#__PURE__*/regeneratorRuntime.mark(function createMoreOrder(_ref16, _ref17) {
      var params = _ref16.params;
      var call = _ref17.call,
          put = _ref17.put;

      var _ref18, _ref19, err, result;

      return regeneratorRuntime.wrap(function createMoreOrder$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return call((0, _common.toWork)(_service.multiProduct), params);

            case 2:
              _ref18 = _context5.sent;
              _ref19 = _slicedToArray(_ref18, 2);
              err = _ref19[0];
              result = _ref19[1];

              if (!err) {
                _context5.next = 8;
                break;
              }

              return _context5.abrupt("return");

            case 8:
              if (!(result.messageCode == 900)) {
                _context5.next = 13;
                break;
              }

              _context5.next = 11;
              return put({
                type: 'wechatPayMonney',
                result: result
              });

            case 11:
              _context5.next = 14;
              break;

            case 13:
              _tips.Tips.toast(result.message || '该订单无法生成');

            case 14:
            case "end":
              return _context5.stop();
          }
        }
      }, createMoreOrder, this);
    }),

    // 微信签名 支付模块
    wechatPayMonney: /*#__PURE__*/regeneratorRuntime.mark(function wechatPayMonney(_ref20, _ref21) {
      var result = _ref20.result;
      var call = _ref21.call,
          select = _ref21.select;

      var openid, _ref22, _ref23, payerr, signData, _signData$data, timestamp, total_fee, noncestr, prepayid, sign;

      return regeneratorRuntime.wrap(function wechatPayMonney$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return select(function (state) {
                return state.login;
              });

            case 2:
              openid = _context6.sent;
              _context6.next = 5;
              return call((0, _common.toWork)(_service.wxPayMonney), {
                openid: openid.openid,
                orderNumber: result.data.orderNumber
              });

            case 5:
              _ref22 = _context6.sent;
              _ref23 = _slicedToArray(_ref22, 2);
              payerr = _ref23[0];
              signData = _ref23[1];

              if (!payerr) {
                _context6.next = 11;
                break;
              }

              return _context6.abrupt("return");

            case 11:
              if (signData.messageCode == 900) {
                // 调起微信支付
                _signData$data = signData.data, timestamp = _signData$data.timestamp, total_fee = _signData$data.total_fee, noncestr = _signData$data.noncestr, prepayid = _signData$data.prepayid, sign = _signData$data.sign;

                _index2.default.requestPayment({
                  timeStamp: String(timestamp),
                  nonceStr: noncestr,
                  package: "prepay_id=" + prepayid,
                  signType: 'MD5',
                  paySign: sign,
                  total_fee: total_fee,
                  success: function success(res) {
                    _tips.Tips.success('支付成功');
                    _index2.default.reLaunch({
                      url: '/pages/user/user'
                    });
                  },
                  fail: function fail(error) {
                    _tips.Tips.toast('支付失败');
                  }
                });
              } else {
                _tips.Tips.toast(signData.message || '微信签名失败');
              }

            case 12:
            case "end":
              return _context6.stop();
          }
        }
      }, wechatPayMonney, this);
    })
  },
  reducers: {
    save: function save(state, action) {
      return _extends({}, state, action.data);
    }
  }
};