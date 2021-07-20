// pages/edit/edit.js
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
  
      wx.showToast({
        title: 'Loading...',
        icon: 'loading',
        duration: 1500
      });
  
  
      // Get story data from server (to show in form)
      wx.request({
        url: `http://localhost:3000/api/v1/performances/${options.id}`,
        method: 'GET',
        success(res) {
          var performance = res.data;
  
          // Update local data
          page.setData({performance});
  
          wx.hideToast();
        }
      });
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

  },

  bindSubmit: function (e) {

    let name = e.detail.value.name;
    let venue = e.detail.value.venue;
    let date = e.detail.value.date;
    let price = e.detail.value.price;
    let description = e.detail.value.description;
    let image_url = e.detail.value.image_url;
    let id = this.data.id;

    let performance = {
      name: name,
      venue: venue,
      date: date,
      price: price,
      description: description,
      image_url: image_url
    }

    // Update api data
    wx.request({
      url: `http://localhost:3000/api/v1/performances/${id}`,
      method: 'PUT',
      data: performance,
      success() {
        // redirect to show page when done
        wx.redirectTo({
          url: '/pages/show/show'
        });
      }
    });
  }
})