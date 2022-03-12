<template></template>

<script>
import request from "@/utils/request";
import qs from "qs";
export default {
  mounted() {
    console.log(this.$route.query.id);
    var id = this.$route.query.id;

    request
      .post(
        "/living/activity/`${id}`/comment",
        {
          data: {
            id: id,
            content: "",
            type: 1,
          },
        },
        {
          headers: {
            "content-type": "x-www-form-urlencoded",
          },
        } //设置返回类型
      )
      .then((res) => {
        console.log(res.data);
      });
  },
};
</script>

<style>
</style>