"use strict";
const common_vendor = require("../../common/vendor.js");
const EaseIM_index = require("../../EaseIM/index.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = common_vendor.defineComponent({
  name: "HomePage",
  data() {
    return {
      latitude: 30.308763,
      //纬度
      longitude: 120.388526,
      //经度
      scale: 12,
      //缩放级别
      marker: [{
        id: 0,
        latitude: 30.308763,
        //纬度
        longitude: 120.388526,
        //经度
        iconPath: "/static/logo.png",
        //显示的头像
        rotate: 0,
        // 旋转度数
        width: 20,
        //宽
        height: 30,
        //高
        alpha: 0.5,
        //透明度
        callout: {
          //自定义标记点上方的气泡窗口 点击有效
          content: "吉米",
          //文本
          color: "#ffffff",
          //文字颜色
          fontSize: 7,
          //文本大小
          borderRadius: 15,
          //边框圆角
          padding: "10",
          bgColor: "#406390",
          //背景颜色
          display: "ALWAYS"
          //常显
        }
      }]
    };
  },
  methods: {
    navigateTo(page) {
      common_vendor.index.navigateTo({
        url: page
      });
      console.log(`Navigate to ${page}`);
    },
    getLocation() {
      common_vendor.index.getLocation({
        type: "gcj02",
        success: (res) => {
          this.latitude = res.latitude;
          this.longitude = res.longitude;
          this.updateUserInfoWithLocation();
        },
        fail: (err) => {
          console.error("获取位置失败:", err);
        }
      });
    },
    updateUserInfoWithLocation() {
      let option = {
        ext: JSON.stringify({
          latitude: this.latitude,
          longitude: this.longitude
        })
      };
      EaseIM_index.EMClient.updateUserInfo(option).then((res) => {
        console.log(">>>>>用户位置信息更新成功:", res);
      }).catch((err) => {
        console.error(">>>>>更新用户位置信息失败:", err);
      });
    },
    getUserLocation(user) {
      return new Promise((resolve, reject) => {
        EaseIM_index.EMClient.fetchUserInfoById(user).then((res) => {
          if (res.data && res.data[user] && res.data[user]["ext"]) {
            try {
              let ext = JSON.parse(res.data[user]["ext"]);
              console.log(">>>>>获取用户信息（位置）:", ext.latitude, ext.longitude);
              resolve({
                latitude: ext.latitude,
                longitude: ext.longitude
              });
            } catch (error) {
              console.error("解析用户扩展信息失败:", error);
              reject(error);
            }
          } else {
            console.log("没有找到用户的位置信息");
            reject(new Error("位置信息不存在"));
          }
        }).catch((err) => {
          console.error("获取用户信息失败:", err);
          reject(err);
        });
        console.log(">>>>>刷新");
      });
    },
    refresh() {
      this.getLocation();
      console.log(">>>>>刷新");
    },
    onControltap() {
      this.getLocation();
      common_vendor.index.createMapContext("map", this).moveToLocation();
      console.log(">>>>>定位");
      common_vendor.index.showModal({
        title: "提示",
        content: "当前纬度" + this.latitude + "当前经度" + this.longitude
      });
    },
    // 其他方法...
    onShow() {
      this.getLocation();
    }
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0$1,
    b: common_vendor.o((...args) => _ctx.refresh && _ctx.refresh(...args)),
    c: common_assets._imports_1,
    d: common_vendor.o((...args) => _ctx.onControltap && _ctx.onControltap(...args)),
    e: common_assets._imports_2,
    f: common_vendor.o(($event) => _ctx.getUserLocation("qwer")),
    g: _ctx.latitude,
    h: _ctx.longitude,
    i: _ctx.marker,
    j: _ctx.scale,
    k: common_vendor.o((...args) => _ctx.markertap && _ctx.markertap(...args)),
    l: common_vendor.o(($event) => _ctx.navigateTo("/pages/contacts/index")),
    m: common_vendor.o(($event) => _ctx.navigateTo("/pages/conversation/index")),
    n: common_vendor.o(($event) => _ctx.navigateTo("/pages/homepage/index"))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-55d825cb"]]);
wx.createPage(MiniProgramPage);
