<template>
  <view class="chat-container">
	  <Message :messageList="messageList"/>
	  <InputBar :targetId="userId" @appendMessage="appendMessage"/>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted,onUnmounted } from "vue";
import { EMClient } from "@/EaseIM";
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
onMounted(() => {
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
