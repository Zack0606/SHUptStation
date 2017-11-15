<template>
  <div id="navbar">
    <el-menu :default-active="activeIndex2" mode="horizontal" background-color="#409EFF" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="1" @click="goPath('/')">主页</el-menu-item>
      <el-menu-item index="2" @click="goPath('/learing')">学习资料</el-menu-item>
      <el-menu-item index="3" @click="goPath('/movie')">电影</el-menu-item>
      <el-menu-item index="4" @click="goPath('/music')">音乐</el-menu-item>
      <el-menu-item index="5" @click="goPath('/others')">其他</el-menu-item>
      <el-input placeholder="请键入查找内容" v-model="searchContent">
        <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
      </el-input>
      <div id="brand">上海大学PT站</div>
    </el-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: "1",
        activeIndex2: "1",
        searchContent: ""
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      goPath(path) {
        this.$router.push(path)
      },
      search() {
        const h = this.$createElement;
        this.$message({
          message: h('p', null, [
            h('span', null, '正在为你查找'),
            h('p1', { style: "color: teal;font-size:25px"}, this.searchContent),
            h('span', null, ',请稍后')]),
            duration: 2000,
            showClose: true
        })}
  }};
</script>

<style>
.el-menu-item {
  width: 120px;
  text-align: center;
  font-size: 20px;
}
.el-input {
  width: 400px;
  margin-top: 10px;
  margin-left: 150px;
  /* float: right; */
  /* margin-right: 350px; */
}
#brand {
  margin-top: 14px;
  float: right;
  margin-right: 20px;
  color: white;
  font-size: 24px;
}
</style>