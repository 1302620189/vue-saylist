import Vue from 'vue'
import App from './App'
import router from './router'
import myheader from '../src/components/myheader'
import myfooter from '../src/components/myfooter'
import axios from 'axios'
Vue.prototype.$http = axios;
Vue.component('myheader', myheader);
Vue.component('myfooter', myfooter);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})