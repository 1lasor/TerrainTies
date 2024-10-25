"use strict";
const common_vendor = require("../../common/vendor.js");
const EaseIM_index = require("../../EaseIM/index.js");
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
    const props = __props;
    const messageList = common_vendor.ref([]);
    const appendMessage = (message) => {
      messageList.value.push(message);
    };
    const getHistoryMessage = () => {
      let options = {
        // 对方的用户 ID 或者群组 ID 或聊天室 ID。
        targetId: props.userId,
        // 每页期望获取的消息条数。取值范围为 [1,50]，默认值为 20。
        pageSize: 20,
        // 查询的起始消息 ID。若该参数设置为 `-1`、`null` 或空字符串，从最新消息开始。
        cursor: -1,
        // 会话类型：（默认） `singleChat`：单聊；`groupChat`：群聊；`chatRoom`：聊天室
        chatType: "singleChat",
        // 消息搜索方向：（默认）`up`：按服务器收到消息的时间的逆序获取；`down`：按服务器收到消息的时间的正序获取。
        searchDirection: "up"
      };
      EaseIM_index.EMClient.getHistoryMessages(options).then((res) => {
        console.log("成功获取历史消息");
        messageList.value = res.messages.reverse().concat(messageList.value);
      }).catch((e) => {
        console.log(">>>>获取失败", e);
      });
    };
    common_vendor.onMounted(() => {
      getHistoryMessage();
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
