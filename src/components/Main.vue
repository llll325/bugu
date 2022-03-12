<template>
  <div class="main">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Main",
};
</script>

<style scoped>
.main {
  float: left;
  width: 770px;
  height: 100%;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>