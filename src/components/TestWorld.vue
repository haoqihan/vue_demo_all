<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="文件上传" name="first" class="upLoadStyle">
      <el-upload
        class="upload-demo "
        ref="upload"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        :auto-upload="false"
        multiple
      >
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <el-button
          style="margin-left: 10px;"
          size="small"
          type="success"
          @click="submitUpload"
        >上传到服务器</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </el-tab-pane>
    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
      fileList: []
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    submitUpload() {
      console.log("上传到服务器",this.fileList)
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  }
};
</script>
<style  scoped>
.upLoadStyle{
  width: 500px;

}

</style>
