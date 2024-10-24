"use strict";
const common_vendor = require("../../common/vendor.js");
const EaseIM_index = require("../../EaseIM/index.js");
const useContactsStore = common_vendor.defineStore("contactsStore", {
  state: () => {
    return {
      contactsList: [],
      cursor: "",
      pendingContactInvites: []
    };
  },
  actions: {
    async fetchAllContactsListFromServer() {
      try {
        const { data } = await EaseIM_index.EMClient.getAllContacts();
        console.log(">>>>>", data);
        if ((data == null ? void 0 : data.length) >= 0) {
          this.$state.contactsList = data;
        }
        console.log(">>>>联系人列表获取成功");
      } catch (error) {
        console.log(">>>>联系人列表获取失败", error);
      }
    },
    //删除好友
    async deleteContactFrom(userID) {
      try {
        await EaseIM_index.EMClient.deleteContact(userID);
        this.fetchAllContactsListFromServer();
        console.log(">>>>删除成功");
      } catch (error) {
        console.log(">>>>删除失败", error);
      }
    },
    //添加监听
    addPendingContactInvite(invite) {
      const existingInvite = this.pendingContactInvites.find((item) => item.from === invite.from);
      if (!existingInvite) {
        this.pendingContactInvites = [...this.pendingContactInvites, invite];
      }
    },
    // 添加好友
    async addContactFrom(userID, message) {
      try {
        await EaseIM_index.EMClient.addContact(userID, message);
        console.log(">>>>好友请求已发送");
      } catch (error) {
        console.log(">>>>添加好友失败", error);
      }
    },
    // 接受好友请求
    async acceptContactInviteFrom(userID) {
      try {
        await EaseIM_index.EMClient.acceptContactInvite(userID);
        console.log(">>>>好友请求已接受");
        this.fetchAllContactsListFromServer();
      } catch (error) {
        console.log(">>>>接受好友请求失败", error);
      }
    },
    // 拒绝好友请求
    async declineContactInviteFrom(userID) {
      try {
        await EaseIM_index.EMClient.declineContactInvite(userID);
        console.log(">>>>好友请求已拒绝");
      } catch (error) {
        console.log(">>>>拒绝好友请求失败", error);
      }
    },
    // 获取用户属性
    async fetchUserInfoFromServer(userID) {
      try {
        const res = await EaseIM_index.EMClient.fetchUserInfoById(userID);
        console.log(">>>>获取用户属性成功", res);
      } catch (error) {
        console.log(">>>>获取用户属性失败", error);
      }
    }
  }
});
exports.useContactsStore = useContactsStore;
