<template>
  <div class="wrapper">
    <h3>{{title}}</h3>
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
        <el-date-picker
          type="date"
          v-model="userInfo.birth"
          value-format="yyyy-MM-dd"
          placeholder="选择日期"
        ></el-date-picker>
      </el-form-item>
      <el-form-item size="small" label="手机" prop="phone">
        <el-input v-model="userInfo.phone" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item size="small" label="邮箱" prop="email">
        <el-input v-model="userInfo.email" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item size="small" label="备注" prop="remark">
        <el-input
          type="textarea"
          rows="3"
          resize="none"
          v-model="userInfo.remark"
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
import { addUserInfo, getUserInfo, updateUserInfo } from "@/api/api";
import {
  checkNumber,
  checkEmail,
  checkPhone,
  checkName
} from "@/util/validator.js";
export default {
  name: "",
  data() {
    return {
      title: '新增信息',
      userInfo: {
        name: "",
        age: "",
        sex: "",
        height: "",
        weight: "",
        birth: "",
        phone: "",
        email: "",
        remark: ""
      },
      userInfoRules: {
        name: [
          {
            required: true,
            validator: checkName,
            trigger: "blur"
          }
        ],
        age: [
          {
            required: true,
            message: "年龄不能为空"
          },
          { validator: checkNumber, trigger: "blur" }
        ],
        sex: [{ required: true, message: "请选择性别", trigger: "blur" }],
        height: [
          {
            required: true,
            message: "身高不能为空"
          },
          {
            validator: checkNumber,
            trigger: "blur"
          }
        ],
        weight: [
          {
            required: true,
            message: "体重不能为空"
          },
          {
            validator: checkNumber,
            trigger: "blur"
          }
        ],
        birth: [
          {
            type: "string",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        phone: [
          {
            required: true,
            message: "手机不能为空"
          },
          {
            validator: checkPhone,
            trigger: "blur"
          }
        ],
        email: [
          {
            required: true,
            message: "请输入邮箱地址"
          },
          {
            trigger: "blur",
            validator: checkEmail
          }
        ],
        remark: []
      }
    };
  },
  created() {
    if(this.$route && this.$route.params && this.$route.params.userInfoID){
      let userInfoID = this.$route.params.userInfoID;
      this.title = "编辑信息"
      this.getUserInfo({userInfoID})
    }
  },
  methods: {
    addUserInfo() {
      // console.log(this.userInfo);
      addUserInfo(this.userInfo).then(res => {
        if(res.code === 200){
          this.resetForm('userInfoForm')
        }
      });
    },
    updateUserInfo(){
      updateUserInfo(this.userInfo).then( res => {
        if(res.code === 200){
          this.resetForm('userInfoForm');
          this.$router.push({path: '/react'})
        }
      })
    },
    getUserInfo(params){
      getUserInfo(params).then( res => {
        if(res.code === 200){
          let userInfo = this.userInfo;
          for(let item in userInfo){
            userInfo[item] = res.data[0][item]
          }
          this.userInfo = userInfo;
          this.userInfo._id = res.data[0]._id;
        }
      })
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if(this.$route && this.$route.params && this.$route.params.userInfoID){
            this.updateUserInfo();
          }else{
            this.addUserInfo();
          }
        } else {
          console.log("error submit!!");
          return false;
        }
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
  h3 {
    font-weight: normal;
    font-size: 14px;
    margin-bottom: 20px;
  }
  .el-form {
    width: 40%;
  }
}
</style>