import { createRouter, createWebHashHistory } from 'vue-router'
const Layout = () => import('@/views/member/layout.vue')
const Home = () => import('@/views/home/index.vue')

const routes = [
  // 一级路由布局容器
  {
    path: '/',
    component: Layout,
    children: [
      { path: '/', component: Home }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
