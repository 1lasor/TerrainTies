import { defineStore } from 'pinia'
import { EMClient,EasemobSDK } from '../../EaseIM'

export const useConversationStore = defineStore('conversationStore',{
    state: () => {
        return {
            conversationList: [],
            cursor: '',
        };
    },
    actions: {
        //获取会话列表
        async fetchConversationListFromServer(){
            try{
                const { data } = await EMClient.getServerConversations({
                    pageSize:100,
                    cursor:'',
                });
                console.log('>>>>',data);
                if(data?.conversations?.length>=0){
                    this.$state.conversationList = data.conversations;
                }
                if(data?.cursor){
                    this.$state.cursor = data.cursor;
                }
                console.log('>>>>会话列表获取成功');
            }catch(error){
                console.log('>>>>会话列表获取失败',error);
            }
        },
        //清除会话未读数
        async clearConversationUnReadCount(parmas){
            const { conversationType,conversationId } = parmas;
            try {
                let option = {
                    chatType: conversationType, // 会话类型，设置为单聊。
                    type: "channel", // 消息类型。
                    to: conversationId, // 接收消息对象的用户 ID。
                };
                let msg = EasemobSDK.message.create(option);
                await EMClient.send(msg);
                this.$state.conversationList.map((conversationItem)=>{
                    if(conversationItem.conversationId === conversationId){
                        return conversationItem.unReadCount = 0;
                    }
                })
            } catch (error) {
                console.log('>>>>发送回执失败',error);
            }
        },
        //删除会话
        async deleteConversationFromServer(parmas){
            const { conversationId,conversationType} = parmas;
            try{
                let options = {
                    // 会话 ID：单聊为对方的用户 ID，群聊为群组 ID。
                    channel: conversationId,
                    // 会话类型：（默认） `singleChat`：单聊；`groupChat`：群聊。
                    chatType: conversationType,
                    // 删除会话时是否同时删除服务端漫游消息。
                    deleteRoam: false,
                }
                await EMClient.deleteConversation(options);
                this.$state.conversationList = this.$state.conversationList.filter(
                    (item) => item.conversationId !==conversationId
                );
            }catch(error){
                console.log('>>>>会话删除失败',error);
            }
        },
        //置顶或取消置顶会话
        async handlePinConversation(parmas){
            const { conversationId,conversationType,isPinned } = parmas;
            console.log('>>>>操作置顶触发');
            try {
                await EMClient.pinConversation({
                    conversationId,
                    conversationType,
                    isPinned:!isPinned,
                });
                this.$state.conversationList.map((conversationItem) =>{
                    if(conversationItem.conversationId === conversationId){
                        return (conversationItem.isPinned = !isPinned);
                    }
                });
            } catch (error) {
                console.log('>>>>会话置顶失败',error);
            }
        },
    },
});