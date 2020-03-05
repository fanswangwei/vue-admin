<template>
  <div class="page fn-clear">
    <div class="info">
      <p>{{message}}</p>
    </div>
    <div class="imgBox fn-clear">
      <img :src="require('@assets/images/no-data.png')" alt srcset />
    </div>
  </div>
</template>
<script>
export default {
  name: "default_404",
  data() {
    return {
      message: ""
    };
  },
  created() {
    let message = this.$route.query.info;
    this.message = message ? decodeURIComponent(message) : "找不到此页面";
  }
};
</script>
<style lang="scss" scoped>
.page {
  position: absolute;
  width: 100%;
  top: 30%;
}
.imgBox {
  margin: 0 auto;
  width: 200px;
  height: 100px;
}
.info {
  margin-bottom: 50px;
  font-size: 30px;
  font-weight: bolder;
  text-align: center;
  color: #4786ff;
}
.info-404 {
  letter-spacing: 12px;
  font-size: 88px;
}
</style>
