<template>
  <el-row class="tac">
    <el-col :span="24">
      <h5 class="mb-2"><h1>设置</h1></h5>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <!-- <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>个人资料设置</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">修改头像</el-menu-item>
            <el-menu-item index="1-2">昵称</el-menu-item>
            <el-menu-item index="1-3">性别</el-menu-item>
            <el-menu-item index="1-4">是否实名认证</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu> -->

        <el-menu-item index="1" @click="modifyProfile">
          <el-icon><icon-menu /></el-icon>
          <span>个人资料</span>
        </el-menu-item>

        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>布咕会员</span>
        </el-menu-item>

        <el-sub-menu index="3">
          <template #title>
            <el-icon><location /></el-icon>
            <span>实名认证</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="3-1">登陆校园官网</el-menu-item>
            <el-menu-item index="3-2">上传照片</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>

        <el-sub-menu index="4">
          <template #title>
            <el-icon><location /></el-icon>
            <span>声音设置</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="4-1" @click="drawer = true"
              >刷新动态</el-menu-item
            >
            <el-menu-item index="4-2">消息通知</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>

        <el-menu-item index="5">
          <el-icon><setting /></el-icon>
          <span>帮助与反馈</span>
        </el-menu-item>

        <el-menu-item index="6">
          <el-icon><setting /></el-icon>
          <span>关于布咕星球</span>
        </el-menu-item>
        <el-menu-item index="7" @click="open">
          <el-icon><setting /></el-icon>
          <span>清除聊天记录</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script >
import { ref } from "vue";
import { Location, Document, Menu, Setting } from "@element-plus/icons-vue";
import { ElMessageBox, ElMessage } from "element-plus";

export default {
  methods: {
    modifyProfile() {
      this.$router.push("/profile");
    },
  },
  setup() {
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath);
    };
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath);
    };

    const open = () => {
      ElMessageBox.confirm("你确定清楚所有本地聊天记录吗", "Warning", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning",
      })
        .then(() => {
          ElMessage({
            type: "success",
            message: "Delete completed",
          });
        })
        .catch(() => {
          ElMessage({
            type: "info",
            message: "Delete canceled",
          });
        });
    };

    return {
      handleOpen,
      handleClose,
      Location,
      Document,
      Menu,
      Setting,
      open,
    };
  },
};
</script>
<style lang="css" scoped>
.el-menu {
  border-right: 0;
}
</style>