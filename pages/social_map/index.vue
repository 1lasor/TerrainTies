<template>
	<div class="content">
		<view class="custom-navbar">
			<view class="title">
			  <text>TerrainTies</text>
			</view>
		</view>
		<!-- 地图组件 -->
		<view class="map-container">
			<map style="width: 100%; height: 90vh;" :show-location='true' ref="map" id="map" :latitude="latitude"
				:longitude="longitude" :markers="marker" :scale="scale" >
				<cover-view class="cover-view">
					<cover-view @click="refresh">
						<cover-image class="cover-image" src="/static/shuaxin.png"></cover-image>
						<cover-view>刷新</cover-view>
					</cover-view>
					<cover-view style="margin-top: 20rpx;" @click="onControltap">
						<cover-image class="cover-image" src="/static/dingwei.png"></cover-image>
						<cover-view>定位</cover-view>
					</cover-view>
					<cover-view @click="getUserLocation('wqq')">
						<cover-image class="cover-image" src="/static/logo.png"></cover-image>
						<cover-view>测试定位</cover-view>
					</cover-view>
				</cover-view>
			</map>
		</view>

		<!-- 底部导航栏 -->
		<nav class="bottom-nav">
			<button @click="navigateTo('/pages/contacts/index')">好友列表</button>
			<button>附近的人</button>
			<button @click="navigateTo('/pages/conversation/index')">消息列表</button>
			<button @click="navigateTo('/pages/homepage/index')">我的主页</button>
		</nav>
	</div>
</template>

<script type="module">
	import {
		defineComponent
	} from 'vue';
	import {
		EMClient
	} from "@/EaseIM";
	// 引入地图组件相关库
	import QQMapWX from '../../common/qqmap-wx-jssdk.js'
	//import QQMapWX from '../../common/qqmap-wx-jssdk.js';


	export default defineComponent({
		name: 'HomePage',
		data() {
			return {
				latitude: 30.308763, //纬度
				longitude: 120.388526, //经度
				scale: 12, //缩放级别
				marker: [{
					id: 0,
					latitude: 30.308763, //纬度
					longitude: 120.388526, //经度
					iconPath: '/static/logo.png', //显示的头像
					rotate: 0, // 旋转度数
					width: 20, //宽
					height: 30, //高
					alpha: 0.5, //透明度
					callout: { //自定义标记点上方的气泡窗口 点击有效
						content: '吉米', //文本
						color: '#ffffff', //文字颜色
						fontSize: 7, //文本大小
						borderRadius: 15, //边框圆角
						padding: '10',
						bgColor: '#406390', //背景颜色
						display: 'ALWAYS', //常显
					}
				}],
			};
		},
		methods: {
			navigateTo(page) {
				uni.navigateTo({
					url: page
				});
				console.log(`Navigate to ${page}`);
			},
			getLocation() {
				uni.getLocation({
					type: 'gcj02',
					success: res => {
						this.latitude = res.latitude;
						this.longitude = res.longitude;
						this.updateUserInfoWithLocation();
					},
					fail: err => {
						console.error('获取位置失败:', err);
					}
				});
			},
			updateUserInfoWithLocation() {
				let option = {
					ext: JSON.stringify({
						latitude: this.latitude,
						longitude: this.longitude,
					}),
				};
				EMClient.updateUserInfo(option).then((res) => {
					console.log('>>>>>用户位置信息更新成功:', res);
				}).catch((err) => {
					console.error('>>>>>更新用户位置信息失败:', err);
				});
			},
			getUserLocation(user) {
			  return new Promise((resolve, reject) => {
			    EMClient.fetchUserInfoById(user).then((res) => {
			      if (res.data && res.data[user] && res.data[user]['ext']) {
			        try {
			          let ext = JSON.parse(res.data[user]['ext']);
			          console.log(">>>>>获取用户信息（位置）:", ext.latitude, ext.longitude);
			          resolve({
			            latitude: ext.latitude,
			            longitude: ext.longitude
			          });
			        } catch (error) {
			          console.error('解析用户扩展信息失败:', error);
			          reject(error);
			        }
			      } else {
			        console.log("没有找到用户的位置信息");
			        reject(new Error("位置信息不存在"));
			      }
			    }).catch((err) => {
			      console.error("获取用户信息失败:", err);
			      reject(err);
			    });
			    console.log('>>>>>刷新');
			  });
			},
			refresh() {
				this.getLocation()
				console.log('>>>>>刷新');
				this.getUserLocation('wqq').then(location => {
				  // 当 Promise 被成功解决时，这里的 location 将是 { latitude: ..., longitude: ... }
				  console.log('用户位置:', location);
				}).catch(error => {
				  // 当 Promise 被拒绝时，这里的 error 将是错误信息
				  console.error('获取用户位置失败:', error);
				});
			},
			onControltap() {
				this.getLocation()
				uni.createMapContext("map", this).moveToLocation();
				console.log('>>>>>定位');
				uni.showModal({
					title: '提示',
					content: '当前纬度' + this.latitude + '当前经度' + this.longitude
				})
			},
			onShow() {
				this.getLocation()
			},
		}
	});
</script>

<style scoped>
	.title{
		position: absolute;
		left: 70px;
		right: 70px;
		min-width: 0;
		font-weight: 600;
	}
	.custom-navbar {
		position: relative;
	    height: calc(44px + env(safe-area-inset-top));
	    padding-top: calc(11px + env(safe-area-inset-top));
	    display: flex;
	    overflow: hidden;
	    justify-content: normal;
	    box-sizing: border-box;
	    z-index: 998;
	    color: #000000;
	    background-color: #ffd503;
	    text-align: center;
	}
	.map-container {
		margin-top: -40rpx;
		position: relative;
		overflow: hidden;
		border-radius: 50rpx 50rpx 0 0;
	}

	.cover-view {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 42rpx 22rpx;
		color: #4F575F;
		font-weight: 400;
		background-color: #fff;
		background-size: 120rpx 120rpx;
		background-position: center center;
		position: absolute;
		top: 150rpx;
		right: 32rpx;
		border-radius: 15rpx;
	}

	.cover-image {
		display: inline-block;
		width: 50rpx;
		height: 50rpx;
	}

	.bottom-nav {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		justify-content: space-around;
		padding: 10px;
		background-color: #f8f8f8;
	}

	.bottom-nav button {
		padding: 10px;
		background-color: #fff;
		border: 1px solid #ddd;
		border-radius: 5px;
		cursor: pointer;
	}

</style>