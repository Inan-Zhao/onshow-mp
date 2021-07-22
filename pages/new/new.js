// pages/new/new.js
Page({

  formSubmit: function(e) {
    // console.log(e)

    let performance = {
      name: e.detail.value.name,
      date: e.detail.value.date, 
      city: e.detail.value.city,
      venue: e.detail.value.venue, 
      price: e.detail.value.price,
      highlight: e.detail.value.highlight,
      description: e.detail.value.description,
      image_url: e.detail.value.image_url,
      user_id: 1
    };

    wx.request({
      url: `http://localhost:3000/api/v1/performances`,
      // url: `https://rbnb-theatre.herokuapp.com/api/v1/performances`,
      method: 'POST',
      data: performance,
      success(res) {
        // console.log(res);
        // redirect to index page when done
        // when you have tab use tabBar
        wx.switchTab({
          url: '/pages/index/index'
        });
      }
    });
  },

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
})