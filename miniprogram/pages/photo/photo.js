Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		isVertical: false,
		isIndicatorDots: true,
		imgs: []
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.getImageUrl()
	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	},

	/**
     * 获取照片链接
     */
	getImageUrl() {
		const db = wx.cloud.database()
		const photo = db.collection('photo')
		photo.get({
			success: res=> {
				this.setData({
					imgs: res.data
				})
			}
		})
	}
})