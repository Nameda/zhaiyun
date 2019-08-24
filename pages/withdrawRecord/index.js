//Page Object
Page({
    data: {
        recordList:[
            {
                mounth:'2019年7月',
                records:[
                    {
                        week:'周一',
                        date:'07-01',
                        info:'提现到微信钱包',
                        money:100,
                        status:'已到账'
                    },{
                        week:'周一',
                        date:'07-01',
                        info:'提现到微信钱包',
                        money:100,
                        status:'已到账'
                    }
                ]
            },{
                mounth:'2019年6月',
                records:[
                    {
                        week:'周一',
                        date:'07-01',
                        info:'提现到微信钱包',
                        money:100,
                        status:'已到账'
                    },{
                        week:'周一',
                        date:'07-01',
                        info:'提现到微信钱包',
                        money:100,
                        status:'已到账'
                    }
                ]
            }
        ]
    },
    //options(Object)
    onLoad: function(options) {
        
    },
});
  