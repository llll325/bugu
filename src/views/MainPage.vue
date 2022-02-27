<template>
  <el-container>
    <el-header> <nav-header></nav-header></el-header>
    <el-container>
      <el-aside width="100px">Aside</el-aside>
      <el-main>Main</el-main>
      <el-aside width="100px">Aside</el-aside>
    </el-container>
  </el-container>
</template>

<script>
import navHeader from "../components/navHeader.vue";
export default {
  name: "MainPage",
  components: {
    navHeader,
  },
};
</script>

<style scoped>
.el-container {
  height: 100%;
}

.el-aside {
  background-color: pink;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 200px;
  min-height: 100vh;
}
.el-header {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
}
.el-main {
  background-color: rgb(241, 241, 241);
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 160px;
  min-height: 100vh;
}
</style>
