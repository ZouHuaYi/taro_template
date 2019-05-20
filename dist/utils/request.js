"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = request;

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

require("../npm/@tarojs/async-await/index.js");

var _tips = require("./tips.js");

var _tips2 = _interopRequireDefault(_tips);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Admin_Root = 'https://admin.topmei3mei.com';
var Test_Root = 'https://test.topmei3mei.com';
var dev_status = true;
var Root = Admin_Root;
function request(options) {
  return new Promise(function (resole, reject) {
    var data = options.data;
    if (data && Object.keys(data).length > 0) {
      var keys = Object.keys(data);
      keys = keys.filter(function (name) {
        return data[name] !== undefined;
      });
      data = encodeURI(keys.map(function (name) {
        return name + "=" + data[name];
      }).join("&"));
    } else {
      data = {};
    }
    _index2.default.request({
      url: Root + options.url,
      data: data,
      method: 'POST',
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      dataType: "JSON",
      success: function success(res) {
        try {
          var dat = JSON.parse(res.data);
          if (!(dat.messageCode == 904 || dat.messageCode == 906 || dat.messageCode == 903)) {
            resole(dat);
          }
        } catch (e) {
          _tips2.default.toast('数据异常');
          reject(e);
        }
      },
      fail: function fail(res) {
        _tips2.default.toast('请求出错啦！');
        reject(res);
      }
    });
  });
}