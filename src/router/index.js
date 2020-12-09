import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieRouter from './movie'
import MyRouter from './my'
import CinemaRouter from './cinema'
Vue.use(VueRouter)

const routes = [
  MovieRouter,
  MyRouter,
  CinemaRouter,
  {
    path:'/*',
    redirect:'/movie/nowPlaying'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
