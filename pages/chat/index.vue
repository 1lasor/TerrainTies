<template>
  <view class="chat-container">
	  <Message :messageList="messageList"/>
	  <InputBar @appendMessage="appendMessage"/>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { EMClient } from "@/EaseIM";
import Message from "./Message.vue";
import InputBar from "./inputBar.vue";

const messageList = ref([])
const appendMessage = (message) =>{
	messageList.value.push(message)
}
const msgListRef = ref(null);
const conversationId = ref("");
const isShowToolbar = ref(false);

</script>

<style lang="scss" scoped>
@import url("./style.scss");
</style>
