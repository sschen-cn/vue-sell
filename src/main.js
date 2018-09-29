// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';
import VueRouter from 'vue-router';
import VueRsource from 'vue-resource';

import 'common/stylus/index.styl';

// Vue.config.productionTip = false;

/* eslint-disable no-new */

Vue.use(VueRouter);
Vue.use(VueRsource);

const routes = [
  {path: '/goods', component: goods},
  {path: '/ratings', component: ratings},
  {path: '/seller', component: seller},
  // 配置根路由
  {path: '/', redirect: '/goods'}
];

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
});

new Vue({
  router,
  components: {App},
  data: {
    eventHub: new Vue()
  }
}).$mount('#app');
