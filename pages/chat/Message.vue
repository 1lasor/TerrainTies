<template>
  <view class="message-container">
    <!-- 消息列表，从父组件接收消息数组 -->
    <view v-for="(message, index) in messageList" :key="index" class="message-item" :style="{ justifyContent: isSelf ? 'left' : 'right' }">
      <!-- 消息内容，这里简化处理，实际可能需要更复杂的结构 -->
      <text class="message-content">{{ message.msg}}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { EMClient } from '../../EaseIM';
import { defineProps } from 'vue';
// 定义props，接收从父组件传递过来的消息列表
const props = defineProps({
  messageList: {
    type: Array,
    default: () => []
  }
});

const isSelf =
  EMClient.user === props.msg.from || props.msg.from === "";//有问题


</script>

<style lang="scss" scoped>
.message-container {
  display: flex;
  flex-direction: column;
  padding: 10px;
  .message-item {
    display: flex; // 使用flex布局来排列消息
    margin-bottom: 10px;
    .message-content {
      max-width: 70%;
      background-color: #f3f3f3;
      padding: 8px;
      border-radius: 5px;
      word-wrap: break-word; // 确保长文本可以换行
    }
  }
}
</style>

