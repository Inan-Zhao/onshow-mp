// pages/profile/profile.js
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

  onShow: function () {
    const page = this;
    console.log(this)
    // Get api data
    wx.request({
      url: `http://localhost:3000/api/v1/users/1`,
      method: 'GET',
      success(res) {
        console.log(res)
        const user = res.data;
        page.setData(user);
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