// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return {
          date: util.formatTime(new Date(log)),
          timeStamp: log
        }
      })
    })
    console.log(this.data.logs)
  },
  batchCollectCartSku:function() {
    wx.showToast({
      title: '点击了编辑',
    })
  },
  batchDeleteCartSku:function() {
    wx.showToast({
      title: '点击了删除',
    })
  },
  // ListTouch触摸开始
  ListTouchStart(e) {
    this.setData({
      ListTouchStart: e.touches[0].pageX
    })
  },

  // ListTouch计算方向
  ListTouchMove(e) {
    this.data.ListTouchDirection =  e.touches[0].pageX - this.data.ListTouchStart > -50 ? 'right' : 'left';
  },

  // ListTouch计算滚动
  ListTouchEnd(e) {
    if (this.data.ListTouchDirection == 'left') {
      this.setData({
        modalName: e.currentTarget.dataset.target
      })
    } else {
      this.setData({
        modalName: null
      })
    }
    this.data.ListTouchDirection = null;
  },
})
