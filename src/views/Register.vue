<template>
  <div class="background">
    <el-form class="register" :rules="rules" ref="ruleForm" :model="ruleForm">
      <el-form-item prop="username">
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
      <el-form-item prop="cheackPassword">
        <el-input
          v-model="ruleForm.cheackPassword"
          placeholder="确认密码"
          show-password
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="register">注册</el-button>
      </el-form-item>
      <router-link active-class="active" to="/login"
        ><svg
          t="1646475897173"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3609"
          width="200"
          height="200"
        >
          <path
            d="M512 590.75c-142.5 0-258.75-116.25-258.75-258.75s116.25-262.5 258.75-262.5 258.75 116.25 258.75 258.75-116.25 262.5-258.75 262.5zM512 144.5c-101.25 0-183.75 82.5-183.75 183.75s82.5 183.75 183.75 183.75 183.75-82.5 183.75-183.75-82.5-183.75-183.75-183.75z"
            p-id="3610"
            fill="#e6e6e6"
          ></path>
          <path
            d="M170.75 950.75c-18.75 0-37.5-15-37.5-37.5 0-7.5 0-11.25 0-15 0-210 172.5-382.5 382.5-382.5 22.5 0 37.5 15 37.5 37.5s-15 37.5-37.5 37.5c-168.75 0-307.5 138.75-307.5 307.5v11.25c0 22.5-18.75 41.25-37.5 41.25v0z"
            p-id="3611"
            fill="#e6e6e6"
          ></path>
          <path
            d="M853.25 947v0c-22.5 0-37.5-15-37.5-37.5v-11.25c0-168.75-138.75-307.5-307.5-307.5-22.5 0-37.5-15-37.5-37.5s15-37.5 37.5-37.5c210 0 382.5 172.5 382.5 382.5 0 3.75 0 7.5 0 11.25 0 22.5-15 37.5-37.5 37.5z"
            p-id="3612"
            fill="#e6e6e6"
          ></path>
        </svg>
        已有账号？直接登录
      </router-link>
    </el-form>
  </div>
  <!-- <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>

    <el-col :span="12">
      

      <div class="grid-content bg-purple"></div
    ></el-col> -->
</template>

<script>
import request from "@/utils/request";
import qs from "qs";
//import { MessageBox } from "element-ui";
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        password: "",
        cheackPassword: "",
      },
      loading: false,
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          { min: 3, max: 12, message: "用户名为3-12位", trigger: "blur" },
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 20, message: "密码须为6-20个字符", trigger: "blur" },
        ],
        cheackPassword: [
          { required: true, validator: validatePass, trigger: "blur" },
        ],
      },
    };
  },

  // return {
  //   registerForm: {
  //     username: "",
  //     password: "",
  //     repassword: "",
  //   },
  //   // 用户名和密码规则
  //   registerRules: {
  //     username: [
  //       { required: true, trigger: "change" },
  //       { min: 11, max: 11, message: "请输入11位手机号", trigger: "blur" },
  //     ],
  //     password: [
  //       { required: true, trigger: "change" },
  //       { min: 6, max: 10, message: "密码须为3-10个字符", trigger: "blur" },
  //     ],
  //   },
  //   isloading: false,
  //   checked: false,
  // };
  // mounted() {
  //   //如果输入框为空聚焦输入框
  //   if (this.ruleForm.username === "") {
  //     this.$refs.username.focus();
  //   } else if (this.ruleForm.password === "") {
  //     this.$refs.password.focus();
  //   }
  //   this.getCookie();
  // },
  methods: {
    //    cheackPsd(){
    //   if(this.ruleForm.password!==this.ruleForm.cheackPassword)
    //    Toast('手机号码输入有误')
    //    return
    // },
    register() {
      if (this.ruleForm.password !== this.ruleForm.cheackPassword) {
        return;
      }
      let data =
        //使用qs插件
        qs.stringify({
          username: this.ruleForm.username,
          password: this.ruleForm.password,
        });
      request
        .post("/living/user/regist/byUsername", data, {
          headers: { "content-type": "application/x-www-form-urlencoded" },
        })
        .then((res) => {
          //请求成功后执行函数
          if (res.code == "00000") {
            this.$router.push("/login"); //登录验证成功路由实现跳转
            this.$notify({
              title: "提示",
              message: "用户注册成功,返回登录",
              duration: 3000,
            });
            this.$route.push("/login");
          } else if (res.code == "A0001") {
            this.$notify({
              title: "提示",
              message: "用户名或密码不能为空",
              duration: 3000,
            });
          } else if (res.code == "A0202") {
            this.$notify({
              title: "提示",
              message: "用户名已存在，请直接登录",
              duration: 3000,
            });
            this.$route.push("/login");
          }
        });
      // .catch((err) => {
      //   //请求错误后执行函数
      //   this.$notify({
      //     title: "提示",
      //     message: "用户访问错误",
      //     duration: 3000,
      //   });
      //   console.log(err);
      // });
    },
  },
};
</script>
<style scoped>
.background {
  width: 100%;
  height: 740px;
  background: url("../assets/images/loginbg.png") no-repeat;
  background-size: cover;
  overflow: hidden;
}
.el-form-item {
  margin-left: 0;
}
.register {
  width: 250px;
  margin: 215px auto;
  background-size: cover;
  padding: 60px 80px;
  background-color: #00000060;
  border-radius: 25px;
}
a {
  color: #ffffff;
}
svg {
  position: relative;
  top: 2px;
  width: 18px;
  height: 18px;
}

.el-button {
  width: 100%;
  width: 18rem;

  font-weight: 700;
  color: #ffffff;
  border-radius: 1.5rem;
  background-image: linear-gradient(to right, #74ebd5 0%, #9face6 100%);
}
</style>