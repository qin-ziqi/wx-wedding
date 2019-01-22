// miniprogram/pages/photo/photo.js
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
		this.getPhotoUrlList()
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	},

	/**
     * 获取照片列表
     */
	getPhotoUrlList() {
		const promise = new Promise(resolve => {
			wx.cloud.getTempFileURL({
				fileList: ['/photo/photo-1.jpg', '/photo/photo-2.jpg', '/photo/photo-3.jpg', '/photo/photo-4.jpg', '/photo/photo-5.jpg'],
				success: res => {
					const urlList = res.fileList
					resolve(urlList)
				}
			})
		})

		promise.then(list => {
			this.setData({
				imgs: list
			})
		})
	}
})