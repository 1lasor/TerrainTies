<template>
<view>
        <button @click="setUserInfoData">设置用户属性</button>
    </view>
    <view>
        <button @click="getUserInfoDetails">获取指定用户属性</button>
    </view>
</template>

<script setup>
import { EMClient } from '../../EaseIM';
import { useContactsStore } from '../stores/contacts';

const setUserInfoData = () =>{
    const actionModifyRemark = (content) => {
        console.log('>>>>执行设置');
    };
    uni.showModal({
        title:'设置用户属性',
        editable:true,
        success:function(res){
            if(res.confirm){
                const { content } = res;
                actionModifyRemark(content);
            }else if(res.cancel){
                console.log('用户点击取消');
            }
        },
    });
}

const ContactStore = useContactsStore();
const getUserInfoDetails = () =>{
    const loginUserId = EMClient.user;
    ContactStore.fetchUserInfoFromServer(loginUserId);
    console.log('>>>>userID',loginUserId);
};


</script>




<style>
/* 样式可以根据需要添加 */
</style>
  