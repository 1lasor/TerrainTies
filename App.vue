<script>
import { EMClient } from "./EaseIM";
	export default {
		onLaunch: function() {
			console.log('App Launch')
			this.initIMListener()
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods:{
			//挂载事件监听
			initIMListener(){
				EMClient.addEventHandler("connect",{
					onConnected: () => {
						console.log("onConnected");
					},
					// 自 4.8.0 版本，`onDisconnected` 事件新增断开原因回调参数, 告知用户触发 `onDisconnected` 的原因。
					onDisconnected: () => {
						console.log("onDisconnected");
					},
					onTokenWillExpire: () => {
						console.log("onTokenWillExpire");
					},
					onTokenExpired: () => {
						console.log("onTokenExpired");
					},
				});
			}
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
