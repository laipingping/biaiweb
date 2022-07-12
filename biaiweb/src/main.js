import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import axios from 'axios'

// Vue.config.productionTip = false;

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//语言
// import locale from 'element-ui/lib/locale/lang/en'
// Vue.use(ElementUI, { locale })
// // 设置语言
// locale.use(lang)
// Vue.component(Button.name, Button)
// Vue.component(Select.name, Select)

//轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/swiper-bundle.css'
import 'swiper/dist/css/swiper.css'
// import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper);

//视频
import VideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
Vue.use(VideoPlayer)

// import VueLazyload from 'vue-lazyload'
// Vue.use(VueLazyload, {
//   //完全显示的时候加载
//   preLoad: 1,
//   //失败时显示的图片
//   error: require('./assets/img/error.png'),
//   //加载时显示的GIF图
//   loading: require('./assets/img/loading.gif'),
//   //尝试加载几次
//   attempt: 1
// });

// Vue.config.productionTip = false

// //设置超时时间
// axios.defaults.timeout = 5000
// 设置api地址
// 全局定义axios
// axios.defaults.baseURL = 'http://shkjgw.shkjem.com/api/'
// Vue.prototype.$http = axios

// 图片服务器地址
// Vue.prototype.imgserver = 'http://shkjgw.shkjem.com/'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')