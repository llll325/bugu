<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <span class="bugu"> Universe</span>
      <el-menu-item index="1"
        ><router-link active-class="active" to="/home"
          >首页</router-link
        ></el-menu-item
      >
      <el-menu-item index="1">
        <router-link active-class="active" to="/recomend">
          <!-- <drop-down-list />  -->
          推荐
        </router-link>
      </el-menu-item>
      <el-menu-item index="1"
        ><router-link active-class="active" to="/hotlist"
          >热榜</router-link
        ></el-menu-item
      >
      <!-- <el-menu-item index="1"
        ><router-link active-class="active" to="/question"
          >问答</router-link
        ></el-menu-item
      > -->
      <!-- <el-menu-item index="1">
        <router-link active-class="active" to="/home">
          搜索</router-link
        ></el-menu-item
      > -->
      <span class="search">
        <el-input v-model="input3" placeholder="Please input">
          <template #append>
            <el-button :icon="Search"></el-button>
          </template>
        </el-input>
      </span>

      <el-menu-item index="1">
        <router-link active-class="active" to="/personal">
          <drop-down-login /> </router-link
      ></el-menu-item>

      <el-popover
        v-model:visible="visible"
        placement="bottom"
        title="Title"
        :width="300"
        content="this is content, this is content, this is content"
      >
        <template #reference>
          <span class="note">
            <img
              src="../assets/images/note.png"
              alt=""
              @click="visible = !visible"
            />
          </span>
        </template>
      </el-popover>

      <span class="setting">
        <img src="../assets/images/setting.png" alt="" @click="drawer = true" />
      </span>
    </el-menu>
    <el-drawer
      v-model="drawer"
      title="I am the title"
      :with-header="false"
      size="20%"
    >
      <setting-detail />
    </el-drawer>
  </div>
</template>

<script>
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";
import dropDownList from "../components/dropDownList.vue";
import dropDownLogin from "../components/dropDownLogin.vue";
import settingDetail from "../components/settingDetail.vue";
export default {
  name: "navHeader",
  components: {
    dropDownList,
    dropDownLogin,
    settingDetail,
  },
  methods: {
    message() {
      this.$router.push("/message");
    },
    setting() {
      this.$router.push("/setting");
    },
  },
  setup() {
    const visible = ref(false);
    const drawer = ref(false);
    const input3 = ref("");
    const activeIndex = ref("1");
    const activeIndex2 = ref("1");
    var keyPath = new Array();
    const handleSelect = (key, keyPath) => {
      console.log(key, keyPath);
    };

    return {
      activeIndex,
      activeIndex2,
      handleSelect,
      input3,
      Search,
      drawer,
      visible,
    };
  },
};
</script>

<style scoped>
span {
  display: block;
  /* vertical-align: middle; */
  /* line-height: 60px; */
}
.note {
  /* background-color: gray; */
  margin-left: 20px;
}
img {
  width: 40px;
  vertical-align: middle;
}
.setting {
  /* background-color: pink; */
  margin-left: 20px;
}
.setting img {
  height: 40px;
}
.menu {
  display: block;
  margin-left: 50px;
  margin-right: 10px;
}
.el-menu {
  margin-left: 100px;
  text-align: center;
  line-height: 60px;
  height: 60px;
}
.el-menu-item {
  display: block;
  margin-left: 5px;
  border-bottom-color: #ffffff !important;
}
.search {
  /* display: block; */
  /* width: 500px; */
  margin-left: 50px;
  margin-right: 100px;
  /* background-color: rgb(129, 72, 72); */
}
.bugu {
  /* display: block; */
  width: 100px;
}
.el-input {
  width: 400px;
}
* a {
  text-decoration: none;
}
/* a:hover {
  text-decoration: underline;
} */
</style>
