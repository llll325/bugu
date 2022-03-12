<template>
  <div>
    <router-view v-if="showRouter"></router-view>
  </div>
</template>

<script>
import Login from "./components/Login.vue";
export default {
  name: "App",
  mounted() {
    this.$router.push("/login");
  },
  components: {
    //MainPage,
    Login,
  },
  provide() {
    return {
      reload: this.reload,
    };
  },
  data() {
    return {
      showRouter: true,
    };
  },
  methods: {
    reload() {
      this.showRouter = false;
      this.$nextTick(function () {
        this.showRouter = true;
      });
    },
  },
};
</script>
<style>
#App {
  height: 100%;
}
</style>

