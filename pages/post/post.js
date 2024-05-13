const app = getApp()
const util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userFrom: '',
    userTo: '',
    posTo: '',
    posFrom: '',
    weight: "",
    company: '',
    isDoorTake: "1",
  },
  onLoad(options) {

  },

  doorTakeChange(event) {
    this.setData({
      isDoorTake: event.detail == 1,
    })
    console.log(this.data.isDoorTake);
  },

  doPost() {
    util.httpPost("http://localhost:8090/express/v1/sendParcel", {
      "user_from": this.data.userFrom,
      "user_to": this.data.userTo,
      "pos_from": this.data.posFrom,
      "pos_to": this.data.posTo,
      "weight": this.data.weight,
      "company": this.data.company,
      "is_door_take": this.data.isDoorTake
    }, function (r) {
      if (r.code == 0) {
        wx.showToast({
          title: '操作成功！', // 标题
          icon: 'success', // 图标类型，默认success
          duration: 1500 // 提示窗停留时间，默认1500ms
        })
        // util.redirect({
        //   url: 'index',
        // })
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