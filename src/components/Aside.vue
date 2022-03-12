<template>
  <div class="aside">
    <div id="nightcall">晚安电话</div>
    <div id="interact">互动盒子</div>
    <div id="checkin">签到抽奖</div>
    <div id="invitation">邀请获奖</div>
  </div>
</template>

<script>
export default {
  name: "Aside",
};
</script>

<style scoped>
.aside {
  float: right;
  width: 300px;
  height: 100%;
  background-color: rgb(188, 184, 221);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.aside div {
  width: 120px;
  height: 120px;
  float: left;
  margin-top: 15px;
  margin-left: 20px;
  background-color: rgb(152, 126, 214);

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
</style>