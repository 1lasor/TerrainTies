<template>
  <view class="message-container">
    <view v-for="(message, index) in messageList" :key="index" class="message-item" :class="{ 'self': isSelf(message.to) }">
      <p v-if="message.type==='txt'" class="message-content">{{ message.msg }}</p>
      <img v-if="message.type==='img'" :src="message.url" class="message-image" />
    </view>
  </view>
</template>

<script setup lang="ts">
import { EMClient } from '../../EaseIM';
import { defineProps } from 'vue';

const props = defineProps({
  messageList: {
    type: Array,
    default: () => []
  }
});

const isSelf = (to) => EMClient.user === to || to === "";
</script>

<style lang="scss" scoped>
.message-container {
  display: flex;
  flex-direction: column;
  padding: 10px;
  .message-item {
    display: flex;
    margin-bottom: 10px;
    &.self {
      justify-content: flex-end; // 修改消息对齐方式
    }
    .message-content {
      max-width: 70%;
      background-color: #f3f3f3;
      padding: 8px;
      border-radius: 5px;
      word-wrap: break-word;
    }
    .message-image {
      max-width: 45%; // 设置图片最大宽度为100%以适应容器宽度s
      height: auto; // 高度自适应，保持图片比例
      border-radius: 5px;
    }
  }
}
</style>
