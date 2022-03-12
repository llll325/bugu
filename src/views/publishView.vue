

<template>
  <div>
    <div class="text">
      <el-input
        type="textarea"
        placeholder="请输入内容"
        :rows="15"
        v-model="text"
        maxlength="500"
        show-word-limit
      >
      </el-input>
    </div>
    <!-- 上传图片 -->
    <!-- action 请求七牛云地址
	//hide 当满足条件后隐藏上传框 如上传数量达到则隐藏
	//list-type 组件展示形式 具体配置看element文档
	//file-list 数组对象的形式  页面初始化进入时要展示的图片路径可以push进去默认展示的图片
	 this.defaultImg = [{ url: "你获取的url前缀" + key }];
	 //on-preview 配置这个钩子鼠标放到图片上会出现一个放大镜的查看图片点击触发这个钩子做一下文件预览操作
	 //data是请求参数 一个是token(获取的文件上传凭证) 一个key(文件名)
	 //on-success 上传成功产生的一个回调 回调参数为一个对象 包含了key和hash 拿这两个任何一个值拼接Url前缀即可得到图片的https绝对路径
	 //before-upload 上传文件前触发的钩子 一般用来判断文件类型 和限制文件大小 返回一个布尔值 false 取消上传 true 上传成功
	 //disabled 是false则文件筐可标记 true则不可编辑 -->
    <div class="permission">
      <span class="isAnonymity"
        >匿名<el-switch v-model="isAnonymity"></el-switch
      ></span>

      <span class="visibility">
        <select name="" id="select" v-on:change="indexSelect($event)">
          <option
            v-for="(item, index) in optionList"
            :key="index"
            v-bind:value="item"
          >
            {{ item }}
          </option>
        </select>
      </span>
    </div>

    <div class="addFile">
      <span class="pic">
        <img
          src="../assets/images/pic.png"
          alt=""
          @click="dialogFormVisible = true"
        />
      </span>
      <!-- <span>
      <img src="../assets/images/takePic.png" alt="" />
    </span> -->
      <span>
        <img src="../assets/images/video.png" alt="" />
      </span>
      <span>
        <img src="../assets/images/smile.png" alt="" />
      </span>
      <!-- <span style="margin-left: 500px">0/500</span> -->
    </div>
    <div>
      <el-tag
        :key="tag"
        v-for="tag in dynamicTags"
        closable
        :disable-transitions="false"
        @close="handleClose(tag)"
      >
        {{ tag }}
      </el-tag>
      <el-input
        class="input-new-tag"
        v-if="inputVisible"
        v-model="inputValue"
        ref="saveTagInput"
        size="small"
        @blur="handleInputConfirm"
      >
      </el-input>
      <el-button v-else class="button-new-tag" size="small" @click="showInput"
        >添加标签</el-button
      >
    </div>
    <div class="publish">
      <el-button type="primary" @click="publish">发布</el-button>

      <el-dialog v-model="dialogFormVisible">
        <el-upload
          list-type="picture-card"
          multiple
          ref="upload"
          action="https://upload.qiniup.com/"
          :before-upload="beforeAvatarUpload"
          :auto-upload="false"
          :limit="9"
          :data="form"
          :on-change="fileChange"
          :file-list="fileList"
          :on-exceed="handleExceed"
        >
          <el-icon><Plus /></el-icon>
        </el-upload>
        <template #footer>
          <span class="dialog-footer">
            <!-- <el-button @click="dialogFormVisible = false">Cancel</el-button> -->
            <el-button type="primary" @click="dialogFormVisible = false"
              >Confirm</el-button
            >
          </span>
        </template>
      </el-dialog>
      <!-- <el-button @click="test">test</el-button> -->
    </div>
  </div>
</template>

<script type="text/javascript" >
import { ArrowDown, Plus, Delete } from "@element-plus/icons-vue";
import qs from "qs";
import request from "@/utils/request";
import aes from "@/utils/export";
export default {
  data() {
    return {
      dialogFormVisible: false,
      pic: [],
      isAnonymity: false,

      labellds: 1,
      text: "",
      video: 0,
      visibility: 0,
      optionList: ["所有人可见", "仅主页可见", "仅自己可见"],
      dynamicTags: ["标签一", "标签二", "标签三"],
      inputVisible: false,
      inputValue: "",
      fileList: [],
      uploadImages: [],
      form: {
        token: "",

        key: "",
      },
      fileVouchers: [
        {
          token: "",
          key: "",
        },
      ],
      pictureList: [],
    };
  },
  components: {
    ArrowDown,
    Plus,
    Delete,
  },
  methods: {
    handleExceed() {
      this.$message.warning(
        `当前限制选择 9 张图片，本次选择了 ${fileList.length} 张照片`
      );
    },
    test() {
      console.log(this.isAnonymity);
      console.log(this.visibility);
    },
    fileChange(file, fileList) {
      this.fileList = fileList;
    },
    fileRemove(file, fileList) {
      this.fileList = fileList;
    },
    // 发布图片
    async publish() {
      if (this.text.length <= 0 && this.fileList.length <= 0) {
        this.$notify({
          title: "提示",
          message: "请先输入内容",
          duration: 3000,
        });
        return;
      }
      // Taro.showToast({
      //   title: '正在发布',
      //   icon: 'loading'
      // })

      // let token = localStorage.getItem(token);

      let filesNumber = this.fileList.length;
      //没有图片则直接上传
      if (filesNumber < 1) {
        this.publishText(
          this.text,
          this.uploadImages,
          this.visibility,
          this.isAnonymity,
          this.labelIds
        );
        return;
      }
      request
        .get(
          "/living/activity/publish/getToken",
          {
            params: {
              sum: filesNumber,
            },
          },
          {
            headers: {
              "content-type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then((res) => {
          if (res.code == "00000") {
            this.$notify({
              title: "提示",
              message: "获取token",
              duration: 3000,
            });

            const formData = new FormData();
            this.fileVouchers = res.data;
            this.fileVouchers.forEach((item) => {
              this.uploadImages.push(item.fileName);
              console.log(this.uploadImages);
            });
            this.fileVouchers.forEach((item, index) => {
              formData.append(index, item);
            });
            if (this.fileVouchers) {
              this.fileVouchers.forEach((item) => {
                this.form.token = aes.decrypt(item.token);
                this.form.key = item.fileName;
                console.log(this.form.token);
              });
            }
            this.$refs.upload.submit();
            this.publishText(
              this.text,
              this.uploadImages,
              this.visibility,
              this.isAnonymity,
              this.labelIds
            );
          } else {
            this.$notify({
              title: "提示",
              message: "没有权限",
              duration: 3000,
            });
            return;
          }
        });

      return true;
    },
    // 发布
    publishText(text, uploadImages, visibility, isAnonymity, labelIds) {
      let data =
        //使用qs插件
        qs.stringify({
          text: text,
          isAnonymity: isAnonymity == true ? 1 : 0,
          labellds: JSON.stringify(labelIds),
          pic: JSON.stringify(uploadImages),
          visibility: visibility,
          video: 0,
        });
      request
        .post("/living/activity/publish", data, {
          headers: { "content-type": "application/x-www-form-urlencoded" },
        })
        .then((res) => {
          if (res.code == "00000") {
            this.$notify({
              title: "提示",
              message: "发布成功",
              duration: 3000,
            });
            this.$router.push("/recomend");
          } else {
            this.$notify({
              title: "提示",
              message: "发布失败",
              duration: 3000,
            });
          }
        });
    },
    //  标签
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick((_) => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
    },

    indexSelect(e) {
      // console.log(e.target.selectedIndex); // 选择项的index索引
      this.visibility = e.target.selectedIndex;
    },
  },
};
</script>
<style scoped>
span {
  height: 35px;
  width: 80px;

  line-height: 35px;
  float: left;
}
.addFile span[data-v-915d7bac][data-v-915d7bac] {
  float: left;
  margin-left: 30px;
  width: 30px;
  position: relative;
  bottom: 1px;

  right: 612px;
}
.visibility[data-v-915d7bac] {
  margin-left: 420px;
  position: relative;
  top: -7px;
  left: 179px;
}
.isAnonymity[data-v-915d7bac] {
  position: relative;
  bottom: 5px;
  left: 585px;
}
span.dialog-footer {
  margin-top: -15px;
  margin-left: 640px;
}

.dialog-footer button:first-child {
  margin-right: 10px;
}

.addFile img {
  height: 26px;
}

.visibility {
  margin-left: 420px;
  position: relative;
  top: -103px;
  left: 100px;
}
#select {
  border: 0;
  outline: 0;
}

.tag {
  margin-left: 10px;
}

.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
  position: relative;
  top: -64px;
  right: 210px;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
.publish .el-button[data-v-915d7bac] {
  background-color: rgb(66, 152, 209);
  height: 30px;
  margin-right: 50px;
  margin-top: -357px;
}
.dialog-footer button[data-v-915d7bac]:first-child {
  margin-bottom: -345px;
  margin-left: -13px;
}
</style>
