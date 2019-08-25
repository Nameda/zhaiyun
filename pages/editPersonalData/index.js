Page({
    data:{
        sex:1, //性别
        cansee:0, //个人隐私
        industryList:[
            '互联网/IT/电子/通信', 
            '广告/传媒/文化/体育',
             '金融', 
             '教育培训',
             '制药/医疗',
             '交通/物流/贸易/零售',
             '专业服务',
             '房地产/建筑',
             '汽车',
             '机械/制造',
             '消费品',
             '服务业',
             '能源/环保',
             '政府/非盈利机构/其他'
            ],
        isShowDialog:false,
        canSave:false  //保存按钮
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
    //显示行业选择弹窗
    showDialog: function() {
        this.setData({
            isShowDialog: true
        })
    },
    //选择行业
    chooseIndustry:function(e){
        let index = e.currentTarget.dataset.index;
        this.setData({
            industry:this.data.industryList[index],
            isShowDialog: false
        })
    }
})