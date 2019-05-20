'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require('../npm/@tarojs/taro-weapp/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tips = function () {
  function Tips() {
    _classCallCheck(this, Tips);
  }

  _createClass(Tips, null, [{
    key: 'toast',

    /**
     * 信息提示
     */
    value: function toast(title, onHide) {
      _index2.default.showToast({
        title: title,
        icon: 'none',
        mask: true,
        duration: 1500
      });
      // 隐藏结束回调
      if (onHide) {
        setTimeout(function () {
          onHide();
        }, 500);
      }
    }
    /**
     * 弹出加载提示
     */

  }, {
    key: 'loading',
    value: function loading() {
      var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '加载中';
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (this.isLoading && !force) {
        return;
      }
      this.isLoading = true;
      if (_index2.default.showLoading) {
        _index2.default.showLoading({
          title: title,
          mask: true
        });
      } else {
        _index2.default.showNavigationBarLoading();
      }
    }
    /**
     * 加载完毕
     */

  }, {
    key: 'loaded',
    value: function loaded() {
      var duration = 0;
      if (this.isLoading) {
        this.isLoading = false;
        if (_index2.default.hideLoading) {
          _index2.default.hideLoading();
        } else {
          _index2.default.hideNavigationBarLoading();
        }
        duration = 500;
      }
      // 隐藏动画大约500ms，避免后面直接toast时的显示bug
      return new Promise(function (resolve) {
        return setTimeout(resolve, duration);
      });
    }
    /**
     * 弹出提示框
     */

  }, {
    key: 'success',
    value: function success(title) {
      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1500;

      _index2.default.showToast({
        title: title,
        icon: 'success',
        mask: true,
        duration: duration
      });
      if (duration > 0) {
        return new Promise(function (resolve) {
          return setTimeout(resolve, duration);
        });
      }
    }
  }]);

  return Tips;
}();

exports.default = Tips;

Tips.isLoading = false;