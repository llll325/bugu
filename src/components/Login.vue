<template>
  <div class="login-wrap">
    <h1>Login</h1>
    <el-form
      class="login"
      :rules="rules"
      ref="ruleForm"
      :model="ruleForm"
      label-width="120px"
    >
      <el-form-item prop="username" style="margin-top: 50px" s>
        <el-input
          v-model="ruleForm.username"
          placeholder="用户名"
          clearable
        ></el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input
          v-model="ruleForm.password"
          placeholder="请输入密码"
          show-password
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="Login">登录</el-button>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="checked2">记住密码</el-checkbox>
        <el-checkbox v-model="checked2">记住账户</el-checkbox>
      </el-form-item>
      <el-form-item>
        <router-link class="register" active-class="active" to="/register"
          ><svg
            t="1646474705446"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2734"
            width="200"
            height="200"
          >
            <path
              d="M722.6 645.295c17.497-26.999 9.793-63.072-17.206-80.567-21.997-14.255-45.104-26.406-69.045-36.377 69.66-51.387 114.937-134.006 114.937-227.013 0-155.467-126.483-281.951-281.951-281.951s-281.951 126.483-281.951 281.951c0 92.95 45.223 175.527 114.811 226.919-51.763 21.557-99.309 53.261-140.153 94.103-82.080 82.080-127.284 191.213-127.284 307.292 0 32.174 26.082 58.254 58.254 58.254s58.254-26.080 58.254-58.254c0-175.385 142.685-318.068 318.068-318.068 61.579 0 121.298 17.606 172.699 50.915 27.002 17.498 63.074 9.793 80.567-17.206zM469.334 135.897c91.225 0 165.442 74.218 165.442 165.442s-74.218 165.442-165.442 165.442c-91.225 0-165.442-74.217-165.442-165.442s74.218-165.442 165.442-165.442z"
              p-id="2735"
              fill="#e6e6e6"
            ></path>
            <path
              d="M926.63 743.197h-66.992v-66.992c0-32.174-26.080-58.254-58.254-58.254s-58.254 26.080-58.254 58.254v66.992h-66.992c-32.174 0-58.254 26.080-58.254 58.254s26.080 58.254 58.254 58.254h66.992v66.992c0 32.174 26.080 58.254 58.254 58.254s58.254-26.080 58.254-58.254v-66.992h66.992c32.174 0 58.254-26.080 58.254-58.254s-26.080-58.254-58.254-58.254z"
              p-id="2736"
              fill="#e6e6e6"
            ></path>
          </svg>
          新用户?请先注册
        </router-link>
      </el-form-item>
    </el-form>

    <!-- <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>

    <el-col :span="12">
      

      <div class="grid-content bg-purple"></div
    ></el-col> -->
  </div>
</template>

<script>
import request from "@/utils/request";
import qs from "qs";
export default {
  name: "login",
  data() {
    return {
      ruleForm: {
        username: "phasmid_top",
        password: "111111",
      },
      // 用户名和密码规则
      rules: {
        username: [{ required: true, trigger: "change" }],
        password: [{ required: true, trigger: "change" }],
      },
      isloading: false,
      checked: false,
    };
  },
  // mounted() {
  //   //如果输入框为空聚焦输入框
  //   if (this.loginForm.username === "") {
  //     this.$refs.username.focus();
  //   } else if (this.loginForm.password === "") {
  //     this.$refs.password.focus();
  //   }
  //   this.getCookie();
  // },
  methods: {
    Login() {
      //var data = JSON.stringify(this.loginForm);
      let data =
        //使用qs插件
        qs.stringify({
          username: this.ruleForm.username,
          password: this.ruleForm.password,
        });
      // loginForm: JSON.stringfy(this.loginForm);
      request
        .post("/living/user/login/byPassword", data, {
          headers: { "content-type": "application/x-www-form-urlencoded" },
        })
        .then((res) => {
          //请求成功后执行函数
          if (res.code == "00000") {
            //登录验证成功路由实现跳转
            this.$notify({
              title: "提示",
              message: "用户登录成功",
              duration: 3000,
            });
            // const { href } = this.$router.resolve({
            //   path: "/main",
            // });
            // window.open(href, "_blank");
            this.$router.push("/recomend");
          } else if (res.code == "A0001") {
            this.$notify({
              title: "提示",
              message: "用户名或密码不能为空",
              duration: 3000,
            });
          } else if (res.code == "A0101") {
            this.$notify({
              title: "提示",
              message: "用户或密码错误",
              duration: 3000,
            });
          }
        })
        .catch((err) => {
          //请求错误后执行函数
          his.$notify({
            title: "提示",
            message: "用户访问错误",
            duration: 3000,
          });
          console.log(err);
        });
    },
  },
};
</script>
<style scoped>
.login-wrap h1 {
  display: block;
  font-size: 3rem;

  margin: 1rem 0;
  color: #ffffff;
  font-weight: normal;
  font-size: 100%;
}
/* .login {
  width: 100%;
  height: 740px;
  background: url("../assets/images/bg1.png") no-repeat;
  background-size: cover;
  overflow: hidden;
}
.login-wrap {
  background: url("../assets/images/backgroud.png") no-repeat;
  background-size: cover;
  width: 400px;
  height: 300px;
  margin: 215px auto;
  overflow: hidden;
  padding-top: 10px;
  line-height: 20px;
}

h3 {
  color: #0babeab8;
  font-size: 24px;
}
hr {
  background-color: #444;
  margin: 20px auto;
}

.el-button {
  width: 80%;
  margin-left: -50px;
} */

svg {
  position: relative;
  top: 2px;
  width: 18px;
  height: 18px;
}

.login {
  width: 350px;
  background-size: cover;
  margin: 215px auto;
  padding-right: 100px;
  background-color: #00000060;
  border-radius: 25px;
  overflow: hidden;
}
.login-wrap {
  width: 100%;
  height: 740px;
  background: url("../assets/images/loginbg.png") no-repeat;
  background-size: cover;
  overflow: hidden;
}

.el-button {
  width: 100%;
  width: 18rem;

  font-weight: 700;
  color: #ffffff;
  border-radius: 1.5rem;
  background-image: linear-gradient(to right, #74ebd5 0%, #9face6 100%);
}
.el-checkbox {
  color: #ffffff;
}
.login a {
  color: #ffffff;
}
</style>