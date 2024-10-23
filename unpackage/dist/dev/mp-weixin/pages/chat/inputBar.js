"use strict";
const common_vendor = require("../../common/vendor.js");
const EaseIM_index = require("../../EaseIM/index.js");
require("../stores/conversation.js");
const _sfc_main = {
  __name: "inputBar",
  props: {
    targetId: {
      type: String,
      required: true
    }
  },
  emits: ["appendMessage"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    let msgContent = common_vendor.ref("");
    const sendTextMessage = (message) => {
      let option = {
        // 消息类型。
        type: "txt",
        // 消息内容。
        msg: msgContent.value,
        // 消息接收方：单聊为对方用户 ID，群聊和聊天室分别为群组 ID 和聊天室 ID。
        to: props.targetId,
        // 会话类型：单聊、群聊和聊天室分别为 `singleChat`、`groupChat` 和 `chatRoom`，默认为单聊。
        chatType: "singleChat"
      };
      let msg = common_vendor.EasemobSDK.message.create(option);
      EaseIM_index.EMClient.send(msg).then((res) => {
        console.log("Send message success", res);
        const {
          message: message2
        } = res;
        emits("appendMessage", message2);
      }).catch((e) => {
        console.log("Send message fail", e);
      });
    };
    const apiUrl = EaseIM_index.EMClient.apiUrl;
    const orgName = EaseIM_index.EMClient.orgName;
    const appName = EaseIM_index.EMClient.appName;
    const uploadTargetUrl = `${apiUrl}/${orgName}/${appName}/chatfiles`;
    const token = EaseIM_index.EMClient.token;
    const chooseImage = () => {
      common_vendor.index.chooseImage({
        count: 1,
        sizeType: ["original", "compressed"],
        sourceType: ["album", "camera"],
        success: (res) => {
          const tempFilePaths = res.tempFilePaths;
          console.log("tempFilePaths", tempFilePaths);
          uploadImage(res);
        }
      });
    };
    const uploadImage = (res) => {
      const tempFile = res == null ? void 0 : res.tempFiles[0];
      const tempFilePath = res && res.tempFilePaths && res.tempFilePaths[0] || res && res.tempFiles && res.tempFiles[0].tempFilePath;
      console.log("tempFilePath", tempFilePath);
      const imageName = (tempFile == null ? void 0 : tempFile.name) || "image" + Date.now();
      const imageType = (tempFile == null ? void 0 : tempFile.type.split("/")[1]) || "";
      let width = "";
      let height = "";
      common_vendor.index.getImageInfo({
        src: tempFilePath,
        success: (res2) => {
          console.log(">>>>>获取图片信息成功", res2);
          width = res2.width;
          height = res2.height;
        },
        fail: (err) => {
          console.log(">>>>>获取图片信息失败", err);
        }
      });
      common_vendor.index.uploadFile({
        url: uploadTargetUrl,
        filePath: tempFilePath,
        fileType: "image",
        name: "file",
        header: {
          Authorization: "Bearer" + token
        },
        success: (res2) => {
          console.log("上传图片成功", res2);
          if (res2.statusCode === 400) {
            JSON.parse(res2.data);
            if (res2.statusCode === "content improper") {
              common_vendor.index.showToast({
                title: "图片不合法",
                icon: "none"
              });
              return false;
            }
          }
          console.log(
            ">>>>>执行发送图片信息",
            imageName,
            width,
            height,
            imageType
          );
          common_vendor.index.showToast({
            title: "图片已上传",
            icon: "none"
          });
          sendImagesMessage(res2, { imageName, width, height, imageType });
        },
        fail: (e) => {
          console.log(">>>>>上传失败", e);
          common_vendor.index.showToast({
            title: "图片上传失败",
            icon: "none"
          });
        }
      });
    };
    const sendImagesMessage = (res, { imageName, width, height, imageType }) => {
      let resData = JSON.parse(res.data);
      var option = {
        type: "img",
        chatType: "singleChat",
        width,
        height,
        url: resData.uri + "/" + resData.entities[0].uuid,
        // 消息接收方：单聊为对方用户 ID，群聊和聊天室分别为群组 ID 和聊天室 ID。
        to: targetId
      };
      let msg = common_vendor.EasemobSDK.message.create(option);
      EaseIM_index.EMClient.send(msg).then((res2) => {
        console.log(">>>>>图片消息成功发送", res2);
        const { message } = res2;
        emits("appendMessage", message);
      }).catch((e) => {
        console.log(">>>>>图片消息发送失败");
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(chooseImage),
        b: common_vendor.o(sendTextMessage),
        c: common_vendor.unref(msgContent),
        d: common_vendor.o(($event) => common_vendor.isRef(msgContent) ? msgContent.value = $event.detail.value : msgContent = $event.detail.value)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f4dd9a72"]]);
wx.createComponent(Component);
