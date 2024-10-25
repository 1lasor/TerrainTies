import { EMClient } from "../../EaseIM";
import { defineStore } from 'pinia'

export const useCurrentState = defineStore('stateStore',{
    state: () =>{
        return {
            currentState:[]
        };
    },
    actions:{
        // 初始化用户状态
        async initialState(userId){
            const res = await EMClient.fetchUserInfoById(userId);
            // 解析扩展信息
            const ext = JSON.parse(res.data[userId].ext);
            if(ext.state === undefined){
                try {
                    let option = {
                        ext: JSON.stringify({
                            ...ext,
                            state: '在线',
                        }),
                    };
                    await EMClient.updateUserInfo(option);
                    console.log('用户状态初始化成功:在线');
                } catch (err) {
                    console.error('用户状态初始化失败:', err);
                }
            }
        }
    },
});