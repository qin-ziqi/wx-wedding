Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        isPlay: true
    },

    /**
     * 组件所在页面的生命周期
     */
    pageLifetimes: {
        /**
         * 组件所在的页面被展示时执行
         * @desc status
         * 0 暂停中
         * 1 播放中
         * 2 没有音乐播放
         */
        show() {
            const that = this;
            wx.getBackgroundAudioPlayerState({
                success(res) {
                    const status = res.status;
                    if (status === 0 || status === 2) {
                        that.setData({
                            isPlay: false
                        })
                    }
                    if (status === 1) {
                        that.setData({
                            isPlay: true
                        })
                    }
                }
            })
        }
    },

    /**
     * 组件的方法列表
     */
    methods: {
        /**
         * 背景音乐状态变化
         */
        bgmChange() {
            if (this.data.isPlay) {
                this.setData({
                    isPlay: false
                })
                const backgroundAudioManager = wx.getBackgroundAudioManager()
                backgroundAudioManager.pause()
            } else {
                this.setData({
                    isPlay: true
                })
                const backgroundAudioManager = wx.getBackgroundAudioManager()
                backgroundAudioManager.play()
            }
        }
    }
})