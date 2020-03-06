<template>
  <div>vue</div>
</template>
<script>
import { testHealth } from "@/api/api";
export default {
  name: "",
  data() {
    return {};
  },
  created() {
    this.testHealth();
  },
  methods: {
    testHealth() {
      testHealth().then(res => {
        console.log(res);
      });
    }
  }
};
</script>
<style lang='scss' scoped>
</style>