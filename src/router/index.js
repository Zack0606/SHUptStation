import Vue from 'vue'
import Router from 'vue-router'
import movie from '../components/movie.vue'
import index from '../components/index.vue'
import learning from '../components/learning.vue'
import music from '../components/music.vue'
import others from '../components/others.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/movie',
      name: 'movie',
      component: movie
    },
    {
      path: '/learning',
      name: 'learning',
      component: learning
    },
    {
      path: '/music',
      name: 'music',
      component: music
    },
    {
      path: '/others',
      name: 'others',
      component: others
    }
  ]
})