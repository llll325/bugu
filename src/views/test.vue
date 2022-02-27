<template>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    status-icon
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
  >
    <el-form-item label="Password" prop="password">
      <el-input
        v-model="password"
        type="password"
        autocomplete="off"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)"
        >登录</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import type { ElForm } from "element-plus";

type FormInstance = InstanceType<typeof ElForm>;
const ruleFormRef = ref<FormInstance>();

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the password"));
  } else {
    if (ruleForm.checkPass !== "") {
      if (!ruleFormRef.value) return;
      ruleFormRef.value.validateField("checkPass", () => null);
    }
    callback();
  }
};

const ruleForm = reactive({
  username: "",
  password: "",
  checkPass: "",
});
</script>
