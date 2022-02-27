<template>
  <el-form class="login" ref="formRef" :model="form" label-width="120px">
    <el-form-item>
      <h3>用户名</h3>
      <el-input v-model="username"></el-input>
    </el-form-item>

    <el-form-item>
      <h3>密码</h3>
      <el-input v-model="password"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="save">登录</el-button>
    </el-form-item>
    <el-form-item>
      <el-checkbox v-model="checked2">记住密码</el-checkbox>
      <el-checkbox v-model="checked2">记住账户</el-checkbox>
    </el-form-item>
  </el-form>

  <!-- <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>

    <el-col :span="12">
      

      <div class="grid-content bg-purple"></div
    ></el-col> -->
</template>

<script>
import request from "@/utils/request";
export default {
  data() {
    return {
      username: "",
      password: "",
      str: "",
    };
  },
  methods: {
    save() {
      request
        .post("/living/user/login/byPassword", {
          username: this.username,
          password: this.password,
        })
        .then((res) => {
          console.log("test1");
          console.log(res);
          this.str = res.data;
          console.log(this.str);
        });
      if (this.username == "xxy") {
        this.$router.push("/main");
      }
    },
  },
};
</script>
<style scoped>
.login {
  margin-top: 150px;
  margin-left: 450px;
  padding-right: 100px;
  border: 1px solid #a1a1a1;
  border-radius: 25px;
  background-color: transparent;
}
</style>