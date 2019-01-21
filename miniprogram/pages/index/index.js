Page({

    /**
     * 页面的初始数据
     */
    data: {
		isVertical: true,
		imgs: [],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
		this.getPhotoUrlList();
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
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    },

    /**
     * 获取照片列表
     */
    getPhotoUrlList() {
        const promise = new Promise(resolve => {
            wx.cloud.getTempFileURL({
                fileList: ['/photo/photo-1.jpg', '/photo/photo-2.jpg', '/photo/photo-3.jpg'],
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