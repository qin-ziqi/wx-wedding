Page({

    /**
     * 页面的初始数据
     */
    data: {
        isVertical: true,
        isIndicatorDots: false,
        imgs: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function() {
        this.getImageUrl();
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    },

    /**
     * 获取照片链接
     */
    getImageUrl() {
        const db = wx.cloud.database()
        const photo = db.collection('photos')
        photo.get({
            success: res => {
                console.log(res)
                const list = [res.data[2]]
                this.setData({
                    imgs: list
                })
            }
        })
    }
})