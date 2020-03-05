<template>
  <div class="wapper">
    <div class="logo">
      <img :src="logo" alt="">
    </div>
    <div class="header-nav">
      <el-menu
        :default-active="activeNav"
        mode="horizontal"
        :router="true"
        class="top-nav">
        <el-menu-item index="web" :route="{name: 'web'}">
          <i class="el-icon-tickets"></i>
          <span slot="title">前端</span>
        </el-menu-item>
        <el-menu-item index="node" :route="{name: 'node'}">
          <i class="el-icon-setting"></i>
          <span slot="title">后端</span>
        </el-menu-item>
      </el-menu>
      <div class="center">
        <el-dropdown>
          <span class="el-dropdown-link">
            <img :src="require('@assets/svg/center.svg')" alt="">
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "appHeader",
  props: {},
  data() {
    return {
      activeNav: 'web',
      logo: require('@assets/images/wang.png')
    };
  },
  created() {
    if(this.$route.meta && this.$route.meta.parent){
      this.activeNav = this.$route.meta.parent
    }else {
      this.activeNav = this.$route.name
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.wapper {
  height: 100%;
  background: #fff;
  .logo {
    float: left;
    height: 60px;
    border-bottom: 1px solid #e6e6e6;
    img {
      height: 100%;
      width: 179px;
    }
  }
  .header-nav {
    margin-left: 180px;
    position: relative;
    .top-nav {
      height: 60px;
      .el-menu-item {
        height: 59px;
      }
    }
    .center {
      position: absolute;
      top: 14px;
      right: 20px;
    }
  }
}
</style>
