<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{ title }}</text>
		</view>
		<view>
			<button @click="loginIM">登录环信IM</button>
		</view>
	</view>
</template>

<script setup>
import { EMClient } from '@/EaseIM'
const loginIM = () => {
	//登录环信IM
	EMClient.open({
		user: "hfp",
		pwd: "1",
	})
		.then(() => {
			console.log("login success");
			uni.navigateTo({
				url: '/pages/chat/index'
			})
			console.log("page changed");
		})
		.catch((reason) => {
			console.log("login fail", reason);
		});
}
</script>

<style>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.logo {
	height: 200rpx;
	width: 200rpx;
	margin-top: 200rpx;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 50rpx;
}

.text-area {
	display: flex;
	justify-content: center;
}

.title {
	font-size: 36rpx;
	color: #8f8f94;
}
</style>
