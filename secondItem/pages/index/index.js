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
  //页面跳转
  toast:function(event){
    // 获取漫画名作为查询目录的请求参数
    console.log(event.currentTarget.dataset);
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../detail/detail?id=' +id,
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
        that.setData({
          hot: res.data.hot,
        })
      },
    })
  },
})
