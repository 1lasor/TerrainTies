"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  (Message + InputBar)();
}
const Message = () => "./Message.js";
const InputBar = () => "./inputBar.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  props: {
    userId: {
      type: String,
      default: "",
      required: true
    }
  },
  setup(__props) {
    const messageList = common_vendor.ref([]);
    const appendMessage = (message) => {
      messageList.value.push(message);
    };
    common_vendor.onMounted(() => {
      common_vendor.index.$on("onTextMessage", (message) => {
        appendMessage(message);
      });
    });
    common_vendor.ref(null);
    common_vendor.ref("");
    common_vendor.ref(false);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          messageList: messageList.value
        }),
        b: common_vendor.o(appendMessage),
        c: common_vendor.p({
          targetId: __props.userId
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5a559478"]]);
wx.createPage(MiniProgramPage);
