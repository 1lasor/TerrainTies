<template>
    <view>
        <button @click="setUserInfoData">设置用户属性</button>
    </view>
    <view class="user_info">
        <image class="avatar" :src="useAvatarurl"></image>
        <text class="text_line">\n{{'性别：' + userGender }}\n</text>
        <text class="text_line">{{'手机号：' + userPhone }}\n</text>
        <text class="text_line">{{'生日：' + userBirth }}\n</text>
        <text class="text_line">{{'位置：纬度：' + userLatitude }}\n</text>
        <text class="text_line">{{'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;经度：' + userLongitude }}\n</text>
        <view class="centered-view">
            <text class="state_text">{{ '当前用户状态：' }}</text>
            <picker mode="selector" :range="stateOptions" @change="onStateChange">
                <view class="picker">{{ state }}</view>
            </picker>
        </view>
    </view>
</template>

<script setup>
import { EMClient } from '../../EaseIM';
import { useContactsStore } from '../stores/contacts';
import { ref,onMounted } from 'vue';

const ContactStore = useContactsStore();

const useAvatarurl = ref('');
const userGender = ref('');
const userPhone = ref('');
const userBirth = ref('');
const userLatitude = ref('');
const userLongitude = ref('');
const state = ref('');

const setUserInfoData = () =>{
    uni.navigateTo({
        url: '/pages/homepage/changeData'
    });
}

const updateUserInfo = async () => {
    const result = await getUserInfoDetails();
    useAvatarurl.value = result.data[EMClient.user].avatarurl;
    console.log(useAvatarurl.value);
    userGender.value = result.data[EMClient.user].gender;
    userPhone.value = result.data[EMClient.user].phone;
    userBirth.value = result.data[EMClient.user].birth;
    const ext = JSON.parse(result.data[EMClient.user].ext);
    userLatitude.value = ext.latitude;
    userLongitude.value = ext.longitude;
    state.value = ext.state;
};

onMounted(() => {
    updateUserInfo();
});

const getUserInfoDetails = async ()=>{
    const currentUser = EMClient.user;
    const res = await EMClient.fetchUserInfoById(currentUser);
    return res;
}

const stateOptions = ['在线', '隐身'];

const onStateChange = async (e) => {
    const newState = stateOptions[e.detail.value];
    state.value = newState;
    const currentUser = EMClient.user;
    const res = await EMClient.fetchUserInfoById(currentUser);
    // 解析扩展信息
    const ext = JSON.parse(res.data[currentUser].ext);
    // 更新用户状态到用户属性中
    try {
        let option = {
            ext: JSON.stringify({
                ...ext,
                state: newState,
            }),
        };
        await EMClient.updateUserInfo(option);
        console.log('用户状态更新成功:', newState);
    } catch (err) {
        console.error('用户状态更新失败:', err);
    }
};
</script>




<style>
.text_line{
}
.avatar {
    margin-left: 73px;
    width: 400rpx; /* 或者具体的宽度，根据需要调整 */
    height: 400rpx; /* 或者具体的高度，根据需要调整 */
    border-radius: 50%; /* 如果需要圆形头像 */
	border-style: dotted;
	border-width: 5px;
	border-color: darkorange;
}

.state_text {
    /* 设置字体大小 */
    font-size: 16px;
    /* 设置文本颜色 */
    color: #333;
    /* 设置行高 */
    line-height: 1.5;
    /* 设置边距 */
    margin-right: 10px; /* 调整右边距，以便和picker组件有间隔 */
    /* 设置对齐方式 */
    align-self: center; /* 确保垂直居中对齐 */
    margin-left: 75px;
}

.user_info {
    /* 设置字体大小 */
    font-size: 16px;
	font-weight: 100;
    /* 设置文本颜色 */
    color: #ffffff;
    /* 设置行高 */
    line-height: 1.5;
    /* 设置边距 */
    margin: 10px;
    /* 设置对齐方式 */
    text-align: left;
    /* 设置边框 */
    border: 1px solid #ccc;
    /* 设置内边距 */
    padding: 10px;
    /* 设置背景颜色 */
    background-color: #ffaa7f;
    /* 设置圆角 */
    border-radius: 5px;
    /* 保留空白符和换行符 */
    white-space: pre-wrap;
    margin-top: 50rpx;
}

.centered-view {
    display: flex;
    flex-direction: row; /* 水平排列子元素 */
    justify-content: flex-start; /* 或者 center，根据你的布局需求 */
    align-items: center; /* 垂直居中对齐子元素 */
    margin-top: 200rpx;
    height: auto;
	border-style: dashed;
}

.picker {
    /* 设置字体大小、颜色、行高等与 state_text 一致 */
    font-size: 16px;
    color: #333;
    line-height: 1.5;
    /* 设置边距 */
    margin-left: 10px; /* 调整左边距，以便和state_text有间隔 */
    text-align: left;
    width: 100%;
    height: 100rpx;
    border: 1px solid #ccc;
    border-radius: 10rpx;
    padding: 0 20rpx;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ffdd1a;
    border: 1px solid #ddd;
    border-radius: 4px;
}

/* 当有值时隐藏提示文字 */
.picker:not([data-placeholder='']):not(:empty)::after {
    content: none;
}
</style>
  