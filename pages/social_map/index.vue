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
				:longitude="longitude" :markers="marker" :scale="scale" @markertap="markertap" >
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
				latitude: 30.308763, // 纬度
				longitude: 120.388526, // 经度
				scale: 12, // 缩放级别
				marker: [], // 存储标记信息
			};
		},
		methods: {
			navigateTo(page) {
				uni.navigateTo({
					url: page,
				});
				console.log(`Navigate to ${page}`);
			},
			getLocation() {
				console.log("尝试获取位置");
				uni.getLocation({
					type: 'gcj02',
					success: res => {
						this.latitude = res.latitude;
						this.longitude = res.longitude;
						this.updateUserInfoWithLocation();
						console.log("here")
						this.getFriendsWithLocations(); // 位置获取成功后获取好友id位置列表
					},
					fail: err => {
						console.error('获取位置失败:', err);
					},
				});
			},
			updateUserInfoWithLocation() {
				let option = {
					ext: JSON.stringify({
						latitude: this.latitude,
						longitude: this.longitude,
						state:'在线',
					}),
				};
				EMClient.updateUserInfo(option).then(res => {
					console.log('>>>>>用户位置信息更新成功:', res);
				}).catch(err => {
					console.error('>>>>>更新用户位置信息失败:', err);
				});
			},
			getUserLocation(userId) {
				return new Promise((resolve, reject) => {
					EMClient.fetchUserInfoById(userId).then(res => {
						if (res.data && res.data[userId] && res.data[userId]['ext']) {
							try {
								let ext = JSON.parse(res.data[userId]['ext']);
								console.log(">>>>>获取用户信息（位置）:", ext.latitude, ext.longitude);
								resolve({
									userId,
									latitude: ext.latitude,
									longitude: ext.longitude,
								});
							} catch (error) {
								console.error('解析用户扩展信息失败:', error);
								reject(error);
							}
						} else {
							console.log("没有找到用户的位置信息");
							//reject(new Error("位置信息不存在"));
							resolve({
								userId,
								latitude: this.latitude,
								longitude: this.longitude,
							});
						}
					}).catch(err => {
						console.error("获取用户信息失败:", err);
						reject(err);
					});
				});
			},
			getFriendsWithLocations() {
			    EMClient.getContacts().then((res) => {
			      if (res && res.data) {
			        const friendList = res.data;
			        const locationsPromise = friendList.map(userId => {
			          return this.getUserLocation(userId).then(location => {
			            return { userId, location };
			          });
			        });
			
			        Promise.all(locationsPromise).then(results => {
			          const friendsWithLocations = {};
			          results.forEach(result => {
			            friendsWithLocations[result.userId] = result.location;
			          });
			          console.log(friendsWithLocations); // 打印包含用户ID和地理位置的字典
			          // 这里可以将 friendsWithLocations 设置到组件的数据中或进行其他处理
			          this.friendsWithLocations = friendsWithLocations;
			        }).catch(error => {
			          console.error('获取用户位置出错:', error);
			        });
			      } else {
			        console.error('获取好友列表失败或数据格式不正确');
			      }
			    }).catch((error) => {
			      console.error('获取好友列表出错:', error);
			    });
			  },
			calculateDistance(lat1, lon1, lat2, lon2) {
				const toRad = (value) => value * Math.PI / 180;
				const R = 6371; // 地球半径，单位为公里
				const dLat = toRad(lat2 - lat1);
				const dLon = toRad(lon2 - lon1);
				const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
					Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
					Math.sin(dLon / 2) * Math.sin(dLon / 2);
				const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
				return R * c;
			},
			// 计算两个经纬度之间的距离（单位：公里）
			calculateDistance(coord1, coord2) {
			  const R = 6371; // 地球半径（公里）
			  const dLat = (coord2.latitude - coord1.latitude) * Math.PI / 180;
			  const dLon = (coord2.longitude - coord1.longitude) * Math.PI / 180;
			  const a = 
			    0.5 - Math.cos(dLat) / 2 + 
			    Math.cos(coord1.latitude * Math.PI / 180) * Math.cos(coord2.latitude * Math.PI / 180) * 
			    (1 - Math.cos(dLon)) / 2;
			  const distance = R * 2 * Math.asin(Math.sqrt(a));
			  return distance;
			},
			
			// 将好友位置显示在地图上
						// 将好友位置显示在地图上
						showFriendsOnMap(friendsWithLocations, userLocation) {
						    const nearbyFriends = {};
						    for (const [userId, location] of Object.entries(friendsWithLocations)) {
						        const distance = this.calculateDistance(userLocation, location);
						        if (distance <= 5) {
						            nearbyFriends[userId] = location;
						        }
						    }
						
						    let markerId = 0;
						    // 创建一个对象来存储markerId与title的对应关系
						    this.markerTitleMap = {}; 
						
						    // 在地图上为每个附近的好友添加标记
						    for (const [userId, location] of Object.entries(nearbyFriends)) {
						        this.markerTitleMap[markerId] = userId; // 存储对应关系
						        this.addMarker({
						            id: markerId++,
						            latitude: location.latitude,
						            longitude: location.longitude,
						            title: userId, // 标记的标题为userId
						            iconPath: '/static/path.png',
						            callout: {
						                content: userId, // 文本
						                color: '#ffffff', // 文字颜色
						                fontSize: 7, // 文本大小
						                borderRadius: 15, // 边框圆角
						                padding: '10',
						                bgColor: '#406390', // 背景颜色
						                display: 'ALWAYS', // 常显
						            }
						        });
						    }
						},
						
						addMarker(options) {
						    // options 参数应该包含标记的位置、标题和其他属性
						    this.marker.push(options);
						},
						
						// 地图点击事件
						markertap(e) {
						    const markerId = e.markerId; // 假设e.markerId包含点击的标记ID
						    const title = this.markerTitleMap[markerId]; // 根据markerId获取title
						
						    console.log("你点击了标记点", title);
						    // uni.showModal({
						    //     title: '提示',
						    //     content: '地图点击事件，标记点: ' + title
						    // });
							uni.navigateTo({
								url: `/pages/chat/index?userId=${encodeURIComponent(title)}`
							});
						},
						  // 获取用户当前位置的示例方法
						getUserCurrentLocation() {
						      // 这里应该是获取用户当前位置的代码
						      // 以下是一个示例返回Promise的模拟
						      return new Promise((resolve, reject) => {
						        // 模拟API调用
						        setTimeout(() => {
						          // 假设返回一个用户当前位置对象
						          const userLocation = { latitude:this.latitude, longitude: this.longitude };
						          resolve(userLocation);
						        }, 1000);
						      });
						    },
						  // 初始化地图并显示附近好友的位置
						initMapAndShowFriends() {
						      this.getUserCurrentLocation().then(userLocation => {
						        this.showFriendsOnMap(this.friendsWithLocations, userLocation);
						      }).catch(error => {
						        console.error('获取用户当前位置出错:', error);
						      });
						    },
						refresh() {
							this.getLocation();
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
							this.getLocation();
							uni.createMapContext("map", this).moveToLocation();
							console.log('>>>>>定位');
						},
						onShow() {
							this.getLocation()
						}
					},
		onLoad(){
			this.getLocation();
			this.getFriendsWithLocations();
			this.initMapAndShowFriends();
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