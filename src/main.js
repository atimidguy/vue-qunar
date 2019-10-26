import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import FastClick from 'fastclick';
import VueAwesomeSwiper from 'vue-awesome-swiper';

import 'swiper/dist/css/swiper.css';
import 'styles/reset.css';
import 'styles/border.css';
import 'styles/iconfont.css';

Vue.config.productionTip = false;
FastClick.attach(document.body);
Vue.use(VueAwesomeSwiper);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
