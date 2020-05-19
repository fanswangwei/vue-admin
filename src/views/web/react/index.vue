<template>
  <div>
    <el-table :data="userInfoList" border style="width: 100%">
      <el-table-column prop="name" align="center" label="名称"></el-table-column>
      <el-table-column prop="_id" align="center" label="ID"></el-table-column>
      <!-- <el-table-column
        prop="phone"
        align="center"
        label="手机">
      </el-table-column>
      <el-table-column
        prop="email"
        align="center"
        label="邮箱">
      </el-table-column>-->
      <el-table-column prop="remark" align="center" label="备注"></el-table-column>
      <el-table-column align="center">
        <template slot-scope="scope">
          <el-button
            type="primary"
            size="small"
            @click="$router.push({name: 'vue', params: {userInfoID: scope.row._id}})"
          >编辑</el-button>
          <el-button size="small" @click="deleteUserInfo(scope)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { getUserInfo, deleteUserInfo } from "@/api/api";
export default {
  name: "",
  data() {
    return {
      userInfoList: []
    };
  },
  created() {
    this.getUserInfo();
  },
  methods: {
    getUserInfo() {
      // getUserInfo().then(res => {
      //   if (res.code === 200) {
      //     this.userInfoList = res.data;
      //   }
      // });
    },
    deleteUserInfo(scope) {
      // deleteUserInfo({userInfoID: scope.row._id}).then( res => {
      //   if(res.code === 200){
      //     this.getUserInfo();
      //   }
      // })
    }
  }
};
</script>
<style lang='scss' scoped>
</style>