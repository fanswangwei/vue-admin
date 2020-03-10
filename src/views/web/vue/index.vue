<template>
  <div class="wrapper">
    <el-form
      :model="userInfo"
      ref="userInfoForm"
      :rules="userInfoRules"
      label-width="100px"
      class="userForm"
    >
      <el-form-item size="small" label="姓名" prop="name">
        <el-input type="name" v-model="userInfo.name" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item size="small" label="年龄" prop="age">
        <el-input v-model="userInfo.age" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item size="small" label="性别" prop="sex">
        <el-select v-model="userInfo.sex" placeholder="请选择">
          <el-option label="男" value="man"></el-option>
          <el-option label="女" value="woman"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item size="small" label="身高" prop="height">
        <el-input v-model="userInfo.height" auto-complete="off">
          <template slot="append">cm</template>
        </el-input>
      </el-form-item>
      <el-form-item size="small" label="体重" prop="weight">
        <el-input v-model="userInfo.weight" auto-complete="off">
          <template slot="append">kg</template>
        </el-input>
      </el-form-item>
      <el-form-item size="small" label="生日" prop="birth">
        <el-date-picker type="date" v-model="userInfo.birth" value-format="yyyy-MM-dd" placeholder="选择日期"></el-date-picker>
      </el-form-item>
      <el-form-item size="small" label="手机" prop="phone">
        <el-input v-model="userInfo.phone" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item size="small" label="邮箱" prop="email">
        <el-input v-model="userInfo.email" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item size="small" label="备注" prop="remak">
        <el-input
          type="textarea"
          rows="3"
          resize="none"
          v-model="userInfo.remak"
          auto-complete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('userInfoForm')">提交</el-button>
        <el-button @click="resetForm('userInfoForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { addUserInfo } from "@/api/api";
export default {
  name: "",
  data() {
    return {
      userInfo: {
        name: "",
        age: "",
        sex: "",
        height: "",
        weight: "",
        birth: "",
        phone: "",
        email: "",
        remak: ""
      },
      userInfoRules: {
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 2, max: 10, message: "长度在 2 到 10 个字符", trigger: "blur" }
        ],
        age: [{ required: true, message: "年龄不能为空" }],
        sex: [{ required: true, message: "请选择性别" }],
        height: [{ required: true, message: "身高不能为空" }],
        weight: [{ required: true, message: "体重不能为空" }],
        birth: [
          {
            type: "string",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        phone: [{ required: true, message: "手机不能为空" }],
        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: "blur,change"
          }
        ],
        remak: []
      }
    };
  },
  created() {
    // this.testHealth();
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.addUserInfo();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    addUserInfo() {
      console.log(this.userInfo);
      addUserInfo(this.userInfo).then(res => {
        console.log(res);
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style lang='scss' scoped>
.wrapper {
  .el-form {
    width: 40%;
  }
}
</style>