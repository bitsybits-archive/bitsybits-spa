import Vue from 'vue'
import VueRouter from 'vue-router'
import VeeValidate from 'vee-validate'
import { Validator } from 'vee-validate';
import App from './App.vue'
import Routes from './routes'
import DB from './store/db'
import { store } from './store/store'

import 'ace-builds/src-noconflict/ace.js'
import 'ace-builds/src-noconflict/mode-lisp.js'
import 'ace-builds/src-noconflict/theme-tomorrow.js'

Validator.extend('exist', {
  getMessage: function(field){ return "Field already exist "},
  validate: function(value, params) {
    return new Promise(function(resolve){
      DB.table(params[0].type)
        .where(params[0].key)
        .equals(value)
        .count()
        .then( function(count) {
          resolve({ valid: count == 0 })
        })
    })
  }
})

Vue.use(VueRouter);
Vue.use(VeeValidate);

const router = new VueRouter({
  mode: 'history',
  routes: Routes,
  linkExactActiveClass: "active"
});



new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
  store: store,
  created(){
    this.$store.dispatch('fetchAll');
  }
})
