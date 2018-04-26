// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// Socket IO
import VueSocketio from 'vue-socket.io'
Vue.use(VueSocketio, 'https://m2w2.herokuapp.com/')

// Material design
import './../node_modules/materialize-css/dist/css/materialize.css'
import './../node_modules/materialize-css/dist/js/materialize.min.js'
import './assets/fontawesome-free-5.0.10/web-fonts-with-css/css/fontawesome-all.min.css'

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
