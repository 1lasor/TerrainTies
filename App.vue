<script>
	import {
		EMClient
	} from "./EaseIM";
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
		methods: {
			//挂载事件监听
			initIMListener() {
				EMClient.addEventHandler("connect", {
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
				EMClient.addEventHandler("message", { // 当前用户收到文本消息。
					onTextMessage: function(message) {
						console.log('>>>>>',message)
					},
					// 当前用户收到图片消息。
					onImageMessage: function(message) {},
					// 当前用户收到透传消息。
					onCmdMessage: function(message) {},

				})
			}

		}
	}
</script>

<style>
	/*每个页面公共css */
</style>