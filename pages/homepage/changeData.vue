<template>
    <view class="content">
		<view class="input-area">
            <picker mode="selector" :range="avatarOptions" @change="onAvatarChange">
                <view class="picker">
                    <image class="avatar" :src="avatarurl || defaultAvatar" />
                </view>
            </picker>
			<picker mode="selector" :range="genderOptions" @change="onGenderChange">
                <view class="picker">{{ gender || '请选择性别' }}</view>
            </picker>
			<input class="input" type="text" placeholder="请输入手机号" v-model="phone" />
            <input class="input" type="text" placeholder="请输入生日" v-model="birth" />
		</view>
        <view>
			<button @click="changeUserData">确定</button>
		</view>
	</view>
</template>
    
<script setup>
import { EMClient } from '../../EaseIM';
import { ref } from 'vue';
import { useContactsStore } from '../stores/contacts';

const ContactStore = useContactsStore();

const defaultAvatar = '/static/pictures/avatar1.png'; // 默认头像路径

const avatarurl = ref(defaultAvatar);
const gender = ref('');
const phone = ref('');
const birth = ref('');


const avatarOptions = [
    '/static/pictures/avatar1.png',
    '/static/pictures/avatar2.png',
    // 更多头像URLs...
];

const onAvatarChange = (event) => {
    const selectedIndex = event.detail.value;
    avatarurl.value = avatarOptions[selectedIndex];
};

// 添加性别选项数组
const genderOptions = ['男', '女'];

const onGenderChange = (e) => {
    gender.value = genderOptions[e.detail.value];
};

const changeUserData = () =>{
    const actionModifyRemark = (content) => {
        console.log('>>>>执行设置');
        ContactStore.setLoginUserInfo(content);
    };

    const userInfo = {
        avatarurl: avatarurl.value,
        gender: gender.value,
        phone: phone.value,
        birth: birth.value,
    };

    uni.showModal({
        title:'是否确认更改？',
        content: '请确认是否更改您的信息。',
        success:function(res){
            if(res.confirm){
                actionModifyRemark(userInfo);
            }else if(res.cancel){
                console.log('用户点击取消');
            }
        },
    });
}

</script>
    
<style>
.avatar {
    width: 100%; /* 或者具体的宽度，根据需要调整 */
    height: 100%; /* 或者具体的高度，根据需要调整 */
    border-radius: 50%; /* 如果需要圆形头像 */
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%; /* 确保内容宽度充满容器 */
}

.input-area {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* 将输入区域的对齐方式改为左对齐 */
    margin-bottom: 20rpx;
}

.input{
    width: 80%;
    height: 80rpx;
    border: 1px solid #ccc;
    border-radius: 10rpx;
    padding: 0 20rpx;
    margin-bottom: 20rpx;
    box-sizing: border-box; /* 确保边框和内边距包含在宽度内 */
}
.picker {
    width: 100%;
    height: 80rpx;
    border: 1px solid #ccc;
    border-radius: 10rpx;
    padding: 0 20rpx;
    margin-bottom: 20rpx;
    box-sizing: border-box; /* 确保边框和内边距包含在宽度内 */
}

.picker {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f8f8f8;
    border: 1px solid #ddd;
    border-radius: 4px;
}

/* 当有值时隐藏提示文字 */
.picker:not([data-placeholder='']):not(:empty)::after {
    content: none;
}
</style>
    