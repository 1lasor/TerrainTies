"use strict";
const common_vendor = require("../../common/vendor.js");
const EaseIM_index = require("../../EaseIM/index.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "Message",
  props: {
    messageList: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const isSelf = (to) => {
      console.log(">>>>>isself", to);
      return EaseIM_index.EMClient.user === to || to === "";
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.messageList, (message, index, i0) => {
          return common_vendor.e({
            a: message.type === "txt"
          }, message.type === "txt" ? {
            b: common_vendor.t(message.msg)
          } : {}, {
            c: message.type === "img"
          }, message.type === "img" ? {
            d: message.url
          } : {}, {
            e: index,
            f: isSelf(message.to) ? "flex-start" : "flex-end"
          });
        })
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-394f3b8c"]]);
wx.createComponent(Component);
