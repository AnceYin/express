const app = getApp()
const util = require('../../utils/util.js')

Page({
  data: {
    phone: '',
    list: []
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
    util.httpGet("http://localhost:8090/express/v1/parcels?phone=" + phone, function (r) {
      if (r.code == 0) {
        console.log('success')
        console.log(r.data)
        that.data.list = r.data
        that.setData(that.data)
      } else {
        wx.showToast({
          title: 'error!',
          icon: 'none',
          duration: 1500
        })
      }
    })
  },
  toIDPage() {
    util.redirect({
      url: 'identity',
    })
  }
})