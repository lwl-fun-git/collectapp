const app = getApp();
Page({
  data: {
    collect_total:0,
    test:{
      test:'111'
    },
    arr:{
      dian:'',
      wo:'',
      wei:'',
      xi:'',
      ye:'',
      qi:'',
      tu:'',
      sha:''
    },
    showlist:false,
    show_arr:[]
  },
  onLoad: function () { },
  pageBack() {
    wx.navigateBack({
      delta: 1
    });
  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null,
      arr:{
        dian:'',
        wo:'',
        wei:'',
        xi:'',
        ye:'',
        qi:'',
        tu:'',
        sha:''
      },
      collect_total:0
    })
  },
  inputbind_total (e) {
    this.setData({
      collect_total: Number(e.detail.value)
  })
  },
  inputbind_dian (e) {
    this.setData({
      'arr.dian': e.detail.value
  })
  },
  inputbind_wo (e) {
    this.setData({
      'arr.wo': e.detail.value
  })
  },
  inputbind_wei (e) {
    this.setData({
      'arr.wei': e.detail.value
   })
  },
  inputbind_xi (e) {
    this.setData({
      'arr.xi': e.detail.value
  })
  },
  inputbind_ye (e) {
    this.setData({
      'arr.ye': e.detail.value
  })
  },
  inputbind_qi (e) {
    this.setData({
      'arr.qi': e.detail.value
  })
  },
  inputbind_tu (e) {
    this.setData({
        'arr.tu': e.detail.value
    })
  },
  inputbind_sha(e) {
    this.setData({
      'arr.sha': e.detail.value
    })
  },
  submit (e) {
    this.setData({
      'test.test' : '2222'
    })
    let a = Object.values(this.data.arr)
    a.forEach((item,index) => {
      if(item === '') a[index] = 0
      else a[index] = Number(a[index])
    })
    let total = 0
    a.forEach(item => {
      total += item
    })
    a.forEach((item, index) => {
      a[index] = ((Number(item) / total) * Number(this.data.collect_total)).toFixed(2)
    })
    let clone = []
    let name = Object.keys(this.data.arr)
    name.forEach((item, index) => {
      clone.push({
        value:0,
        label:item
      })
    })
    a.forEach((item, index) => {
      clone[index].value  = item
    })
    this.setData({
      showlist:true,
      show_arr:clone
    }
    )
    this.showModal(e)
  },
});
