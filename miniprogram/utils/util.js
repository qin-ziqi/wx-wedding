/*
 * 工具类方法
 * Written by Qinziqi
 */

module.exports = {
    /**
     * 错误提醒
     * @param {string} msg 错误提示信息
     * @return {void}
     */
    errorHandler: msg => {
        wx.showToast({
            title: msg,
            icon: 'none',
            duration: 1000
        })
    },

    /**
     * 判断对象是否为空
     * @param {Object} obj 需要检测的对象
     * @return {boolean} 检测的结果
     */
    isEmptyObject: obj => {
        for (let i in obj) {
            return false
        }
        return true
    },

    /**
     * 格式化日期
     * @param {Date} date 传入的日期对象
     * @param {string} type 所需要的日期类型 例：'yyyy-MM-dd'
     * @return {string} 格式化后的日期 例：'2019-01-15'
     */
    formatDate(date, type) {
        if (isNaN(date.getTime())) {
            return '--';
        }

        const o = {
            'y+': date.getFullYear(),
            'M+': date.getMonth() + 1,
            'd+': date.getDate(),
            'h+': date.getHours(),
            'm+': date.getMinutes(),
            's+': date.getSeconds(),
            // 季度
            'q+': Math.floor((date.getMonth() + 3) / 3),
            // 毫秒
            'S+': date.getMilliseconds()
        }

        for (let k in o) {
            if (new RegExp(`(${k})`).test(type)) {
                type = type.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
            }
        }
        return type;
    },

    /**
     * 获取云存储中的图片链接
     * @param {Array} fileList 要获取链接的图片名称数组
     * @return {promise} 
     */
    getCloudUrl(fileList) {
        return new Promise((resolve, reject) => {
            wx.cloud.getTempFileURL({
                fileList: fileList,
                success: res => {
                    const urlList = res.fileList
                    resolve(urlList)
                },
                fail: msg => {
                    reject(msg)
                }
            })
        })
    }

}