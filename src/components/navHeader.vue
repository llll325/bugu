<template>
  <div class="he">
    <div>首页</div>
    <div>推荐</div>
    <div>问答</div>
    <div>热榜</div>
    <router-link class="register" active-class="active" to="/register"
      >注册</router-link
    >
  </div>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "navHeader",
};
</script>

<style>
.he {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #ccc;
  display: flex;
}
</style>
