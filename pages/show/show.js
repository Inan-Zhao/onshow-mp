// pages/show/show.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const page = this;
    wx.request({
      url: `https://rbnb-theatre.herokuapp.com/api/v1/performances/${options.id}`,
      method: 'GET',
      success(res) {
        const performance = res.data;
        console.log(performance)
        page.setData({performance});
        wx.setNavigationBarTitle({
          title: performance.name,
        });
      }
    });
  },

  goToIndexPage() {
    wx.switchTab({
      url: '/pages/index/index'
    })
  },

  goToEditPage() {
    wx.navigateTo({
      url: '/pages/edit/edit'
    })
  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // wx.setNavigationBarTitle({
    //   title: this.data.name,
    // });
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