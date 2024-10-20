<template>
	<view class="content">
		<image class="logo" src="/static/TerrainTies_Logo.png"></image>
		<view class="text-area">
			<text class="title">{{ title }}</text>
		</view>
		<view class="input-area">
			<input class="input" type="text" placeholder="请输入用户名" v-model="username" />
			<input class="input" type="password" placeholder="请输入密码" v-model="password" />
			<input class="input" type="password" placeholder="请确认密码" v-model="confirmPassword" />
		</view>
		<view>
			<button @click="registerIM">注册</button>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { EMClient } from '@/EaseIM';

const title = ref('TerrainTies');
const username = ref('');
const password = ref('');
const confirmPassword = ref('');

const registerIM = () => {
	if(password.value===confirmPassword.value){
		// 注册环信
		EMClient
		  .registerUser({
		    /** 用户 ID。 */
		    username: username.value,
		    /** 密码。 */
		    password: password.value
		  })
		  .then((res) => {
		    console.log(">>>>>注册成功",res);
			uni.showToast({
				title: '注册成功',
				icon: 'none'
			});
			uni.navigateBack()
		  });
	}
	else{
		uni.showToast({
			title: '两次密码输入不一致',
			icon: 'none'
		});
	}
};
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

.input-area {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 20rpx;
}

.input {
	width: 80%;
	height: 80rpx;
	border: 1px solid #ccc;
	border-radius: 10rpx;
	padding: 0 20rpx;
	margin-bottom: 20rpx;
}
</style>
