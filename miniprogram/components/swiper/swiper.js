Component({
    /**
     * 组件的属性列表
     */
    properties: {
        imgs: Array,
        vertical: Boolean,
		indicatorDots: Boolean
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

    },

    /**
     * 组件的方法列表
     */
    methods: {
		swiperChange(e){
			// console.log(e)
		}
    }
})