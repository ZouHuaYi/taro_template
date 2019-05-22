'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shoppingCartNumber = shoppingCartNumber;
exports.addOrDeteleCart = addOrDeteleCart;
exports.cartAllList = cartAllList;

var _request = require('../utils/request.js');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 获取购物车里面的数量
function shoppingCartNumber(params) {
  return (0, _request2.default)({
    url: '/rest/shoppingcart/quantity',
    data: {
      userId: params.userId
    }
  });
}
// 加入购物车操作
function addOrDeteleCart() {
  return (0, _request2.default)({
    url: '/rest/shoppingcart/add_or_delete',
    data: {}
  });
}
// 购物车数据列表
function cartAllList() {
  return (0, _request2.default)({
    url: '/rest/shoppingcart/list',
    data: {}
  });
}