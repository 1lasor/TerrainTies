"use strict";
const common_vendor = require("../../common/vendor.js");
const EaseIM_index = require("../../EaseIM/index.js");
const pages_stores_contacts = require("../stores/contacts.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const setUserInfoData = () => {
      const actionModifyRemark = (content) => {
        console.log(">>>>执行设置");
      };
      common_vendor.index.showModal({
        title: "设置用户属性",
        editable: true,
        success: function(res) {
          if (res.confirm) {
            actionModifyRemark();
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        }
      });
    };
    const ContactStore = pages_stores_contacts.useContactsStore();
    const getUserInfoDetails = () => {
      const loginUserId = EaseIM_index.EMClient.user;
      ContactStore.fetchUserInfoFromServer(loginUserId);
      console.log(">>>>userID", loginUserId);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(setUserInfoData),
        b: common_vendor.o(getUserInfoDetails)
      };
    };
  }
};
wx.createPage(_sfc_main);
