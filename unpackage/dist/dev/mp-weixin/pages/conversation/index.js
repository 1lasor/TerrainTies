"use strict";
const common_vendor = require("../../common/vendor.js");
const pages_stores_conversation = require("../stores/conversation.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const ConversationStore = pages_stores_conversation.useConversationStore();
    console.log("ConversationStore", ConversationStore.conversationList);
    const conversationList = common_vendor.computed(() => ConversationStore.conversationList);
    ConversationStore.fetchConversationListFromServer();
    const clearConversationUnReadCount = (conversationItem) => {
      if (conversationItem.unReadCount > 0) {
        ConversationStore.clearConversationUnReadCount({
          conversationId: conversationItem.conversationId,
          conversationType: conversationItem.conversationType
        });
      }
    };
    const deleteConversation = (conversationItem) => {
      ConversationStore.deleteConversationFromServer({
        conversationId: conversationItem.conversationId,
        conversationType: conversationItem.conversationType
      });
    };
    const callConversationActionSheet = (conversationItem) => {
      console.log("conversationItem", conversationItem);
      const { isPinned } = conversationItem;
      let itemList = ["删除会话"];
      if (isPinned) {
        itemList = ["取消置顶", ...itemList];
      } else {
        itemList = ["置顶会话", ...itemList];
      }
      common_vendor.index.showActionSheet({
        itemList,
        success: function(res) {
          console.log("选中了第" + (res.tapIndex + 1) + "个按钮");
          switch (res.tapIndex) {
            case 0:
              {
                ConversationStore.handlePinConversation({
                  conversationId: conversationItem.conversationId,
                  conversationType: conversationItem.conversationType,
                  isPinned
                });
              }
              break;
            case 1:
              {
                deleteConversation(conversationItem);
              }
              break;
          }
        },
        fail: function(res) {
          console.log(res.errMsg);
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(conversationList.value, (conversationItem, k0, i0) => {
          return {
            a: conversationItem.userID,
            b: common_vendor.o(($event) => callConversationActionSheet(conversationItem), conversationItem.userID),
            c: common_vendor.o(($event) => clearConversationUnReadCount(conversationItem), conversationItem.userID)
          };
        })
      };
    };
  }
};
wx.createPage(_sfc_main);