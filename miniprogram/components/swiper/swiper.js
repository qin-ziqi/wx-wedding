Component({
    /**
     * 组件的属性列表
     */
    properties: {
		_vertical: Boolean
    },

    /**
     * 组件的初始数据
     */
    data: {
        interval: 2500,
        duration: 500,
		vertical: false,
        imgUrl: [
            '/asset/images/bless.png',
            '/asset/images/invite.png',
            '/asset/images/map.png',
            '/asset/images/photo.png',
            '/asset/images/message.png'
        ]
	},

    /**
     * 组件所在页面的生命周期
     */
	pageLifetimes: {
        /**
         * 组件所在的页面被展示时执行
         */
		show() {
			console.log(this.properties._vertical)
			this.se
		}
	},

    /**
     * 组件的方法列表
     */
    methods: {

    }
})