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
  onShow: function () {
    const page = this;
    wx.request({
      url: `http://localhost:3000/api/v1/performances/${page.options.id}`,
      method: 'GET',
      success(res) {
        console.log(res)
        const performance = res.data;
        // console.log(performance)
        page.setData(performance);
        wx.setNavigationBarTitle({
          title: performance.name,
        });
        wx.hideToast();
      }
    });
  },

  goToEditPage(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/edit/edit?id=${id}`
    })
  },

  goToPurchasePage(e) {
    console.log(e)
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/purchase/purchase?id=${id}`
    })
  },
  
  // binded to delete button
  deletePerformance(e) {
    const data = e.currentTarget.dataset;
    console.log(e)
    // make a DELETE request
    wx.request({
      url: `http://localhost:3000/api/v1/performances/${data.id}`,
      method: 'DELETE',
      success() {
        // redirect to index page when done
        wx.switchTab({
          url: '/pages/index/index'
        });
      }
    });
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