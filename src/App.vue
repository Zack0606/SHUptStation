<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <div>
      <el-button @click="startHacking">Start</el-button>
    </div> -->
    <navbar></navbar>
    <div id="footer">
      <span>&copy;Copyright 2017 shuZack. All rights reserved.</span>
    </div>
  </div>
</template>

<script>
import navbar from "./components/navbar.vue";
export default {
  components: {
    navbar
  },
  methods: {
    // startHacking() {
    //   this.$notify({
    //     title: "It works!",
    //     type: "success",
    //     message:
    //       "We've laid the ground work for you. It's time for you to build something epic!",
    //     duration: 5000
    //   });
    // }
  }
};
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
#footer {
    background: #409EFF;
    padding: 10px 0 6px 0;
    width: 100%;
    text-align: center;
    color: white;
    position: fixed;
    left: 0;
    bottom: 0;
}
</style>
