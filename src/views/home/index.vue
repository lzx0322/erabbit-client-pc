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
  <!-- 人气推荐 -->
</template>

<script>
import HomeCategory from '@/views/home/components/home-category.vue'
import HomeBanner from '@/views/home/components/home-banner.vue'
export default {
  name: 'HomePage',
  components: {
    HomeCategory,
    HomeBanner
  }
}
</script>

<style></style>
