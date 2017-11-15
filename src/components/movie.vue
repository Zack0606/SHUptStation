<template>
  <div class="movie">
    <el-row>
      <el-col :span="4" v-for="(movie, index) in movies" :key="movie.name" :offset="index > 0 ? 2 : 0">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="movie.img" class="image">
          <div style="padding: 14px;">
            <span>{{movie.name}}</span>
            <div class="bottom clearfix">
              <el-button type="primary" @click="open(movie.name,movie.star,movie.intro)">详情</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movies: []
    };
  },
  methods: {
    open(name, star, intro) {
      const h = this.$createElement;
      this.$msgbox({
        title: name,
        message: h("p", null, [
          h("span", null, "简介 :"),
          h("span", { style: "color: teal" }, intro),
          h("span", null, "评分 ："),
          h("span", null, star)
        ]),
        showCancelButton: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      });
    }
  },
  mounted() {
    this.$http
      .get("demo.json")
      .then(response => {
        this.movies = response.data.movies;
        console.log(response.data.movies.length);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
<style>
.el-col {
  margin: 0px;
  text-align: center;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: center;
}

.image {
  width: 100%;
  display: block;
  width: 200px;
  height: 200px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>
