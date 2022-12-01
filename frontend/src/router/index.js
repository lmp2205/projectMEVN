import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddPost from '../views/AddPost.vue'
import Post from '../views/Post.vue'
import EditPost from '../views/EditPost.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/add-post',
    name: 'add-post',
    component: AddPost,
  },
  {
    path: '/post/:id',
    name: 'post',
    component: Post,
  },
  {
    path: '/edit-post/:id',
    name: 'edit-post',
    component: EditPost,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
