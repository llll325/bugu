<template>
  <el-container>
    <el-header> <nav-header></nav-header></el-header>
    <el-container>
      <el-aside width="200px"></el-aside>
      <el-main>
        <Main></Main>
        <Aside></Aside>
      </el-main>
      <el-aside width="200px"></el-aside>
    </el-container>
  </el-container>
</template>

<script>
import Aside from "@/components/Aside.vue";
import navHeader from "../components/navHeader.vue";
import Main from "@/components/Main.vue";
export default {
  name: "MainPage",
  components: {
    navHeader,
    Aside,
    Main,
  },
};
</script>

<style scoped>
.el-container {
  height: 100%;
}

.el-aside {
  /* background-color: #ddd; */
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 200px;
  /* min-height: 90vh; */

  background-color: #fff;
}
.el-header {
  /* background-color: #b3c0d1; */
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
