//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //页面跳转
  toast:function(){
    wx.navigateTo({
      url: '../detail/detail',
    })
  },
  onLoad: function () {
    var that = this;
    wx:wx.request({
      url: "http://yangli1.gitee.io/mini_apps/source/hot.json",
      data: "",
      header: {
        "content-type":"application/json"
      },
      method: "GET",
      dataType: "json",
      responseType: "text",
      success: function(res) {
        //dataTpye为json时，会自动对请求结果执行一次JSON.parse
        //不规范的json格式会报错
        console.log(res.data.hot);
        that.setData({
          hot:res.data.hot,
        })
      },
    })
  },
})
