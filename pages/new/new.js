// pages/new/new.js
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

    // Post data to API
    wx.request({
      url: `http://localhost:3000/api/v1/performances`,
      method: 'POST',
      data: performance,
      success() {
        // redirect to index page when done
        wx.redirectTo({
          url: '/pages/index/index'
        });
      }
    });
  }
})