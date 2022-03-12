<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      推荐
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="lookFore">寻物启事</el-dropdown-item>
        <el-dropdown-item>失物招领</el-dropdown-item>
        <el-dropdown-item>新人驾到</el-dropdown-item>
        <el-dropdown-item>情感</el-dropdown-item>
        <el-dropdown-item>美食</el-dropdown-item>
        <el-dropdown-item>春天</el-dropdown-item>
        <el-dropdown-item>猫</el-dropdown-item>
        <el-dropdown-item>好物推荐</el-dropdown-item>
        <el-dropdown-item>音乐</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script scoped>
import { ArrowDown } from "@element-plus/icons-vue";
export default {
  name: "navHeader",
  components: {
    ArrowDown,
  },
  methods: {
    lookFore() {
      this.$router.push("/lookfor");
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
