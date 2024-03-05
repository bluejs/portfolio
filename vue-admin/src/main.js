import Vue from 'vue'
import { i18n } from './langs'
import Cookies from 'js-cookie'
import Element from 'element-ui'
import './styles/element-variables.scss'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import './icons'
import './permission'
import './utils/error-log'

import * as filters from './filters' // global filters

if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

Vue.use(Element, {
  size: Cookies.get('size') || 'medium'
})

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  i18n,
  router,
  store,
  render: h => h(App)
})
