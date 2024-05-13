const app = getApp()
const util = require('../../utils/util.js')

Page({
  data: {
    phone: "",
    pass: "",
    nickname: ""
  },

  onLoad(options) {

  },

  onReady() {

  },

  doRegister() {
    util.httpPost("http://localhost:8090/express/v1/register", {
      "phone": this.data.phone,
      "pass": this.data.pass,
      "nickname": this.data.nickname
    }, function (r) {
      console.log(r)
      if (r.code == 0) {
        wx.showToast({
          title: '操作成功！', // 标题
          icon: 'success', // 图标类型，默认success
          duration: 1500 // 提示窗停留时间，默认1500ms
        })
        util.redirect({
          url: 'login',
        })
      } else {
        wx.showToast({
          title: 'error!',
          icon: 'none',
          duration: 1500
      })
      }


    })
  }


})