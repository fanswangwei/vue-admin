import Vue from 'vue'
import App from './App.vue'
import Element from "element-ui";
import router from '@/router'
import "element-ui/lib/theme-chalk/index.css";
import "@/scss/element-variables.scss";
import "@/scss/base.scss";
Vue.use(Element)

// 自定义组件
import WwTable from "@/components/wwTable";
Vue.use(WwTable)

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {  // 如果未匹配到路由
    console.log(to.matched);
    // from.path ? next({ path: from.path }) : next({ name: 'default_404' });   //如果上级也未匹配到路由则跳转404，如果上级能匹配到则转上级路由
    next({ name: 'default_404' });   //如果未匹配到路由则跳转404
  } else {
    next();    //如果匹配到正确跳转
  }
})
new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
})
