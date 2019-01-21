Component({
    /**
     * 组件的属性列表
     */
    properties: {
        imgs: Array,
        vertical:  Boolean
    },

    /**
     * 组件的初始数据
     */
    data: {
        interval: 2500,
        duration: 500
    },

    /**
     * 组件所在页面的生命周期
     */
    pageLifetimes: {
        /**
         * 组件所在的页面被展示时执行
         */
        show() {

        }
    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})