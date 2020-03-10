<template>
  <div class="container">
    <div class="header">
      <AppHeader></AppHeader>
    </div>
    <div class="body">
      <div class="nav">
        <el-menu :default-active="defaultNav" class="left-nav" :router="true">
          <el-menu-item v-for="item in navList" :key="item.name" :route="{name: item.name}" :index="item.name">
            <span slot="title">{{item.name}}</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import AppHeader from "@/components/header";
export default {
  name: "appNav",
  components: {
    AppHeader
  },
  data() {
    return {
      
    };
  },
  computed: {
    navList() {
      let navList = [];
      if(this.$route.meta && this.$route.meta.parent){
        navList = this.filterNav(this.$route.meta.parent);
      }else {
        navList = this.filterNav(this.$route.name);
      }
      return navList
    },
    defaultNav() {
      let defaultNav = 'vue';
      if(this.$route.meta && this.$route.meta.parent){
        defaultNav = this.$route.name
      }else {
        if(this.navList.length > 0){
          defaultNav = this.navList[0].name
        }
      }
      console.log(this.$route.name === defaultNav);
      console.log(defaultNav);
      return defaultNav;
    }
  },
  created() {
    // this.$router 获取vue-router 的实例化对象
    // this.$route 获取当前激活的路由对象，包含当前url解析得到的数据
    // console.log(this.$route);
  },
  methods: {
    // 通过菜单名从route.js中找到对应的路由列表
    filterNav(name){
      let routeList = this.$router.options.routes;
      routeList = routeList.find(item => item.name === name);
      if(routeList.children){
        return routeList.children;
      }
      return []
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #ddd;
  }
  .body {
    position: relative;
    margin-top: 60px;
    height: calc(100% - 60px);
    .nav {
      position: fixed;
      top: 60px;
      left: 0;
      width: 180px;
      height: calc(100% - 60px);
      .el-menu {
        height: 100%;
      }
    }
    .main {
      position: relative;
      margin-left: 180px;
      height: 100%;
      width: calc(100% - 180px);
      padding: 20px;
      background: #fefefe;;
    }
  }
}
</style>