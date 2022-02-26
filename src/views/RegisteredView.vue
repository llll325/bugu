<template>
  <div>
    <form :model="form" method="post">
      用户名/学号<br />
      <input type="text" name="username" /><br />
      密码<br />
      <input type="text" name="password" />
    </form>
    <input type="checkbox" />记住账号<input type="checkbox" />记住密码<br />
    <button type="submit" @click="save">立即登录</button>
  </div>
</template>
<script>
import request from "@/utils/request";
export default {
  data() {
    return {
      form: {},
    };
  },
  methods: {
    save() {
      request
        .post("/living/user/login/byPassword", {
          username: "",
          password: "",
        })
        .then((res) => {});
      console.log(res);
    },
  },
};
</script>

<style></style>