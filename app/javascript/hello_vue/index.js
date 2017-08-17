/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> and
// <%= stylesheet_pack_tag 'hello_vue' %> to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

import Vue from 'vue'
import store from './store'
import moment from 'moment-timezone'
moment.tz.setDefault('UTC')
Object.defineProperty(Vue.prototype, '$moment', { get() { return this.$root.moment } })
// import Vuex from 'vuex'
import TurbolinksAdapter from 'vue-turbolinks'

import App from './App.vue'

Vue.use(TurbolinksAdapter)
// Vue.use(Vuex)

document.addEventListener('turbolinks:load', () => {
  // const app = new Vue(App).$mount('hello-vue')
  const app = new Vue({
    el: 'hello-vue',
    render: h => h(App),
    data: {
      moment
    },
    // store,
    components: {
      App
    }
  })
})
