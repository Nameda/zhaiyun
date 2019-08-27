Page({
    data:{
        memberType:0,
        money:0,
        canPay:false
    },
    onLoad:function(options){
        // 生命周期函数--监听页面加载
    },
    //切换会员种类
    changeType(e){
        this.setData({
            memberType:e.currentTarget.dataset.type,
            money:e.currentTarget.dataset.money,
            canPay:true
        })
    }
})