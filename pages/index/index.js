const app = getApp()
const util= require('../../utils/util.js')
Page({
  data: {

  },
  onLoad(options) {
  },
  onShow() {
    let phone = util.getStorageObj('phone')
    if (phone == null || phone == '') {
      return
    }
    let that = this
    util.httpGet("http://localhost:8090/express/v1/parcels/send?phone=" + phone, function (r) {
      if (r.code == 0) {
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
  toGetPage() {
    util.redirect({
      url: 'list',
    })
  }, 
  toPostPage() {
    util.redirect({
      url: 'post',
    })
  },
  toIDPage() {
    util.redirect({
      url: 'identity',
    })
  }
})
