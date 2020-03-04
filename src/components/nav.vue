<template>
  <div class="container">
    <div class="header"></div>
    <div class="body">
      <div class="nav">

      </div>
      <div class="main">

      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
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
    background: #aaa;
  }
  .body {
    position: relative;
    margin-top: 60px;
    height: calc(100% - 60px);
    .nav {
      position: fixed;
      top: 0;
      left: 0;
      width: 180px;
      height: 100%;
      background: #888;
    }
    .main {
      position: relative;
      margin-left: 180px;
      height: 100%;
      width: calc(100% - 180px);
      background: #666;

    }
  }
}
</style>