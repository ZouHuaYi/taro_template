"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _common = require("../../utils/common.js");

var _service = require("./service.js");

exports.default = {
  namespace: 'buyOrder',
  state: {
    orderList: [],
    page: 1,
    rows: 10
  },
  effects: {
    // 获取列表数据
    getOrderList: /*#__PURE__*/regeneratorRuntime.mark(function getOrderList(_, _ref) {
      var call = _ref.call,
          put = _ref.put;

      var _ref2, _ref3, err, result;

      return regeneratorRuntime.wrap(function getOrderList$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return call((0, _common.toWork)(_service.orderList), {
                page: 1,
                rows: 10,
                status: 0
              });

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
              console.log(result);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, getOrderList, this);
    })
  },
  reducers: {}
};