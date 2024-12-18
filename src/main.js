import Vue from 'vue'
import App from './App.vue'
import store from './store';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BootstrapVue, BootstrapVueIcons}  from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'leaflet/dist/leaflet.css';

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
