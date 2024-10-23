<template>
  <view class="chat-container">
	  <Message :messageList="messageList"/>
	  <InputBar :targetId="userId" @appendMessage="appendMessage"/>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { EMClient,EasemobSDK } from "@/EaseIM";
import Message from "./Message.vue";
import InputBar from "./inputBar.vue";

const props = defineProps({
	userId: {
		type: String,
		default:'',
		required: true
	}
});

const messageList = ref([])
const appendMessage = (message) =>{
	messageList.value.push(message)
}

const getHistoryMessage = () => {
	let options = {
		// 对方的用户 ID 或者群组 ID 或聊天室 ID。
		targetId: props.userId,
		// 每页期望获取的消息条数。取值范围为 [1,50]，默认值为 20。
		pageSize: 20,
		// 查询的起始消息 ID。若该参数设置为 `-1`、`null` 或空字符串，从最新消息开始。
		cursor: -1,
		// 会话类型：（默认） `singleChat`：单聊；`groupChat`：群聊；`chatRoom`：聊天室
		chatType: "singleChat",
		// 消息搜索方向：（默认）`up`：按服务器收到消息的时间的逆序获取；`down`：按服务器收到消息的时间的正序获取。
		searchDirection: "up",
	};
	EMClient.getHistoryMessages(options)
	.then((res) => {
		// 成功获取历史消息。
		messageList.value = res.messages.reverse().concat(messageList.value);
	})
	.catch((e) => {
		// 获取失败。
		console.log('>>>>获取失败',e);
	});
}

onMounted(() => {
	getHistoryMessage();
	// 监听全局事件
	uni.$on('onTextMessage', (message) => {
		appendMessage(message);
	});
});

const msgListRef = ref(null);
const conversationId = ref("");
const isShowToolbar = ref(false);

</script>

<style lang="scss" scoped>
@import url("./style.scss");
</style>
