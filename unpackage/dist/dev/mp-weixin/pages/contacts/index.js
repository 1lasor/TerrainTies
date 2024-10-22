"use strict";
const common_vendor = require("../../common/vendor.js");
const pages_stores_contacts = require("../stores/contacts.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const ContactsStore = pages_stores_contacts.useContactsStore();
    ContactsStore.fetchAllContactsListFromServer();
    const contactsList = common_vendor.computed(() => ContactsStore.contactsList);
    const pendingContactInvites = common_vendor.computed(() => ContactsStore.pendingContactInvites);
    const onAddContact = () => {
      common_vendor.index.showModal({
        title: "请输入好友的 userID",
        content: "",
        editable: true,
        // 开启输入框
        placeholderText: "请输入 userID",
        success: function(res) {
          if (res.confirm) {
            const userID = res.content;
            addContact(userID);
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        }
      });
    };
    const addContact = (userID) => {
      console.log(">>>>申请已发送");
      try {
        ContactsStore.addContactFrom(userID, "加个好友呗!");
      } catch (error) {
        console.log(">>>>好友申请发送失败", error);
      }
    };
    const acceptInvite = async (from) => {
      try {
        await ContactsStore.acceptContactInviteFrom(from);
        console.log(">>>>好友请求已接受");
        ContactsStore.fetchAllContactsListFromServer();
        ContactsStore.$patch((state) => {
          const index = state.pendingContactInvites.findIndex((invite) => invite.from === from);
          if (index !== -1) {
            state.pendingContactInvites.splice(index, 1);
          }
        });
      } catch (error) {
        console.log(">>>>接受好友请求失败", error);
      }
    };
    const refuseInvite = async (from) => {
      try {
        await ContactsStore.declineContactInviteFrom(from);
        console.log(">>>>好友请求已拒绝");
        ContactsStore.fetchAllContactsListFromServer();
        ContactsStore.$patch((state) => {
          const index = state.pendingContactInvites.findIndex((invite) => invite.from === from);
          if (index !== -1) {
            state.pendingContactInvites.splice(index, 1);
          }
        });
      } catch (error) {
        console.log(">>>>拒绝好友请求失败", error);
      }
    };
    const deleteContact = (userID) => {
      const actionDeleteContact = (userID2) => {
        console.log(">>>>删除成功");
        try {
          ContactsStore.deleteContactFrom(userID2);
        } catch (error) {
          console.log(">>>>删除失败", error);
        }
      };
      common_vendor.index.showModal({
        title: "删除好友",
        content: "确定删除该好友吗？",
        success: function(res) {
          if (res.confirm) {
            console.log("用户点击确定");
            actionDeleteContact(userID);
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(onAddContact),
        b: common_vendor.f(contactsList.value, (contactItem, k0, i0) => {
          return common_vendor.e({
            a: common_vendor.t(contactItem.userId),
            b: _ctx.remark
          }, _ctx.remark ? {
            c: common_vendor.t("(" + contactItem.remark + ")")
          } : {}, {
            d: common_vendor.f(pendingContactInvites.value, (invite, k1, i1) => {
              return {
                a: common_vendor.t(invite.from),
                b: common_vendor.t(invite.status),
                c: common_vendor.o(() => acceptInvite(invite.from), invite.from),
                d: common_vendor.o(() => refuseInvite(invite.from), invite.from),
                e: invite.from
              };
            }),
            e: contactItem.userID,
            f: common_vendor.o(($event) => deleteContact(contactItem.userID), contactItem.userID)
          });
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
