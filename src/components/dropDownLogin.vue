<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      头像
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="personalPage">个人主页</el-dropdown-item>
        <el-dropdown-item @click="note">我的关注</el-dropdown-item>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script>
import { ref } from "vue";
import { ArrowDown } from "@element-plus/icons-vue";
export default {
  name: "DropDownLogin",

  // setup() {
  //   const drawer = ref(true);
  //   console.log(drawer);
  //   return {
  //     drawer,
  //   };
  // },
  components: {
    ArrowDown,
  },
  methods: {
    personalPage() {
      this.$router.push("/personal");
    },
    note() {
      this.$router.push("/note");
    },
  },
};
</script>
<style scoped>
.el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
  line-height: 60px;
}
</style>
