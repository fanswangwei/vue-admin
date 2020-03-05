import Vue from "vue";
import VueRouter from "vue-router";
import Nav from "@/components/nav";
import WEB from "./modules/web";
import NODE from "./modules/node";
Vue.use(VueRouter)

const routers = new VueRouter({
  mode: 'history',
  routes: [
    {
      name: "web",
      path: "/web",
      meta: { title: "前端" },
      redirect: '/vue',
      component: Nav,
      children: [...WEB]
    },
    {
      name: "node",
      path: "/node",
      meta: { title: "后端" },
      redirect: '/koa',
      component: Nav,
      children: [...NODE]
    },
    {
      name: "web",
      path: '/',
      redirect: '/web' // 重定向
    },
    {
      name: "404",
      path: '/404',
      component: Nav
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
})

export default routers;