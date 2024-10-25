<template>
    <view>
        <button @click="onAddContact">添加好友</button>
        <view v-for="invite in pendingContactInvites" :key="invite.from">
            <text>来自 {{ invite.from }} 的好友请求: "{{ invite.status }}"</text>
            <button @click="() => acceptInvite(invite.from)">接受</button>
            <button @click="() => refuseInvite(invite.from)">拒绝</button>
        </view>
        <view
            class="conversation_item"
            v-for="contactItem in contactsList"
            :key="contactItem.userId"
            @click="navigateToChat(contactItem.userId)"
            @longpress="deleteContact(contactItem.userId)"
        >
            <view class="conversation_main">
                <text class="conversation_main_name">{{ contactItem.userId }}</text>
                <text>({{ getContactUserInfoMap(contactItem.userId) }})</text>
            </view>
        </view>
    </view>
</template>

<script setup>
import { computed,onMounted } from 'vue';
import { EMClient } from '../../EaseIM';
import { useContactsStore } from '../stores/contacts';

const ContactsStore = useContactsStore();
const contactsList = computed(() => ContactsStore.contactsList);

//获取用户属性
const getContactUserInfoMap = computed(() =>{
    return (userId) => {
        if(ContactsStore.contactUserInfoMap.has(userId)){
            const ext = JSON.parse(ContactsStore.contactUserInfoMap.get(userId)?.ext);
            return ext.state;
        }
    };
});

ContactsStore.fetchAllContactsListFromServer();
const contactsListId = [];
for (const contactId in ContactsStore.contactsList){
    contactsListId.push(ContactsStore.contactsList[contactId]['userId']);
    console.log("<<<<<",ContactsStore.contactsList[contactId]['userId'])
}

ContactsStore.fetchContactsUserInfoFromServer(contactsListId);

// 使用计算属性来获取 pendingContactInvites
const pendingContactInvites = computed(() => ContactsStore.pendingContactInvites);

// 调用添加好友的 action
const onAddContact = () => {
    uni.showModal({
        title: '请输入好友的 userID',
        content: '',
        editable: true, // 开启输入框
        placeholderText: '请输入 userID',
        success: function (res) {
            if (res.confirm) {
                // 用户点击了“添加好友”
                const userID = res.content; // 获取输入框中的内容
                addContact(userID);
            } else if (res.cancel) {
                console.log('用户点击取消');
            }
        }
    });
};

const addContact = (userID) =>{
    console.log('>>>>申请已发送');
    try {
        ContactsStore.addContactFrom(userID, '加个好友呗!');
    } catch (error) {
        console.log('>>>>好友申请发送失败',error);
    }
}

// 调用接受好友请求的 action
const acceptInvite = async (from) => {
    try {
        await ContactsStore.acceptContactInviteFrom(from);
        console.log('>>>>好友请求已接受');
        // 更新联系人列表
        ContactsStore.fetchAllContactsListFromServer();
        // 移除已接受的好友请求
        ContactsStore.$patch((state) => {
            const index = state.pendingContactInvites.findIndex(invite => invite.from === from);
            if (index !== -1) {
                state.pendingContactInvites.splice(index, 1);
            }
        });
    } catch (error) {
        console.log('>>>>接受好友请求失败', error);
    }
};


// 调用拒绝好友请求的 action
const refuseInvite = async (from) => {
    try {
        await ContactsStore.declineContactInviteFrom(from);
        console.log('>>>>好友请求已拒绝');
        // 更新联系人列表
        ContactsStore.fetchAllContactsListFromServer();
        // 移除已拒绝的好友请求
        ContactsStore.$patch((state) => {
            const index = state.pendingContactInvites.findIndex(invite => invite.from === from);
            if (index !== -1) {
                state.pendingContactInvites.splice(index, 1);
            }
        });
    } catch (error) {
        console.log('>>>>拒绝好友请求失败', error);
    }
};

// 调用删除好友
const deleteContact = (userID) =>{
    uni.showModal({
        title:'删除好友',
        content:'确定删除该好友吗？',
        success: function (res){
            if (res.confirm){
                console.log('用户点击确定');
                actionDeleteContact(userID);
            }else if(res.cancel){
                console.log('用户点击取消');
            }
        },
    });
};

const actionDeleteContact = async (userID) =>{
    try{
        await ContactsStore.deleteContactFrom(userID);
        console.log('>>>>>>删除成功');
    }catch(error){
        console.log('>>>>>>删除失败',error);
    }
};

const navigateToChat = (userId) => {
    try {
        uni.navigateTo({
            url: `/pages/chat/index?userId=${encodeURIComponent(userId)}`
        });
        console.log('>>>>跳转至会话界面');
    } catch (error) {
        console.log('>>>>跳转失败', error);
    }
};


</script>

<style>
.conversation_item {
    padding-bottom: 20rpx;
    font-size: 20px;
    /* 添加可见性样式，例如 */
    display: block; /* 或者 flex, grid 等 */
}

.conversation_main {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20rpx;
    background-color: #f8f8f8;
    border-bottom: 1px solid #eaeaea;
    border-radius: 10rpx;
    margin: 10rpx 0;
}

</style>
