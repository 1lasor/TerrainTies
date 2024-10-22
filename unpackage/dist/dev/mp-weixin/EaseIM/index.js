"use strict";
const common_vendor = require("../common/vendor.js");
const EaseIM_config = require("./config.js");
const EMClient = new common_vendor.EasemobSDK.connection({
  appKey: EaseIM_config.APP_KEY,
  url: EaseIM_config.SOCKET_URL,
  apiUrl: EaseIM_config.REST_URL
});
exports.EMClient = EMClient;
