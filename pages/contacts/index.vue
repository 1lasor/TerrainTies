<template>
    <view>
        <view
            class="conversation_item"
            v-for="contactItem in contactsList"
            :key="contactItem.userID"
            @longpress="deleteContact(contactItem.userID)"
        >
            <view class="avatar" @click="modifyContactRemark"></view>
            <view class="conversation_main">
                <text class="conversation_main_name">{{ contactItem.userID }}</text>
                <text v-if="contactItem.remark" class="conversation_main_name">{{ '(' + contactItem.remark + ')' }}</text>
            </view>
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
ContactsStore.addContact('userId', '加个好友呗!');

// 调用接受好友请求的 action
ContactsStore.acceptContactInvite('userId');

// 调用拒绝好友请求的 action
ContactsStore.declineContactInvite('userId');

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
