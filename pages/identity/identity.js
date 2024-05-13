const app = getApp()
const util = require('../../utils/util.js')
Page({
  data: {
    base64Code: ''
  },

  onLoad(options) {
    let phone = util.getStorageObj('phone')
    if (phone == null || phone == '') {
      wx.showToast({
        title: '请先登录',
        icon: 'none',
        duration: 1500
      })
      return
    }
    let that = this
    util.httpGet("http://localhost:8090/express/v1/identifier?phone=" + phone, function (r) {
      if (r.code == 0) {
        that.data.base64Code = 'data:image/jpeg;base64,' + r.data.replace(/[\r\n]/g, "")
        that.setData(that.data)
      } else {
        wx.showToast({
          title: r.msg,
          icon: 'none',
          duration: 1500
        })
      }
    })
  },

  onReady() {

  },

  show() {

  },
})