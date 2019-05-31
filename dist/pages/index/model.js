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
  namespace: 'index',
  state: {
    bannerList: [],
    productList: []
  },
  effects: {
    // 主页需要加载数据
    getAllHomeData: /*#__PURE__*/regeneratorRuntime.mark(function getAllHomeData(_, _ref) {
      var call = _ref.call,
          put = _ref.put;

      var _ref2, _ref3, err, banner, _ref4, _ref5, err1, product;

      return regeneratorRuntime.wrap(function getAllHomeData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _tips.Tips.loading('正在加载');
              _context.next = 3;
              return call((0, _common.toWork)(_service.bannerList), _);

            case 3:
              _ref2 = _context.sent;
              _ref3 = _slicedToArray(_ref2, 2);
              err = _ref3[0];
              banner = _ref3[1];
              _context.next = 9;
              return call((0, _common.toWork)(_service.hotProduct), _);

            case 9:
              _ref4 = _context.sent;
              _ref5 = _slicedToArray(_ref4, 2);
              err1 = _ref5[0];
              product = _ref5[1];

              _tips.Tips.loaded();

              if (!(err && err1)) {
                _context.next = 16;
                break;
              }

              return _context.abrupt("return");

            case 16:
              _context.next = 18;
              return put({
                type: 'save',
                data: {
                  bannerList: banner.data,
                  productList: product.data
                }
              });

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, getAllHomeData, this);
    })
  },
  reducers: {
    save: function save(state, action) {
      return _extends({}, state, action.data);
    }
  }
};