<template>
  <div>
    <main-page />
    <router-view></router-view>
  </div>
</template>

<script>
import MainPage from "./views/MainPage.vue";
export default {
  name: "App",
  // mounted() {
  //   this.$router.push("/main");
  // },
  components: {
    MainPage,
  },
};
</script>
<style>
#App {
  height: 100%;
}
</style>
