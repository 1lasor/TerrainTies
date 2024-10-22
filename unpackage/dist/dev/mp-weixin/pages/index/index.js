"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const EaseIM_index = require("../../EaseIM/index.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const title = common_vendor.ref("TerrainTies");
    const username = common_vendor.ref("");
    const password = common_vendor.ref("");
    const loginIM = () => {
      EaseIM_index.EMClient.open({
        user: username.value,
        pwd: password.value
      }).then(() => {
        console.log(">>>>>login success");
        common_vendor.index.navigateTo({
          url: "/pages/social_map/index"
        });
        console.log(">>>>>page changed");
      }).catch((reason) => {
        console.log(">>>>>login fail", reason);
      });
    };
    const navigateToRegister = () => {
      common_vendor.index.navigateTo({
        url: "/pages/index/register"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.t(title.value),
        c: username.value,
        d: common_vendor.o(($event) => username.value = $event.detail.value),
        e: password.value,
        f: common_vendor.o(($event) => password.value = $event.detail.value),
        g: common_vendor.o(loginIM),
        h: common_vendor.o(navigateToRegister)
      };
    };
  }
};
wx.createPage(_sfc_main);
