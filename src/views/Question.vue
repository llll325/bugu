<template>
  <div>
    <div style="line-height: 70px">
      <!-- <el-tabs v-model="activeName">
        <el-tab-pane label="我的问题" @click="gotoClick1">我的问题</el-tab-pane>
        <el-tab-pane label="我的回答" @click="gotoClick2">我的回答</el-tab-pane>
        <el-tab-pane label="我的关注" @click="gotoClick3">我的关注</el-tab-pane>
      </el-tabs> -->
      <el-button @click="gotoClick1">我的问题</el-button>
      <el-button @click="gotoClick2">我的回答</el-button>
      <el-button @click="gotoClick3">我的关注</el-button>
    </div>
    <div><router-view></router-view></div>
  </div>
</template>

<script>
export default {
  name: "Question",
  // data() {
  //   return {
  //     activeName: "second",
  //   };
  // },
  methods: {
    gotoClick1() {
      this.$router.push("/myquestion");
    },
    gotoClick2() {
      this.$router.push("/myanswer");
    },
    gotoClick3() {
      this.$router.push("/myquestion");
    },
  },
};
</script>

<style scoped>
.el-button {
  height: 30px;
  width: 200px;
}
</style>