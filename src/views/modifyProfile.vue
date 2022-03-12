<template>
  <div class="personal">
    <el-card shadow="always">
      <div class="aa"><h1>个人资料</h1></div>
      <span>
        <img src="../assets/images/head2.png" alt="" />
      </span>

      <el-form ref="formRef" :model="form" label-width="120px">
        <!-- <el-form-item>
        <img src="../assets/head.png" alt="" />
      </el-form-item> -->
        <el-form-item label="昵称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <!-- <el-form-item label="是否实名认证">
        <el-switch v-model="form.delivery"></el-switch>
      </el-form-item> -->
        <el-form-item label="性别">
          <el-radio-group v-model="form.resource">
            <el-radio label="女"></el-radio>
            <el-radio label="男"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="个性签名">
          <el-input v-model="form.desc" type="textarea"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Create</el-button>
          <el-button>Cancel</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script >
import { reactive } from "vue";
export default {
  setup() {
    // do not use same name with ref
    const form = reactive({
      name: "",
      region: "",
      date1: "",
      date2: "",
      delivery: false,
      type: [],
      resource: "",
      desc: "",
    });

    const onSubmit = () => {
      console.log("submit!");
    };
    return {
      form,
      onSubmit,
    };
  },
};
</script>
<style scoped>
.aa {
  /* background-color: pink; */
  height: 70px;
  line-height: 70px;
}
.el-input {
  width: 300px;
}
.personal {
  margin-right: 100px;
  margin-top: 20px;
  /* border: solid 1px gray; */
  margin-left: 100px;
  margin-top: 150px;
}
span {
  display: block;
  line-height: 70px;
  height: 70px;
  width: 50px;
  margin-left: 50px;
  margin-bottom: 10px;
}
</style>