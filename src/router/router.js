import { createRouter, createWebHistory } from 'vue-router'
import Main from '../pages/Main.vue'
import PostPage from '../pages/PostPage';
import About from '../pages/About.vue';
import PostIdPage from '../pages/PostIdPage';


const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/posts',
    component: PostPage
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/posts/:id',
    component: PostIdPage
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router