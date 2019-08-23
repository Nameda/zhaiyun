Page({
    data:{
        sex:1,
        cansee:0,
        array: ['互联网/IT/电子/通信', '广告/传媒/文化/体育', '金融', '教育培训'],
        industry:''
    },
    onLoad:function(options){
        // 生命周期函数--监听页面加载
    },
    changeSex:function(e){
        this.setData({
            sex:e.currentTarget.dataset.type
        })
    },
    changePriv:function(e){
        this.setData({
            cansee:e.currentTarget.dataset.type
        })
    },
    bindPickerChange: function(e) {
        this.setData({
            industry: e.detail.value
        })
    },
})