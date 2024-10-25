<template>
    <view>
        <button @click="setUserInfoData">设置用户属性</button>
    </view>
    <view>
        <button @click="getUserInfoDetails">获取指定用户属性</button>
    </view>
    <view class="centered-view">
        <picker mode="selector" :range="stateOptions" @change="onStateChange">
            <view class="picker">{{ state }}</view>
        </picker>
    </view>
</template>

<script setup>
import { EMClient } from '../../EaseIM';
import { useContactsStore } from '../stores/contacts';
import { ref,onMounted } from 'vue';

const ContactStore = useContactsStore();

const setUserInfoData = () =>{
    uni.navigateTo({
        url: '/pages/homepage/changeData'
    });
}

const getUserInfoDetails = () =>{
    const loginUserId = EMClient.user;
    ContactStore.fetchUserInfoFromServer(loginUserId);
    console.log('>>>>userID',loginUserId);
};

const state = ref('');

onMounted(async () => {
  state.value = await currentState();
});

const currentState = async ()=>{
    const currentUser = EMClient.user;
    const res = await EMClient.fetchUserInfoById(currentUser);
    // 解析扩展信息
    const ext = JSON.parse(res.data[currentUser].ext);
    return ext.state;
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
.centered-view {
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center;     /* 垂直居中 */
    height: 100vh;           /* 使视图高度等于视口高度 */
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
  