<template>
  <div>
    <div class="all"></div>
    <div class="header">
      <span class="user"> <img src="../assets/head2.png" alt="" /></span>
      <span class="username">username</span>
      <span class="sex"><img src="../assets/girl.png" alt="" /></span>
      <!-- <span class="attention"
        ><img src="../assets/attention.png" alt=""
      /></span> -->
      <span class="attention"
        ><el-button color="#45bce2" style="color: white">关注</el-button></span
      >

      <span class="more"><img src="../assets/more.png" alt="" /></span>
    </div>
    <div class="middle"></div>
    <div class="footer">
      <span class="share">
        <img src="../assets/share.png" alt="" />
      </span>
      <span class="like"><img src="../assets/like.png" alt="" />100</span>
      <span class="comments"
        ><img src="../assets/comment.png" alt="" />100
      </span>
    </div>
  </div>
</template>

<script>
import { Edit, Share } from "@element-plus/icons-vue";
export default {
  name: "dynamic",
  components: {
    Edit,
    Share,
  },
};
</script>

<style scoped>
.header {
  width: 770px;
  height: 50px;
}
.footer {
  width: 770px;
  margin-top: 360px;
  height: 50px;
}
.header span {
  float: left;
  height: 50px;
  line-height: 50px;
  /* background-color: pink; */
}
.header .username {
  /* background-color: pink; */
  height: 25px;
  width: 100px;
  line-height: 30px;
}

.header .sex {
  /* background-color: rgb(146, 16, 38); */
  height: 5px;
  width: 100px;
  line-height: 30px;
}

.footer span {
  float: left;
  line-height: 50px;
}
.like {
  margin-left: 580px;
}
/* .comment {
  margin-left: 80px;
} */
.header img {
  height: 40px;
}
.user img {
  height: 40px;
}
.footer img {
  height: 40px;
}
.sex img {
  height: 25px;
  margin-top: 5px;
}
.noted {
  margin-left: 500px;
}
.attention {
  display: block;
  height: 50px;
  margin-left: 400px;
}
.more {
  margin-left: 20px;
}
.el-button {
  margin-top: -10px;
}
</style>