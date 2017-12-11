import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import { Config } from './libs/other'

Vue.use(VueResource);

export const bus = new Vue();

new Vue({
  el: '#app',
  data: Config,
  render: h => h(App)
})
