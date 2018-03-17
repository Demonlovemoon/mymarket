// pages/market/market.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
     items:[],
     slides:[
       {url:"",image:"",id:0},
     ],
     navs: [
       {icon:"../../images/jingxuan.jpg",name:"精选",typeId: 0},
       { icon: "../../images/muying.jpg", name: "母婴", typeId: 1 },
       { icon: "../../images/nanzhaung.jpg", name: "男装", typeId: 2 },
       { icon: "../../images/nvzhuang.jpg", name: "女装", typeId: 3 }
       ]  
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
  
  }
})