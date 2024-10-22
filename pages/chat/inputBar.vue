<template>
	    <view class="input_bar_container">
		        <view class="input_more_func">
			            <view class="more_func_button" @click="chooseImage">上传图片</view>
			    </view>
		        <input v-model="msgContent" class="message_input" type="text" cursor-spacing="20" placeholder="..."
			conformtype="send" @confirm="sendTextMessage">
		    </view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import {
		EMClient,
		EasemobSDK
	} from '@/EaseIM';
	const emits = defineEmits(['appendMessage'])
	const targetId = 'test1'
	let msgContent = ref('')
	//发送文本消息
	const sendTextMessage = (message) => {
		let option = {
			// 消息类型。
			type: "txt",
			// 消息内容。
			msg: msgContent.value,
			// 消息接收方：单聊为对方用户 ID，群聊和聊天室分别为群组 ID 和聊天室 ID。
			to: targetId,
			// 会话类型：单聊、群聊和聊天室分别为 `singleChat`、`groupChat` 和 `chatRoom`，默认为单聊。
			chatType: "singleChat",
		};
		// 创建文本消息。
		let msg = EasemobSDK.message.create(option);
		// 调用 `send` 方法发送该文本消息。
		EMClient.send(msg).then((res) => {
			console.log("Send message success", res);
			const {
				message
			} = res
			emits('appendMessage', message)
		}).catch((e) => {
			console.log("Send message fail", e);
		});
	}

	const apiUrl = EMClient.apiUrl;
	const orgName = EMClient.orgName;
	const appName = EMClient.appName;
	const uploadTargetUrl = `${apiUrl}/${orgName}/${appName}/chatfiles`;
	const token = EMClient.token;
	const chooseImage = () => {
		uni.chooseImage({
			count: 1,
			sizeType: ['original', 'compressed'],
			sourceType: ['album', 'camera'],
			success: (res) => {
				const tempFilePaths = res.tempFilePaths
				console.log('tempFilePaths', tempFilePaths)
				uploadImage(res)
			}
		})
	}
	const uploadImage = (res) => {
		const tempFile = res?.tempFiles[0]
		const tempFilePath =
			(res && res.tempFilePaths && res.tempFilePaths[0]) ||
			(res && res.tempFiles && res.tempFiles[0].tempFilePath);

		console.log('tempFilePath', tempFilePath)
		const imageName = tempFile?.name || 'image' + Date.now();
		const imageType = tempFile?.type.split('/')[1] || '';
		let width = '';
		let height = '';
		uni.getImageInfo({
			src: tempFilePath,
			success: (res) => {
				console.log('>>>>>获取图片信息成功', res);
				width = res.width;
				height = res.height;
			},
			fail: (err) => {
				console.log('>>>>>获取图片信息失败', err);
			},
		});
		uni.uploadFile({
			url: uploadTargetUrl,
			filePath: tempFilePath,
			fileType: 'image',
			name: 'file',
			header: {
				Authorization: 'Bearer' + token,
			},
			success: (res) => {
				console.log('上传图片成功', res);
				if (res.statusCode === 400) {
					var errData = JSON.parse(res.data);
					if (res.statusCode === 'content improper') {
						uni.showToast({
							title: '图片不合法',
							icon: 'none'
						});
						return false;
					}
				}
				console.log(
					'>>>>>执行发送图片信息',
					imageName,
					width,
					height,
					imageType
				);
				uni.showToast({
					title: '图片已上传',
					icon: 'none'
				});
				sendImagesMessage(res,{imageName,width,height,imageType});
			},
			fail: (e) => {
				console.log('>>>>>上传失败', e);
				uni.showToast({
					title: '图片上传失败',
					icon: 'none'
				});
			},
		});
	}
	const sendImagesMessage = (res,{imageName,width,height,imageType}) => {
		let resData = JSON.parse(res.data)
		var option = {
			type: "img",
			chatType: "singleChat",
			width: width,
			height: height,
			url: resData.uri + "/" + resData.entities[0].uuid,
			// 消息接收方：单聊为对方用户 ID，群聊和聊天室分别为群组 ID 和聊天室 ID。
			to: targetId,
		};
		let msg = EasemobSDK.message.create(option);
		// 调用 `send` 方法发送该图片消息。
		EMClient
			.send(msg)
			.then((res) => {
				// 图片消息成功发送。
				console.log(">>>>>图片消息成功发送",res);
				const {message} = res
				emits('appendMessage',message)
			})
			.catch((e) => {
				// 图片消息发送失败。
				console.log(">>>>>图片消息发送失败");
			});
	}
</script>

<style lang="scss" scoped>
	.input_bar_container {
		position: fixed; // 固定在底部
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		flex-direction: column; // 更改为垂直布局
		align-items: stretch; // 让子元素宽度填满容器
		background-color: #ffffff; // 背景颜色
	}

	.input_more_func {
		display: flex;
		justify-content: space-between; // 按钮平均分布在容器内
		padding: 10px; // 添加内边距
		background-color: #f3f3f3; // 为按钮区域设置背景颜色
	}

	.more_func_button {
		padding: 5px 10px;
		margin-right: 10px;
		background-color: #e0e0e0; // 按钮背景颜色
		border-radius: 5px; // 圆角
		cursor: pointer;
	}

	.message_input {
		padding: 10px;
		border-top: 1px solid #e0e0e0; // 只添加顶部边框
		border-bottom-left-radius: 5px; // 只添加底部左圆角
		border-bottom-right-radius: 5px; // 只添加底部右圆角
		outline: none; // 移除焦点时的外边框
	}
</style>