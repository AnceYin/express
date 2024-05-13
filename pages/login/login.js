const app = getApp()
const util = require('../../utils/util.js')

Page({
  data: {
    phone: "",
    pass: "",
  },
  onLoad(options) {},

  onReady() {

  },
  toRegister() {
    util.redirect({
      url: 'register',
    })
  },
  doLogin() {
    let that = this
    util.httpPost("http://localhost:8090/express/v1/login", {
      "phone": this.data.phone,
      "pass": this.data.pass,
    }, function (r) {
      if (r.code == 0) {
        wx.showToast({
          title: '操作成功！', // 标题
          icon: 'success', // 图标类型，默认success
          duration: 1500 // 提示窗停留时间，默认1500ms
        })
        util.redirect({
          url: 'me',
        })
        util.addStorageObj('islogin', true)
        util.addStorageObj('phone', that.data.phone)
      } else {
        wx.showToast({
          title: r.msg,
          icon: 'none',
          duration: 1500
        })
      }


    })
  }
})