<template>
  <!-- 首页入口 (分类 + 广告) -->
  <div class="home-entry">
    <div class="container">
      <!-- 左侧分类 -->
      <HomeCategory />
      <!-- 轮播图 -->
      <home-banner></home-banner>
    </div>
  </div>
  <!-- 新鲜好物 -->
  <HomeNew />
  <!-- 人气推荐 -->
  <HomeHot />
</template>

<script>
import HomeCategory from '@/views/home/components/home-category.vue'
import HomeBanner from '@/views/home/components/home-banner.vue'
import HomeNew from './components/home-new'
import HomeHot from './components/home-hot'
export default {
  name: 'HomePage',
  components: {
    HomeCategory,
    HomeBanner,
    HomeNew,
    HomeHot
  }
}
</script>

<style lang="less" scoped>
// 使用 Tranistion 组件实现动画,一个元素或者组件的(显示/隐藏,创建/移除)
// 进入前 v-enter [v-enter-from(Vue3)]
// 进入中 v-enter-active
// 进入后 v-enter-to

// 离开前 v-leave [v-leave-from(Vue3)]
// 离开中 v-leave-active
// 离开后 v-leave-to
</style>
