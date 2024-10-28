<template>
    <view>
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
.content{
	background-color: aliceblue;
}
.login-button{
	color: #f0d7d3;
	background-color: #3c5978;
	margin-top: 100px;
}
.conversation_item {
    padding-bottom: 0rpx;
    font-size: 20px;
    /* 添加可见性样式，例如 */
    display: block; /* 或者 flex, grid 等 */
	background-color: #f0d7d3;
	border-style: groove;
}

.conversation_main {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20rpx;
    border-radius: 10rpx;
	border-width: 12;
    margin: 10rpx 0;
}
</style>
