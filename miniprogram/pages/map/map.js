Page({

    /**'';
     * 页面的初始数据
     */
    data: {
		welcomeSrc: 'cloud://dev-38f534.6465-dev-38f534/images/welcome.jpg',
        markers: [{
            id: 0,
            latitude: 36.08092,
            longitude: 113.82946,
            iconPath: '/asset/images/mark.svg',
            width: 30,
            height: 30
        }]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function() {

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
    },

	/**
	 * 联系新郎
	 */
	callMale(){
		wx.makePhoneCall({
			phoneNumber: '17621373486'
		})
	},

	/**
	 * 联系新娘
	 */
	callFemale() {
		wx.makePhoneCall({
			phoneNumber: '13137186780'
		})
	},
})