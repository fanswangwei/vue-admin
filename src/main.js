import Vue from 'vue'
import App from './App.vue'
import Element from "element-ui";
import router from '@/router'
import "@/scss/base.scss";

Vue.use(Element)

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
})
