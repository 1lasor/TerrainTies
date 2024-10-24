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
                <text v-if="conversationItem.lastMessage.msg" class="conversation_main_name"
                    >{{'('+ conversationItem.lastMessage.msg +')'}}
                </text>
            </view>
        </view>
    </view>
</template>



<script setup>
import { computed } from 'vue';
import { useConversationStore } from '../stores/conversation';

const ConversationStore = useConversationStore();
console.log('ConversationStore',ConversationStore.conversationList);
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
.conversation_main_name, .conversation_main_msg {
    display: block; /* 使得每个 text 元素独占一行 */
    font-size: 20px;
}

.conversation_item {
    padding-bottom: 20rpx;
    font-size: 20px;
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