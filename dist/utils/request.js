"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = request;

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

require("../npm/@tarojs/async-await/index.js");

var _common = require("./common.js");

var _tips = require("./tips.js");

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
      data = keys.map(function (name) {
        return name + "=" + data[name];
      }).join("&");
    } else {
      data = {};
    }
    if (_common.globalData.userInfo) {
      data = encodeURI(data + "&token=" + _common.globalData.userInfo.token);
    } else {
      data = encodeURI(data);
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
          if (dat.messageCode == 904 || dat.messageCode == 906 || dat.messageCode == 903) {
            // 这里的判断是授权，这个是用户账户异常的
            _common.globalData.userInfo = null;
          } else {
            resole(dat);
          }
        } catch (e) {
          _tips.Tips.toast('数据异常');
          reject(e);
        }
      },
      fail: function fail(res) {
        _tips.Tips.toast('请求出错啦！');
        reject(res);
      }
    });
  });
}