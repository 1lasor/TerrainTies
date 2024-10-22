"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const EaseIM_index = require("../../EaseIM/index.js");
const _sfc_main = {
  __name: "register",
  setup(__props) {
    const title = common_vendor.ref("TerrainTies");
    const username = common_vendor.ref("");
    const password = common_vendor.ref("");
    const confirmPassword = common_vendor.ref("");
    const registerIM = () => {
      if (password.value === confirmPassword.value) {
        EaseIM_index.EMClient.registerUser({
          /** 用户 ID。 */
          username: username.value,
          /** 密码。 */
          password: password.value
        }).then((res) => {
          console.log(">>>>>注册成功", res);
          common_vendor.index.showToast({
            title: "注册成功",
            icon: "none"
          });
          common_vendor.index.navigateBack();
        });
      } else {
        common_vendor.index.showToast({
          title: "两次密码输入不一致",
          icon: "none"
        });
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.t(title.value),
        c: username.value,
        d: common_vendor.o(($event) => username.value = $event.detail.value),
        e: password.value,
        f: common_vendor.o(($event) => password.value = $event.detail.value),
        g: confirmPassword.value,
        h: common_vendor.o(($event) => confirmPassword.value = $event.detail.value),
        i: common_vendor.o(registerIM)
      };
    };
  }
};
wx.createPage(_sfc_main);
