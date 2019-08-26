// 搜索列表
Page({
    data:{
        searchWords:'', //  搜索关键词
        lists:[
            {
              id:1,
              pic:'../../static/image/home/pic.png',
              name:'魏汽车1',
              industry:'汽车',
              resources:'汽车，机油，汽车美容，玻璃,汽车，机油，汽车美容，玻璃汽车，机油，汽车美容，玻璃 '
            },
            {
              id:2,
              pic:'../../static/image/home/pic.png',
              name:'魏晨阳2',
              industry:'汽车',
              resources:'汽车，机油，汽车美容，玻璃...... '
            },
            {
              id:3,
              pic:'../../static/image/home/pic.png',
              name:'魏晨阳3',
              industry:'汽车',
              resources:'汽车，机油，汽车美容，玻璃...... '
            },
        ]
    },
    onLoad:function(options){
        // 生命周期函数--监听页面加载
        options.searchWords = "汽车";  //假设搜索关键词是 汽车
        this.setData({
            searchWords:options.searchWords
        })
        this.queryList();
    },
    queryList(){
        // 接口返回lists （暂时用定义的lists）
        let resultList = this.data.lists;
        resultList.forEach(list => {
                list.name = this.filterKeyLight(list.name);
                list.industry = this.filterKeyLight(list.industry);
                list.resources = this.filterKeyLight(list.resources);
        });
        this.setData({
            lists:resultList
        })
    },
    filterKeyLight(text){
        if (!this.data.searchWords) return text;
        const result=text.replace(new RegExp(this.data.searchWords, 'g'), `%%%${this.data.searchWords}%%%`).split('%%%');
        //去除空元素
        const res = result.filter(function (s) {
            return s && s.trim();
        });
        return res;
    },
})