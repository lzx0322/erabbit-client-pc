<template>
  <!-- 顶部通栏 -->
  <app-navbar></app-navbar>
  <!-- 头部组件-->
  <app-header></app-header>
  <!-- 吸顶头部组件 -->
  <app-header-sticky></app-header-sticky>
  <!-- 内容容器 -->
  <div class="main">
    <!-- 二级路由 -->
    <home-page></home-page>
  </div>
  <!-- 底部组件 -->
  <app-footer></app-footer>
</template>

<script>
import AppNavbar from '@/components/app-topnav.vue'
import AppHeader from '@/components/app-header.vue'
import AppFooter from '@/components/app-footer.vue'
import AppHeaderSticky from '@/components/app-header-sticky.vue'
import HomePage from '@/views/home/index.vue'
import { useStore } from 'vuex'
export default {
  name: 'Layout',
  components: {
    AppNavbar,
    AppHeader,
    AppFooter,
    AppHeaderSticky,
    HomePage
  },
  // 获取分类数据
  // eslint-disable-next-line space-before-function-paren
  setup() {
    const store = useStore()
    store.dispatch('category/getList')
  }
}
</script>

<style lang="less" scoped></style>
