<template>
  <div>
    <el-form>
      <el-input v-model="username"></el-input>
      <el-input v-model="password"></el-input>
    </el-form>
    <!-- <form :model="form" method="post">
      用户名/学号<br />
      <input type="text" name="username" /><br />
      密码<br />
      <input type="text" name="password" />
    </form>
    <input type="checkbox" />记住账号<input type="checkbox" />记住密码<br /> -->
    <button type="submit" @click="save">立即登录</button>
  </div>
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
    },
  },
};
</script>

<style scoped></style>