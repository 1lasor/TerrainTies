<template>
    <view>
        <button @click="onAddContact">添加好友</button>
        <view
            class="conversation_item"
            v-for="contactItem in contactsList"
            :key="contactItem.userID"
            @longpress="deleteContact(contactItem.userID)"
        >
        </view>
    </view>
</template>

<script setup>
import { computed } from 'vue';
import { useContactsStore } from '../stores/contacts';

const ContactsStore = useContactsStore();

// 使用计算属性来获取 contactsList
const contactsList = computed(() => ContactsStore.contactsList);

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
    const actionAddContact = (userID) =>{
        console.log('>>>>申请已发送');
        try {
            ContactsStore.addContactFrom('userId', '加个好友呗!');
        } catch (error) {
            console.log('>>>>好友申请发送失败',error);
        }
    }
}

// // 调用接受好友请求的 action
// ContactsStore.acceptContactInviteFrom('userId');

// // 调用拒绝好友请求的 action
// ContactsStore.declineContactInviteFrom('userId');

// 调用删除好友
const deleteContact = (userID) =>{
    const actionDeleteContact = (userID) =>{
        console.log('>>>>删除成功')
        try{
            ContactsStore.deleteContactFrom(userID);
        }catch(error){
            console.log('>>>>删除失败',error);
        }
    };
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

</script>

<style>
.conversation_item {
    padding-bottom: 20rpx;
    font-size: 20px;
}
</style>
