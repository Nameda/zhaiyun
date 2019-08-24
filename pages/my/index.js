//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    funList:[
      {
        value:'浏览历史',
        url:'pages/home/index'
      },
      {
        value:'联系我们',
        url:'pages/home/index'
      },
      {
        value:'版本预告',
        url:'pages/home/index'
      },
      {
        value:'帮助与反馈',
        url:'pages/home/index'
      },
    ]
  },
  onLoad: function () {
  },
  //去提现
  goWallet: function() {
    wx.navigateTo({
      url: '/pages/withdraw/index'
    })
  },
})
