//Page Object
Page({
    data: {
        balance:99.88,
        withdrawMoney:''
    },
    //options(Object)
    onLoad: function(options) {
        
    },
    //获取 input 金额
    getMoney:function(e){
        this.setData({
            withdrawMoney: e.detail.value
        })
    },
    // 全部提现
    widthdrawAll:function(){
        this.setData({
            withdrawMoney:this.data.balance
        })
    }
});
  