"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
require("/common/qqmap-wx-jssdk.js");
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
        }
      });
    },
    refresh() {
      this.getLocation();
      console.log("刷新");
    },
    onControltap() {
      this.getLocation();
      common_vendor.index.createMapContext("map", this).moveToLocation();
      console.log("定位");
      common_vendor.index.showModal({
        title: "提示",
        content: "当前纬度" + this.latitude + "当前经度" + this.longitude
      });
    }
    // 其他方法...
  },
  onShow() {
    this.getLocation();
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0$1,
    b: common_vendor.o((...args) => _ctx.refresh && _ctx.refresh(...args)),
    c: common_assets._imports_1,
    d: common_vendor.o((...args) => _ctx.onControltap && _ctx.onControltap(...args)),
    e: _ctx.latitude,
    f: _ctx.longitude,
    g: _ctx.marker,
    h: _ctx.scale,
    i: common_vendor.o((...args) => _ctx.markertap && _ctx.markertap(...args)),
    j: common_vendor.o(($event) => _ctx.navigateTo("/pages/contacts/index")),
    k: common_vendor.o(($event) => _ctx.navigateTo("/pages/conversation/index")),
    l: common_vendor.o(($event) => _ctx.navigateTo("/pages/homepage/index"))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-55d825cb"]]);
wx.createPage(MiniProgramPage);
