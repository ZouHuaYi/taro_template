"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _service = require("./service.js");

var _common = require("../../utils/common.js");

var _tips = require("../../utils/tips.js");

exports.default = {
  namespace: 'shopIndex',
  state: {
    category: [],
    bannerList: [],
    productList: [],
    page: 1
  },
  effects: {
    // 获取分类数据
    getCategoryList: /*#__PURE__*/regeneratorRuntime.mark(function getCategoryList(_, _ref) {
      var call = _ref.call,
          put = _ref.put;

      var _ref2, _ref3, err, result;

      return regeneratorRuntime.wrap(function getCategoryList$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return call((0, _common.toWork)(_service.categoryList), _);

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
                _context.next = 18;
                break;
              }

              _context.next = 11;
              return put({
                type: 'save',
                data: {
                  category: result.data
                }
              });

            case 11:
              if (!(result.data.length > 0)) {
                _context.next = 16;
                break;
              }

              _context.next = 14;
              return put({
                type: 'getBannerList',
                params: {
                  id: result.data[0].id
                }
              });

            case 14:
              _context.next = 16;
              return put({
                type: 'getPruductList',
                params: {
                  id: result.data[0].id
                }
              });

            case 16:
              _context.next = 19;
              break;

            case 18:
              _tips.Tips.toast(result.message || '无法加载分类数据');

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, getCategoryList, this);
    }),

    // 获取每一页的banner数据
    getBannerList: /*#__PURE__*/regeneratorRuntime.mark(function getBannerList(_ref4, _ref5) {
      var params = _ref4.params;
      var call = _ref5.call,
          put = _ref5.put;

      var _ref6, _ref7, err, result;

      return regeneratorRuntime.wrap(function getBannerList$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return call((0, _common.toWork)(_service.bannerList), params);

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
              if (!(result.messageCode == 900 || result.messageCode == 905)) {
                _context2.next = 13;
                break;
              }

              _context2.next = 11;
              return put({
                type: 'save',
                data: {
                  bannerList: result.data || []
                }
              });

            case 11:
              _context2.next = 14;
              break;

            case 13:
              _tips.Tips.toast(result.message || '无法加载轮播图数据数据');

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, getBannerList, this);
    }),

    // 获取产品数据   可能要做分页所以跟上面的banner分开来显示
    getPruductList: /*#__PURE__*/regeneratorRuntime.mark(function getPruductList(_ref8, _ref9) {
      var params = _ref8.params;
      var call = _ref9.call,
          put = _ref9.put,
          select = _ref9.select;

      var shopIndex, _ref10, _ref11, err, result;

      return regeneratorRuntime.wrap(function getPruductList$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return select(function (state) {
                return state.shopIndex;
              });

            case 2:
              shopIndex = _context3.sent;
              _context3.next = 5;
              return call((0, _common.toWork)(_service.productList), _extends({}, params, { page: shopIndex.page }));

            case 5:
              _ref10 = _context3.sent;
              _ref11 = _slicedToArray(_ref10, 2);
              err = _ref11[0];
              result = _ref11[1];

              if (!err) {
                _context3.next = 11;
                break;
              }

              return _context3.abrupt("return");

            case 11:
              if (!(result.messageCode == 900 || result.messageCode == 905)) {
                _context3.next = 19;
                break;
              }

              _context3.next = 14;
              return put({
                type: 'save',
                data: {
                  productList: shopIndex.page == 1 ? result.data || [] : shopIndex.productList.concat(result.data || [])
                }
              });

            case 14:
              if (!(result.data && result.data.length > 0)) {
                _context3.next = 17;
                break;
              }

              _context3.next = 17;
              return put({
                type: 'save',
                data: {
                  page: shopIndex.page + 1
                }
              });

            case 17:
              _context3.next = 20;
              break;

            case 19:
              _tips.Tips.toast(result.message || '无法加载产品数据数据');

            case 20:
            case "end":
              return _context3.stop();
          }
        }
      }, getPruductList, this);
    })
  },
  reducers: {
    save: function save(state, action) {
      return _extends({}, state, action.data);
    }
  }
};