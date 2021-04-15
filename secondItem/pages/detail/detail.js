// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:true,
  },

  change:function(){
    this.show = !this.show;
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log(options.name)
    wx: wx.request({
      url: "http://yangli1.gitee.io/mini_apps/source/hot.json",
      data: "",
      header: {
        "content-type": "application/json"
      },
      method: "GET",
      dataType: "json",
      responseType: "text",
      success: function (res) {
        //dataTpye为json时，会自动对请求结果执行一次JSON.parse
        //不规范的json格式会报错
        that.setData({
          hot: res.data.hot
        })
      },
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})