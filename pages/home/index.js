//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls:[
      "http://img.zcool.cn/community/01281b5c1c7967a80121df904b0c3e.png",
      "http://t-1.tuzhan.com/03c215caab18/c-2/l/2013/04/26/16/c0fd074931cf4be6990fab3803cdac7c.jpg"
    ],
    listTab:['推荐','餐饮','房地产','酒店','服装','汽车','美容','游戏'],
    currentTab:0,
    lists:[
      {
        id:1,
        pic:'../../static/image/home/pic.png',
        name:'魏晨阳1',
        industry:'汽车',
        resources:'拥有资源：汽车，机油，汽车美容，玻璃,汽车，机油，汽车美容，玻璃汽车，机油，汽车美容，玻璃 '
      },
      {
        id:2,
        pic:'../../static/image/home/pic.png',
        name:'魏晨阳2',
        industry:'汽车',
        resources:'拥有资源：汽车，机油，汽车美容，玻璃...... '
      },
      {
        id:3,
        pic:'../../static/image/home/pic.png',
        name:'魏晨阳3',
        industry:'汽车',
        resources:'拥有资源：汽车，机油，汽车美容，玻璃...... '
      },
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    
  },
  //切换 tab
  changeType:function(e) {
    let index =  e.currentTarget.dataset['index'];
    //判断是否请求数据
    if(index != this.data.currentTab){
      this.setData({
        currentTab :index
      })
      //请求数据。。。
    }
  }
})
