import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Routes from './routes'
import { store } from './store/store'

import 'ace-builds/src-noconflict/ace.js'
import 'ace-builds/src-noconflict/mode-lisp.js'
import 'ace-builds/src-noconflict/theme-tomorrow.js'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: Routes,
  linkExactActiveClass: "active"
});



new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
  store: store
})
