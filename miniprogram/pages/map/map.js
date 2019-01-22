// miniprogram/pages/map/map.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        markers: [{
            id: 0,
            latitude: 36.08092,
            longitude: 113.82946,
            iconPath: '/asset/images/mark.svg',
            width: 20,
            height: 20
        }]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.setData({

        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    },

    /**
     * 地图点击
     */
    tapMap() {
        const location = this.data.markers[0]
        wx.openLocation({
			latitude: location.latitude,
			longitude: location.longitude,
            name: '中州国际饭店',
            address: '安阳市林州市红旗渠大道与太行路交汇处'
        })
    }
})