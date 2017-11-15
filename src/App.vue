<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
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
  data() {
    return {
      // name: "",
      // age: ""
    };
  },
  methods: {},

};
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
#footer {
  background: #409eff;
  padding: 10px 0 6px 0;
  width: 100%;
  text-align: center;
  color: white;
  position: fixed;
  left: 0;
  bottom: 0;
}
</style>
