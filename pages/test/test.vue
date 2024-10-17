<template>
  <view class="container">
    <text class="title">欢迎来到首页</text>
    <!-- 其他内容可以在这里添加 -->
  </view>
</template>

<script>
export default {
  name: 'Index', // 页面名称
  data() {
    return {
      // 数据定义
    };
  },
  methods: {
    // 方法定义
  },
  onShow() {
    // 页面显示时执行的钩子函数
  },
  onHide() {
    // 页面隐藏时执行的钩子函数
  }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* 使内容垂直居中 */
}

.title {
  font-size: 20px;
  font-weight: bold;
}
</style>
