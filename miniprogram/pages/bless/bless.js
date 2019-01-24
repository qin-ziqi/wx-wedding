const app = getApp().globalData
const _ = require('../../utils/util.js')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        blessCount: 0,
        userInfo: null
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.getBlessList()
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    },

    /**
     * 获取祝福列表
     */
    getBlessList() {
        const db = wx.cloud.database()
        const bless = db.collection('bless')
        bless.get({
            success: res => {
                console.log(res)
            }
        })
    },

    /**
     * 获取用户信息
     */
    getUserInfo(e) {
        if (e.detail.userInfo) {
			this.setData({
                userInfo: e.detail.userInfo
            })
            this.checkIsExist()
        }
    },

    /**
     * 检测祝福是否已存在
     */
    checkIsExist() {
        const db = wx.cloud.database()
        const bless = db.collection('bless')
        bless.where({
            _openid: app.openid
        }).get({
            success: res => {
                if (res.data.length > 0) {
                    _.errorHandler('您已经送过祝福了~')
                } else {
                    this.addBless()
                }
            }
        })
    },

    /**
     * 新增祝福
     */
    addBless() {
        const db = wx.cloud.database()
        const bless = db.collection('bless')
        console.log(this.userInfo)
        bless.add({
            data: {
                user: this.userInfo
            },
            success: res => {
                _.errorHandler('祝福成功~')
            }
        })
    }
})