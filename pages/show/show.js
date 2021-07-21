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
    let page = this;
    // Get api data
    wx.request({
      url: `http://localhost:3000/api/v1/performances/${options.id}`,
      method: 'GET',
      success(res) {
        const performance = res.data;
        console.log(performance)
        // Update local data
        page.setData({performance});
        // wx.hideToast();

        wx.setNavigationBarTitle({
          title: page.data.name,
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