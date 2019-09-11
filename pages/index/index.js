//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/static/img/banner1.jpg',
      '/static/img/banner2.jpg',
      '/static/img/banner3.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  onLoad: function () {
  },
  scanCodeFun() {
    wx.scanCode({
      success: (res) => {
        console.log(1,res)
      }
    })
  },
})
