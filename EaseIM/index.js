//引入SDKim
import EasemobSDK from 'easemob-websdk/uniApp/Easemob-chat'

//引入config
import { APP_KEY,REST_URL,SOCKET_URL } from './config'

//初始化IM实例
const EMClient = new EasemobSDK.connection({
    appKey: APP_KEY,
    url: SOCKET_URL,
    apiUrl: REST_URL,
});

export{EMClient,EasemobSDK};