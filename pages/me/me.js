const app = getApp()
const util = require('../../utils/util.js')

Page({
  data: {
    islogin: false,
    userInfo: {
      Nickname: '昵称'
    }
  },
  onLoad(options) {

  },

  onReady() {

  },
  onShow() {
    let islogin = util.getStorageObj('islogin')[0]
    if (islogin == null) {
      this.data.islogin = false
    } else {
      this.data.islogin = true
    }
    this.setData(this.data)
    let phone = util.getStorageObj('phone')
    if (phone == null || phone == '') {
      return
    }
    let that = this
    util.httpGet("http://localhost:8090/express/v1/user?phone=" + phone, function (r) {
      if (r.code == 0) {
        console.log(r.data)
        that.data.userInfo = r.data
        that.setData(that.data)
        console.log(that.data.userInfo);
      } else {
        wx.showToast({
          title: 'error!',
          icon: 'none',
          duration: 1500
        })
      }
    })
  },
  tologin() {
    util.redirect({
      url: 'login',
    })
  }
})