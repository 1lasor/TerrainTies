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
import { ref } from 'vue';

const ContactStore = useContactsStore();

const setUserInfoData = () =>{
    uni.navigateTo({
        url: '/pages/homepage/changeData'
    });
    // const actionModifyRemark = (content) => {
    //     console.log('>>>>执行设置');
    //     ContactStore.setLoginUserInfo(content);
    // };
    // uni.showModal({
    //     title:'设置用户属性',
    //     editable:true,
    //     success:function(res){
    //         if(res.confirm){
    //             const { content } = res;
    //             actionModifyRemark(content);
    //         }else if(res.cancel){
    //             console.log('用户点击取消');
    //         }
    //     },
    // });
}

const getUserInfoDetails = () =>{
    const loginUserId = EMClient.user;
    ContactStore.fetchUserInfoFromServer(loginUserId);
    console.log('>>>>userID',loginUserId);
};

const state = ref('在线');

const stateOptions = ['在线', '隐身'];

const onStateChange = (e) => {
    state.value = stateOptions[e.detail.value];
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
  