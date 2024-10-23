<template>
    <view>
        <view
            class="conversation_item"
            v-for="conversationItem in conversationList"
            :key="conversationItem.conversationId"
            @longpress="callConversationActionSheet(conversationItem)"
            @click="clearConversationUnReadCount(conversationItem)"
        >
            <view class="conversation_main">
                <text class="conversation_main_name">{{ conversationItem.conversationId }}</text>
                <text v-if="conversationItem.lastMessage" class="conversation_main_name"
                    >{{'('+ conversationItem.lastMessage +')'}}
                </text>
            </view>
        </view>
    </view>
</template>



<script setup>
import { computed } from 'vue';
import { useConversationStore } from '../stores/conversation';
import { useContactsStore } from '../stores/contacts';

const ConversationStore = useConversationStore();
const ContactsStore = useContactsStore();
console.log('ConversationStore',ConversationStore.conversationList);
const contactsList = computed(() => ContactsStore.contactsList);
const conversationList = computed(() => ConversationStore.conversationList);
ConversationStore.fetchConversationListFromServer();

//清除未读消息
const clearConversationUnReadCount = (conversationItem)=>{
    try {
        uni.navigateTo({
            url: `/pages/chat/index?userId=${encodeURIComponent(conversationItem.conversationId)}`
        });
        console.log('>>>>跳转至会话界面');
    } catch (error) {
        console.log('>>>>跳转失败', error);
    }
    if(conversationItem.unReadCount>0){
        ConversationStore.clearConversationUnReadCount({
            conversationId: conversationItem.conversationId,
            conversationType: conversationItem.conversationType,
        })
    }
}

//删除会话
const deleteConversation = (conversationItem) =>{
    ConversationStore.deleteConversationFromServer({
        conversationId: conversationItem.conversationId,
        conversationType: conversationItem.conversationType,
    });
}
//调起会话操作
const callConversationActionSheet = (conversationItem) =>{
    console.log('conversationItem',conversationItem);
    const { isPinned } = conversationItem;
    let itemList = ['删除会话'];
    if(isPinned){
        itemList = ['取消置顶',...itemList];
    }else{
        itemList = ['置顶会话',...itemList];
    }
    uni.showActionSheet({
        itemList:itemList,
        success:function(res){
            console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
            switch(res.tapIndex){
                case 0:
                    {
                        ConversationStore.handlePinConversation({
                            conversationId:conversationItem.conversationId,
                            conversationType:conversationItem.conversationType,
                            isPinned,
                        })
                    }
                    break;
                case 1:
                    {
                        deleteConversation(conversationItem);
                    }
                    break;
                default:
                    break;
            }
        },
        fail:function(res){
            console.log(res.errMsg);
        }
    });
}
</script>



<style>
.conversation_item {
    padding-bottom: 20rpx;
    font-size: 20px;
}
</style>