import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import City from '../views/City.vue';
import Detail from '../views/Detail.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    component: Home
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/city',
    name: 'city',
    component: City
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
  // scrollBehavior (to, from, savedPosition)
});

export default router;
