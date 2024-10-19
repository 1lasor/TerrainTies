<template>
  <div class="app-container">
    <!-- 地图组件 -->
    <MapComponent class="map-container" />

    <!-- 底部导航栏 ,在这里配置按钮导向的页面，记得在pages.json先注册页面-->
    <nav class="bottom-nav">
      <button @click="navigateTo('/pages/chat/index')">好友列表</button>
      <button @click="navigateTo('/pages/chat/index')">附近的人</button>
      <button @click="navigateTo('/pages/contacts/index')">消息列表</button>
      <button @click="navigateTo('/pages/chat/index')">我的主页</button>
    </nav>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
//import MapComponent from './components/MapComponent.vue'; // 假设这是地图组件的路径

export default defineComponent({
  name: 'HomePage',
  components: {
    //MapComponent
  },
  methods: {
    navigateTo(page) {
      // 这里可以根据你的路由配置来编写跳转逻辑
      // 例如使用 Vue Router:
      uni.navigateTo({
      	url:page
      })
      console.log(`Navigate to ${page}`);
    }
  }
});
</script>

<style>
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.map-container {
  flex: 1; /* 使地图组件填满除了底部导航栏之外的空间 */
}

.bottom-nav {
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background-color: #f8f8f8;
}

.bottom-nav button {
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
}
</style>
