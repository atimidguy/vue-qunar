import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// remove 300ms delay
// import FastClick from 'fastclick';
import VueAwesomeSwiper from 'vue-awesome-swiper';
// import 'default-passive-events'; // clear [Violation]:Added non-passive event listener to a scroll-blocking 'touchmove' event.
import 'swiper/dist/css/swiper.css';
import 'styles/reset.css';
import 'styles/border.css';
import 'styles/iconfont.css';

Vue.config.productionTip = false;

// FastClick.attach(document.body);

Vue.use(VueAwesomeSwiper);

// event bus

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
