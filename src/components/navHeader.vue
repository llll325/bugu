<template>
  <el-row :gutter="10">
    <el-col :span="3"
      ><div class="grid-content bg-purple">
        布谷
        <router-link
          class="register"
          active-class="active"
          to="/register"
        ></router-link></div
    ></el-col>
    <el-col :span="3"
      ><div class="grid-content bg-purple">
        <router-link class="register" active-class="active" to="/register"
          >首页</router-link
        >
      </div></el-col
    >
    <el-col :span="3"
      ><div class="grid-content bg-purple">
        <router-link class="register" active-class="active" to="/register"
          >推荐</router-link
        >
      </div></el-col
    >
    <el-col :span="3"
      ><div class="grid-content bg-purple">
        <router-link class="register" active-class="active" to="/register"
          >热榜</router-link
        >
      </div></el-col
    >
    <el-col :span="3"
      ><div class="grid-content bg-purple">
        <router-link class="register" active-class="active" to="/register"
          >问答</router-link
        >
      </div></el-col
    >
    <el-col :span="6"
      ><div class="grid-content bg-purple">
        <router-link class="register" active-class="active" to="/register">
          搜索</router-link
        >
      </div></el-col
    >
    <el-col :span="3"
      ><div class="grid-content bg-purple">
        <router-link active-class="active" to="/home">登录</router-link>
      </div></el-col
    >
    <router-view></router-view>
  </el-row>
</template>

<script>
export default {
  name: "navHeader",
};
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.he {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #ccc;
  display: flex;
}
</style>
