// pages/product/product.js
const Product = require("../../utils/products.js")
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
    //储存下来当前的对象
    var that = this
    var product = app.globalData.production
    this.setData({productionType: product.typeName, productionId: product.typeId})
    Product.getProducts(that.data.productionId,function(result){
      var data = getApp().store.sync(result.data)
      that.setData({items: data })
      wx.setStorage({
        key: 'pro_${that.data.productionId}',
        data: data,
      })
    }),function(fail){
      var data = wx.getStorage({
        key: 'pro_${that.data.productionId}',
        success: function(res) {},
      })
      wx.setData({items: data})
    }
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