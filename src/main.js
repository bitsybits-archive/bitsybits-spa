import Vue from 'vue'
import App from './App.vue'
import 'ace-builds/src-noconflict/ace.js'
import 'ace-builds/src-noconflict/mode-lisp.js'
import 'ace-builds/src-noconflict/theme-tomorrow.js'

new Vue({
  el: '#app',
  render: h => h(App)
})
