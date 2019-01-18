//app.js
const _ = require('/utils/util')

App({
    onLaunch: function() {
        wx.cloud.init({
            env: 'dev-38f534',
            traceUser: true
        })

        this.checkUpdates()
        this.getUserInfo()
        this.getBgmUrl()
    },

    /**
     * 检测版本更新
     */
    checkUpdates() {
        const updateManager = wx.getUpdateManager()
        updateManager.onUpdateReady(function() {
            wx.showModal({
                title: '更新提示',
                content: '新版本已经准备好，是否重启应用？',
                success(res) {
                    if (res.confirm) {
                        updateManager.applyUpdate()
                    }
                }
            })
        })
    },

    /**
     * 获取用户登录信息
     */
    getUserInfo() {
        // 调用云函数
        wx.cloud.callFunction({
            name: 'login',
            data: {},
            success: res => {
                console.log('[云函数] [login] user openid: ', res.result.openid)
                this.globalData.openid = res.result.openid
            },
            fail: err => {
                console.error('[云函数] [login] 调用失败', err)
            }
        })
    },

    /**
     * 获取背景音乐
     */
    getBgmUrl() {
        const promise = new Promise((resolve, reject) => {
            wx.cloud.getTempFileURL({
                fileList: ['6465-dev-38f534/audio/bgm.mp3'],
                success: res => {
                    const bgmUrl = res.fileList[0].tempFileURL
                    resolve(bgmUrl)
                },
                fail: msg => {
                    reject(msg)
                }
            })
        })

        promise.then(url => {
            const backgroundAudioManager = wx.getBackgroundAudioManager()
			// backgroundAudioManager.src = url
            backgroundAudioManager.title = 'shape of you'
        }).catch(msg => {
            _.errorHandler('背景音乐获取失败')
        })
    },

    /**
     * 全局信息
     */
    globalData: {
        openid: null
    }
})