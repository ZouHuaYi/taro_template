"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require("../npm/dva-core/index.js");

var _reduxLogger = require("../npm/redux-logger/dist/redux-logger.js");

var app = void 0;
var store = void 0;
var dispatch = void 0;
var registered = void 0;
function createApp(options) {
  options.onAction = [(0, _reduxLogger.createLogger)()];
  app = (0, _index.create)(options);
  // app.use(createLoading({}))
  if (!registered) options.models.forEach(function (model) {
    return app.model(model);
  });
  registered = true;
  app.start();
  store = app._store;
  app.getStore = function () {
    return store;
  };
  app.use({
    onError: function onError(err) {
      console.log("dva\u51FA\u9519\u4E86" + err.toString());
    }
  });
  dispatch = store.dispatch;
  app.dispatch = dispatch;
  return app;
}
exports.default = {
  createApp: createApp,
  getDispatch: function getDispatch() {
    return app.dispatch;
  }
};