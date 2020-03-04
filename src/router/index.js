import Vue from "vue";
import VueRouter from "vue-router";
import Nav from "@/components/nav";
Vue.use(VueRouter)

const routers = new VueRouter({
  mode: 'history',
  routes: [
    {
      name: "test",
      path: "/",
      meta: { title: "test" },
      alias: '/test', // 别名
      component: resolve => require(["@/components/HelloWorld"], resolve)
    },
    {
      name: "test",
      path: '/test',
      redirect: '/' // 重定向
    },
    {
      name: "nav",
      path: '/nav',
      component: Nav
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from, savedPosition)
    return { x: 0, y: 0 };
  }
})

export default routers;