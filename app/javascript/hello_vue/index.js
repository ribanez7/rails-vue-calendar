import Vue from 'vue'
import Vuex from 'vuex';
// import store from './store'
import moment from 'moment-timezone'
import Axios from 'axios';
import TurbolinksAdapter from 'vue-turbolinks'

moment.tz.setDefault('UTC')
Object.defineProperty(Vue.prototype, '$moment', { get() { return this.$root.moment } })

Vue.use(TurbolinksAdapter)
Vue.use(Vuex)

import App from './App.vue'

document.addEventListener('turbolinks:load', () => {
    // const app = new Vue(App).$mount('hello-vue')
    const node = document.querySelector('hello-vue')

    if (node != null) {
	const props = JSON.parse(node.getAttribute('data'))
	const app = new Vue({
	    el: 'hello-vue',
	    render: h => h(App, { props }),
	    data: {
		moment
	    },
	    // store,
	    // components: {
	    // 	App
	    // }
	})
    }
})
