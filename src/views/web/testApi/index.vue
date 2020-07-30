<template>
  <div>
    <h3>测试接口</h3>
    <br/>
    <el-upload
      class="upload-demo"
      action="http://127.0.0.1:4004/upload/file"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      :show-file-list="false"
      :on-exceed="handleExceed">
      <el-button size="small" type="primary">点击上传</el-button>
    </el-upload>
  </div>
</template>
<script>
import { cityQuery } from "@/api/api";
export default {
  name: '',
  data() {
    return {
      fileList: []
    };
  },
  created() {
    // this.cityQuery()
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${ file.name }？`);
    },
    cityQuery(){
      cityQuery().then( res => {
        console.log(res)
      })
    }
  }
};
</script>
<style lang='scss' scoped>
  
</style>