<script>
	import { EMClient } from "./EaseIM";
	import { useContactsStore } from "./pages/stores/contacts";

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
				EMClient.addEventHandler("message", { 
					// 当前用户收到文本消息。
					onTextMessage: (message) => {
						console.log('>>>>', message);
						// 广播全局事件，附带消息数据
						uni.$emit('onTextMessage', message);
					},
					// 当前用户收到图片消息。
					onImageMessage: function (message) {},
					// 当前用户收到透传消息。
					onCmdMessage: function (message) {},
					// // 当前用户收到语音消息。
					// onAudioMessage: function (message) {},
					// // 当前用户收到位置消息。
					// onLocationMessage: function (message) {},
					// // 当前用户收到文件消息。
					// onFileMessage: function (message) {},
					// 当前用户收到自定义消息。
					onCustomMessage: function (message) {},
					// // 当前用户收到视频消息。
					// onVideoMessage: function (message) {},
				});
				EMClient.addEventHandler("contacts", {
					// 当前用户收到好友请求。用户 B 向用户 A 发送好友请求，用户 A 收到该事件。
					onContactInvited: function (msg) {
						console.log('>>>>收到添加好友请求', msg);
                    	const ContactsStore = useContactsStore();
                    	// 将好友请求添加到状态管理中的数组
                    	ContactsStore.addPendingContactInvite(msg);
					},
					// 当前用户被其他用户从联系人列表上移除。用户 B 将用户 A 从联系人列表上删除，用户 A 收到该事件。
					onContactDeleted: function (msg) {},
					// 当前用户新增了联系人。用户 B 向用户 A 发送好友请求，用户 A 同意该请求，用户 A 收到该事件，而用户 B 收到 `onContactAgreed` 事件。
					onContactAdded: function (msg) {},
					// 当前用户发送的好友请求被拒绝。用户 A 向用户 B 发送好友请求，用户 B 收到好友请求后，拒绝加好友，则用户 A 收到该事件。
					onContactRefuse: function (msg) {},
					// 当前用户发送的好友请求经过了对方同意。用户 A 向用户 B 发送好友请求，用户 B 收到好友请求后，同意加好友，则用户 A 收到该事件。
					onContactAgreed: function (msg) {},
				});
			}

		}
	}
</script>

<style>/*每个页面公共css */
uni-page-wrapper {
  background-image: url('../static/login_background.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>