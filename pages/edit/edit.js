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
    // console.log(options)

    wx.showToast({
      title: 'Loading...',
      icon: 'loading',
      duration: 1500
    });

    wx.request({
      url: `http://localhost:3000/api/v1/performances/${options.id}`,
      method: 'GET',
      success(res) {
        var performance = res.data;
        // console.log(performance)
        page.setData(performance);
        wx.setNavigationBarTitle({
          title: performance.name,
        });
        wx.hideToast();
      }
    });
  },

  formSubmit: function (e) {
    console.log(e)
    let id = this.data.id;

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
    }
    
    wx.request({
      url: `http://localhost:3000/api/v1/performances/${id}`,
      method: 'PUT',
      data: performance,
      success() {
        wx.navigateBack();
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
  }
})