<template>
  <div class="hotlist">
    <div class="hotItem" v-for="(item, key) in lists" :key="key">
      <div class="hot-index">{{ item.id }}</div>
      <div class="hot-content">
        <a href="">
          <p>{{ item.text }}</p>
        </a>
      </div>

      <span class="time">{{ item.createTime }}</span>

      <!-- <a class="hot-img">{{ item.pic }}</a> -->

      <a class="hot-img"><img :src="imgurl" /></a>
    </div>
  </div>

  <!-- <div class="hotItem" v-for="(item, key) in lists">
    <div class="hot-index">{{ item.id }}</div>
  </div> -->
</template>

<script>
import request from "@/utils/request";
//import { pathway } from "@/utils/common";
export default {
  name: "HotList",
  data() {
    return {
      lists: [],
      imgurl:
        "http://file.buguxingqiu.xyz/user/activity/242-308ba75a-bebf-4170-9f98-9f5ced030822",
    };
  },
  mounted() {
    request
      .get(
        "/living/activity/hot",
        {
          headers: {
            "content-type": "application/x-www-form-urlencoded",
          },
        } //设置返回类型
      )
      .then((res) => {
        this.lists = res.data.list;
        console.log(res.data.list);
      });
  },
};
</script>


<style>
.hot-index {
  float: left;
  display: inline;
  text-align: center;
  width: 57px;
  line-height: 58px;
}

.hot-content {
  flex: 1 1;
  font-size: 18px;
  line-height: 26px;
  min-height: 120px;
  display: -webkit-box;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 2;
  /* -webkit-box-orient: vertical; */
  font-weight: 600;
  font-synthesis: style;
}

.hotItem {
  border: 1px solid #000;
  background-color: rgb(247, 246, 255);
  padding: 16px 16px 16px 0;
  min-height: 57px;
  display: flex;
}
svg {
  width: 20px;
  height: 20px;
}
.hot-img {
  display: block;
  height: 120px;
  width: 160px;
  overflow: hidden;
}
.hot-img img {
  max-width: 160px;
}

.time {
  display: inline;
  font-size: 14px;
  height: 16px;
  color: rgb(184, 184, 184);
  /* position: absolute;
  top: 80px; */
  flex-direction: column;
  margin-bottom: 8px;
}

.hot {
  float: left;
  margin-top: 80;
}
</style>
