Page({
  data: {
    cities: ["北京", "上海", "广州", "深圳"],
    cityIndex: 0,
    shebao: 3387,
    gjj: 3387,
    personTotal: '-',
    companyTotal: '-',
    total: '-',
    xinzi: '',
    ynsxinzi:'_',
    grsds: '_',
    shxinzi: '_',
    itemIndex:1,
    radioCheckVal: 1,
    datas: [
      {
        city: "北京",
        shebao: { min: 3387, max: 25401 },
        gjj: { min: 3387, max: 25401 },
        detail: [
          {
            name: "养老保险",
            person: '',
            personRate: .08,
            personTip: "8%",
            company: '',
            companyRate: .19,
            companyTip: "19%",
            total: '-'
          },
          {
            name: "医疗保险",
            person: '',
            personRate: .02,
            personTip: "2%+3",
            company: '',
            companyRate: .1,
            companyTip: "10%",
            total: '-'
          },
          {
            name: "失业保险",
            person: '',
            personRate: .002,
            personTip: "0.2%",
            company: '',
            companyRate: .008,
            companyTip: "0.8%",
            total: '-'
          },
          {
            name: "工伤保险",
            person: '',
            personRate: 0,
            personTip: "",
            company: '',
            companyRate: .004,
            companyTip: "0.4%",
            total: '-'
          },
          {
            name: "生育保险",
            person: '',
            personRate: 0,
            personTip: "",
            company: '',
            companyRate: .008,
            companyTip: "0.8%",
            total: '-'
          },
          {
            name: "公积金",
            person: '',
            personRate: .12,
            personTip: "12%",
            company: '',
            companyRate: .12,
            companyTip: "12%",
            total: '-'
          }
        ]
      },
      {
        city: "上海",
        shebao: { min: 4279, max: 21396 },
        gjj: { min: 2190, max: 19512 },
        detail: [
          {
            name: "养老保险",
            person: '',
            personRate: .08,
            personTip: "8%",
            company: '',
            companyRate: .2,
            companyTip: "20%",
            total: '-'
          },
          {
            name: "医疗保险",
            person: '',
            personRate: .02,
            personTip: "2%",
            company: '',
            companyRate: .095,
            companyTip: "9.5%",
            total: '-'
          },
          {
            name: "失业保险",
            person: '',
            personRate: .005,
            personTip: "0.5%",
            company: '',
            companyRate: .005,
            companyTip: "0.5%",
            total: '-'
          },
          {
            name: "工伤保险",
            person: '',
            personRate: 0,
            personTip: "",
            company: '',
            companyRate: .002,
            companyTip: "0.2%",
            total: '-'
          },
          {
            name: "生育保险",
            person: '',
            personRate: 0,
            personTip: "",
            company: '',
            companyRate: .01,
            companyTip: "1%",
            total: '-'
          },
          {
            name: "公积金",
            person: '',
            personRate: .07,
            personTip: "7%",
            company: '',
            companyRate: .07,
            companyTip: "7%",
            total: '-'
          }
        ]

      },
      {
        city: "广州",
        shebao: { min: 3469, max: 24654 },
        gjj: { min: 2100, max: 24654 },
        detail: [
          {
            name: "养老保险",
            person: '',
            personRate: .08,
            personTip: "8%",
            company: '',
            companyRate: .14,
            companyTip: "14%",
            total: '-'
          },
          {
            name: "医疗保险",
            person: '',
            personRate: .02,
            personTip: "2%",
            company: '',
            companyRate: .07,
            companyTip: "7%",
            total: '-'
          },
          {
            name: "失业保险",
            person: '',
            personRate: .002,
            personTip: "0.2%",
            company: '',
            companyRate: .0064,
            companyTip: "0.64%",
            total: '-'
          },
          {
            name: "工伤保险",
            person: '',
            personRate: 0,
            personTip: "",
            company: '',
            companyRate: .0085,
            companyTip: "0.85%",
            total: '-'
          },
          {
            name: "生育保险",
            person: '',
            personRate: 0,
            personTip: "",
            company: '',
            companyRate: .0085,
            companyTip: "0.85%",
            total: '-'
          },
          {
            name: "公积金",
            person: '',
            personRate: .05,
            personTip: "5%",
            company: '',
            companyRate: .05,
            companyTip: "5%",
            total: '-'
          }
        ]

      },
      {
        city: "深圳",
        shebao: { min: 5008, max: 25044 },
        gjj: { min: 2130, max: 25044 },
        detail: [
          {
            name: "养老保险",
            person: '',
            personRate: .08,
            personTip: "8%",
            company: '',
            companyRate: .14,
            companyTip: "14%",
            total: '-'
          },
          {
            name: "医疗保险",
            person: '',
            personRate: .02,
            personTip: "2%",
            company: '',
            companyRate: .062,
            companyTip: "6.2%",
            total: '-'
          },
          {
            name: "失业保险",
            person: '',
            personRate: 0.005,
            personTip: "0.5%",
            company: '',
            companyRate: .01,
            companyTip: "1%",
            total: '-'
          },
          {
            name: "工伤保险",
            person: '',
            personRate: 0,
            personTip: "",
            company: '',
            companyRate: .012,
            companyTip: "1.2%",
            total: '-'
          },
          {
            name: "生育保险",
            person: '',
            personRate: 0,
            personTip: "",
            company: '',
            companyRate: .005,
            companyTip: "0.5%",
            total: '-'
          },
          {
            name: "公积金",
            person: '',
            personRate: .05,
            personTip: "5%",
            company: '',
            companyRate: .05,
            companyTip: "5%",
            total: '-'
          }
        ]
      }
    ]
  },
  radioCheckedChange: function (e) {
    this.setData({
      itemIndex: e.detail.value,
      radioCheckVal: e.detail.value
    })
  },
  bindCityChange: function (e) {
    console.log('picker country 发生选择改变，携带值为', e.detail.value);
    for (let i = 0; i < this.data.datas[e.detail.value].detail.length; i++) {
      this.data.datas[e.detail.value].detail[i].person = '';
      this.data.datas[e.detail.value].detail[i].company = '';
      this.data.datas[e.detail.value].detail[i].total = '-';
    }
    this.setData({
      cityIndex: e.detail.value,
      shebao: this.data.datas[e.detail.value].shebao.min,
      gjj: this.data.datas[e.detail.value].gjj.min,
      datas: this.data.datas,
      personTotal: '-',
      companyTotal: '-',
      total: '-'
    })
  },
  calculate () {
    var o = this.data.datas[this.data.cityIndex].detail;
    var len = o.length;
    this.data.personTotal = 0;
    this.data.companyTotal = 0;
    for(let i = 0; i < len; i++) {
      var tmp = i === len-1? this.data.gjj: this.data.shebao;
      if(this.data.cityIndex==0 && i==1){
        o[i].person = (tmp * o[i].personRate +3).toFixed(2);
        this.data.personTotal += tmp * o[i].personRate + 3;
      }else{
        o[i].person = (tmp * o[i].personRate).toFixed(2);
        this.data.personTotal += tmp * o[i].personRate;
      }
      o[i].company = (tmp * o[i].companyRate).toFixed(2);
      this.data.companyTotal += tmp * o[i].companyRate;
      o[i].total = (tmp * o[i].personRate + tmp * o[i].companyRate).toFixed(2);
    }
    this.data.total = (this.data.personTotal + this.data.companyTotal).toFixed(2);
    this.data.personTotal = this.data.personTotal.toFixed(2);
    this.data.companyTotal = this.data.companyTotal.toFixed(2);
    var ynsxinzi = this.data.xinzi > this.data.personTotal ? (this.data.xinzi - this.data.personTotal).toFixed(2) : this.data.xinzi;
    var rate = this.data.itemIndex == 0 ? this.get_rate_old(ynsxinzi).toFixed(2):this.get_rate(ynsxinzi).toFixed(2);
    this.setData({
      datas: this.data.datas,
      personTotal: this.data.personTotal,
      companyTotal: this.data.companyTotal,
      total: this.data.total,
      ynsxinzi: ynsxinzi,
      grsds: rate,
      shxinzi: (ynsxinzi - rate).toFixed(2)
    });
  },
  get_rate: function (xinzi) {
    if(xinzi<5000){
        return 0;
    }
    var rate_xinzi = xinzi-5000;
    var salary_levels = [3000, 12000, 25000, 35000, 55000, 80000];
    var rate_levels = [0.03, 0.10, 0.2, 0.25, 0.3, 0.35, 0.45];
    var sub_levels = [0, 210, 1410, 2660, 4410, 7160, 15160];
    var len =salary_levels.length;
    for (let i = 0; i < len; i++) {
      if (rate_xinzi<=salary_levels[i]){
        return (rate_xinzi * rate_levels[i]).toFixed(2) - sub_levels[i];
      }
    }
    return (rate_xinzi * rate_levels[6]).toFixed(2) - sub_levels[6];
  },
  get_rate_old: function (xinzi) {
    if (xinzi < 3500) {
      return 0;
    }
    var rate_xinzi = xinzi - 3500;
    var salary_levels = [1500, 4500, 9000, 35000, 55000, 80000];
    var rate_levels = [0.03, 0.10, 0.2, 0.25, 0.3, 0.35, 0.45];
    var sub_levels = [0, 105, 555, 1005, 2755, 5505, 13505];
    var len = salary_levels.length;
    for (let i = 0; i < len; i++) {
      if (rate_xinzi <= salary_levels[i]) {
        return (rate_xinzi * rate_levels[i]).toFixed(2) - sub_levels[i];
      }
    }
    return (rate_xinzi * rate_levels[6]).toFixed(2) - sub_levels[6];
  },
  changeXinzi (e) {
    var shebao = Number(e.detail.value);
    var xinzi = Number(e.detail.value);
    var sbmin = this.data.datas[this.data.cityIndex].shebao.min;
    var sbmax = this.data.datas[this.data.cityIndex].shebao.max;
    if (xinzi < sbmin) this.setData({ shebao: sbmin });
    else if (xinzi < sbmax) this.setData({ shebao: xinzi });
    else if( xinzi>sbmax) this.setData({shebao:sbmax});
   
    var gjj = Number(e.detail.value);
    var gjjmin = this.data.datas[this.data.cityIndex].gjj.min;
    var gjjmax = this.data.datas[this.data.cityIndex].gjj.max;
    if (xinzi < gjjmin) this.setData({ gjj: gjjmin });
    else if (xinzi < gjjmax) this.setData({ gjj: xinzi });
    else if (xinzi > gjjmax) this.setData({ gjj: gjjmax });

    this.setData({ xinzi: xinzi })
  },
  changeShebao (e) {
    var shebao = Number(e.detail.value);
    var min = this.data.datas[this.data.cityIndex].shebao.min;
    var max = this.data.datas[this.data.cityIndex].shebao.max;
    shebao = shebao !== shebao ? min: shebao;
    if( shebao < min ) shebao = min;
    else if (shebao > max) shebao = max;
    this.setData({ shebao: shebao })
  },
  changeGjj (e) {
    var gjj = Number(e.detail.value);
    var min = this.data.datas[this.data.cityIndex].gjj.min;
    var max = this.data.datas[this.data.cityIndex].gjj.max;
    gjj = gjj !== gjj ? this.data.datas[this.data.cityIndex].gjj.min: gjj;
    if (gjj < min) gjj = min;
    else if (gjj > max) gjj = max;
    this.setData({ gjj: gjj });
  },
  radioChange: function (e) {
    var itemIndex = Number(e.detail.value);
    console.log('radio发生change事件，携带value值为：', e.detail.value);
    this.setData({ itemIndex: itemIndex});
  },
  onLoad: function (e) {
    wx.showShareMenu({
      // 要求小程序返回分享目标信息
      withShareTicket: true
    });
  },
  onShareAppMessage: function (ops) {
    if (ops.from === 'button') {
      // 来自页面内转发按钮
      console.log(ops.target)
    }
    return {
      title: '不服来战~^@^~',
      path: '/pages/salary/rate',
      success: function (res) {
        // 转发成功
        console.log("转发成功:" + JSON.stringify(res));
        var shareTickets = res.shareTickets;
      },
      fail: function (res) {
        // 转发失败
        console.log("转发失败:" + JSON.stringify(res));

      }
    }
  }
});