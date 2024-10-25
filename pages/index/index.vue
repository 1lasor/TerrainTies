<template>
	<page class="content">
		<image class="logo" src="/static/TerrainTies_Logo.png"></image>
		<view class="text-area">
			<text class="title">{{ title }}</text>
		</view>
		<view class="input-area">
			<input class="input" type="text" placeholder="请输入用户名" v-model="username" />
			<input class="input" type="password" placeholder="请输入密码" v-model="password" />
		</view>
		<view>
			<button class= "login-button" @click="loginIM">登录</button>
		</view>
		<view class="register-link">
			<text @click="navigateToRegister">没有账号？立即注册</text>
		</view>
	</page>
</template>

<script setup>
import { ref } from 'vue';
import { EMClient } from '@/EaseIM';
import { useCurrentState } from '../stores/state';

const CurrentState = useCurrentState();

const title = ref('TerrainTies');
const username = ref('');
const password = ref('');

const loginIM = () => {
	// 登录环信IM
	EMClient.open({
		user: username.value,
		pwd: password.value,
	})
		.then(() => {
			console.log(">>>>>login success");
			CurrentState.initialState(username.value);
			uni.navigateTo({
				url: '/pages/social_map/index'
			});
			console.log(">>>>>page changed");
		})
		.catch((reason) => {
			console.log(">>>>>login fail", reason);
		});
};

const navigateToRegister = () => {
	// 跳转到注册页面
	uni.navigateTo({
		url: '/pages/index/register'
	});
};
</script>

<style>
.login-button{
	color: #f0d7d3;
	background-color: #3c5978;
	margin-top: 100px;
}
.content {
	width: 100%;
	height: max-content;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.logo {
	height: 200rpx;
	width: 200rpx;
	margin-top: 200rpx;
	margin-bottom: 20rpx;
}

.text-area {
	display: flex;
	justify-content: center;
}

.title {
	font-size: 36rpx;
	color: #8f8f94;
}

.input-area {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 20rpx;
	margin-top: 70rpx;
}

.input {
	width: 80%;
	height: 80rpx;
	border: 1px solid #ccc;
	border-radius: 10rpx;
	padding: 0 20rpx;
	margin-bottom: 20rpx;
}

.register-link {
	margin-top: 20px;
}

.register-link text {
	color: #720081;
	text-decoration: underline;
}
</style>
