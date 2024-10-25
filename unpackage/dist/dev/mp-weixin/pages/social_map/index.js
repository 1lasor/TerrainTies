"use strict";
const common_vendor = require("../../common/vendor.js");
const EaseIM_index = require("../../EaseIM/index.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = common_vendor.defineComponent({
  name: "HomePage",
  data() {
    return {
      latitude: 30.308763,
      // 纬度
      longitude: 120.388526,
      // 经度
      scale: 12,
      // 缩放级别
      marker: []
      // 存储标记信息
    };
  },
  methods: {
    navigateTo(page) {
      common_vendor.index.navigateTo({
        url: page
      });
      console.log(`Navigate to ${page}`);
    },
    getLocation() {
      console.log("尝试获取位置");
      common_vendor.index.getLocation({
        type: "gcj02",
        success: (res) => {
          this.latitude = res.latitude;
          this.longitude = res.longitude;
          this.updateUserInfoWithLocation();
          console.log("here");
          this.getFriendsWithLocations();
        },
        fail: (err) => {
          console.error("获取位置失败:", err);
        }
      });
    },
    updateUserInfoWithLocation() {
      let option = {
        ext: JSON.stringify({
          latitude: this.latitude,
          longitude: this.longitude
        })
      };
      EaseIM_index.EMClient.updateUserInfo(option).then((res) => {
        console.log(">>>>>用户位置信息更新成功:", res);
      }).catch((err) => {
        console.error(">>>>>更新用户位置信息失败:", err);
      });
    },
    getUserLocation(userId) {
      return new Promise((resolve, reject) => {
        EaseIM_index.EMClient.fetchUserInfoById(userId).then((res) => {
          if (res.data && res.data[userId] && res.data[userId]["ext"]) {
            try {
              let ext = JSON.parse(res.data[userId]["ext"]);
              console.log(">>>>>获取用户信息（位置）:", ext.latitude, ext.longitude);
              resolve({
                userId,
                latitude: ext.latitude,
                longitude: ext.longitude
              });
            } catch (error) {
              console.error("解析用户扩展信息失败:", error);
              reject(error);
            }
          } else {
            console.log("没有找到用户的位置信息");
            resolve({
              userId,
              latitude: this.latitude,
              longitude: this.longitude
            });
          }
        }).catch((err) => {
          console.error("获取用户信息失败:", err);
          reject(err);
        });
      });
    },
    getFriendsWithLocations() {
      EaseIM_index.EMClient.getContacts().then((res) => {
        if (res && res.data) {
          const friendList = res.data;
          const locationsPromise = friendList.map((userId) => {
            return this.getUserLocation(userId).then((location) => {
              return { userId, location };
            });
          });
          Promise.all(locationsPromise).then((results) => {
            const friendsWithLocations = {};
            results.forEach((result) => {
              friendsWithLocations[result.userId] = result.location;
            });
            console.log(friendsWithLocations);
            this.friendsWithLocations = friendsWithLocations;
          }).catch((error) => {
            console.error("获取用户位置出错:", error);
          });
        } else {
          console.error("获取好友列表失败或数据格式不正确");
        }
      }).catch((error) => {
        console.error("获取好友列表出错:", error);
      });
    },
    calculateDistance(lat1, lon1, lat2, lon2) {
      const toRad = (value) => value * Math.PI / 180;
      const R = 6371;
      const dLat = toRad(lat2 - lat1);
      const dLon = toRad(lon2 - lon1);
      const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return R * c;
    },
    // 计算两个经纬度之间的距离（单位：公里）
    calculateDistance(coord1, coord2) {
      const R = 6371;
      const dLat = (coord2.latitude - coord1.latitude) * Math.PI / 180;
      const dLon = (coord2.longitude - coord1.longitude) * Math.PI / 180;
      const a = 0.5 - Math.cos(dLat) / 2 + Math.cos(coord1.latitude * Math.PI / 180) * Math.cos(coord2.latitude * Math.PI / 180) * (1 - Math.cos(dLon)) / 2;
      const distance = R * 2 * Math.asin(Math.sqrt(a));
      return distance;
    },
    // 将好友位置显示在地图上
    showFriendsOnMap(friendsWithLocations, userLocation) {
      const nearbyFriends = {};
      for (const [userId, location] of Object.entries(friendsWithLocations)) {
        const distance = this.calculateDistance(userLocation, location);
        if (distance <= 5) {
          nearbyFriends[userId] = location;
        }
      }
      for (const [userId, location] of Object.entries(nearbyFriends)) {
        this.addMarker({
          latitude: location.latitude,
          longitude: location.longitude,
          title: userId,
          // 标记的标题为userId
          iconPath: "/static/path.png",
          callout: {
            //自定义标记点上方的气泡窗口 点击有效
            content: userId,
            //文本
            color: "#ffffff",
            //文字颜色
            fontSize: 7,
            //文本大小
            borderRadius: 15,
            //边框圆角
            padding: "10",
            bgColor: "#406390",
            //背景颜色
            display: "ALWAYS"
            //常显
          }
        });
      }
    },
    addMarker(options) {
      this.marker.push(options);
    },
    // 获取用户当前位置的示例方法
    getUserCurrentLocation() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const userLocation = { latitude: this.latitude, longitude: this.longitude };
          resolve(userLocation);
        }, 1e3);
      });
    },
    // 初始化地图并显示附近好友的位置
    initMapAndShowFriends() {
      this.getUserCurrentLocation().then((userLocation) => {
        this.showFriendsOnMap(this.friendsWithLocations, userLocation);
      }).catch((error) => {
        console.error("获取用户当前位置出错:", error);
      });
    },
    refresh() {
      this.getLocation();
      console.log(">>>>>刷新");
    },
    onControltap() {
      this.getLocation();
      common_vendor.index.createMapContext("map", this).moveToLocation();
      console.log(">>>>>定位");
    },
    onShow() {
      this.getLocation();
    },
    //地图点击事件
    markertap() {
      console.log("你点击了标记点");
      common_vendor.index.showModal({
        title: "提示",
        content: "地图点击事件，标记点"
      });
    }
  },
  onLoad() {
    this.getLocation();
    this.getFriendsWithLocations();
    this.initMapAndShowFriends();
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0$1,
    b: common_vendor.o((...args) => _ctx.refresh && _ctx.refresh(...args)),
    c: common_assets._imports_1,
    d: common_vendor.o((...args) => _ctx.onControltap && _ctx.onControltap(...args)),
    e: common_assets._imports_2,
    f: common_vendor.o(($event) => _ctx.getUserLocation("abc")),
    g: _ctx.latitude,
    h: _ctx.longitude,
    i: _ctx.marker,
    j: _ctx.scale,
    k: common_vendor.o((...args) => _ctx.markertap && _ctx.markertap(...args)),
    l: common_vendor.o(($event) => _ctx.navigateTo("/pages/contacts/index")),
    m: common_vendor.o(($event) => _ctx.navigateTo("/pages/conversation/index")),
    n: common_vendor.o(($event) => _ctx.navigateTo("/pages/homepage/index"))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-55d825cb"]]);
wx.createPage(MiniProgramPage);
