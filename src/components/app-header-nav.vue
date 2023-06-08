<template>
  <ul class="app-header-nav">
    <li class="home"><RouterLink to="/">首页</RouterLink></li>
    <li
      v-for="item in list"
      :key="item.id"
      @mouseenter="show(item)"
      @mouseleave="hide(item)"
    >
      <router-link @click="hide(item)" :to="`/category/${item.id}`">{{
        item.name
      }}</router-link>
      <div class="layer" :class="{ open: item.open }">
        <ul>
          <li v-for="sub in item.children" :key="sub.id">
            <router-link @click="hide(item)" :to="`/category/sub/${sub.id}`">
              <img :src="sub.picture" alt="" />
              <p>{{ sub.name }}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
  name: 'AppHeaderNav',
  // eslint-disable-next-line space-before-function-paren
  setup() {
    const store = useStore()
    // 拿到 vuex 中的分类列表
    const list = computed(() => {
      return store.state.category.list
    })
    /**
     * 跳转的时候关闭二级类目,通过数据来控制
     * 1. vuex 每个分类加上 open 数据
     * 2. vuex 提供显示和隐藏函数,修改 open 数据
     * 3. 在组件中使用 vuex 中的函数,使用事件来绑定,提供一个类名显示隐藏的类名
     */
    const show = item => {
      store.commit('category/show', item.id)
    }
    const hide = item => {
      store.commit('category/hide', item.id)
    }
    return { list, show, hide }
  }
}
</script>

<style scoped lang="less">
.app-header-nav {
  width: 820px;
  display: flex;
  padding-left: 40px;
  position: relative;
  z-index: 998;
  > li {
    margin-right: 40px;
    width: 38px;
    text-align: center;
    > a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;
    }
    &:hover {
      > a {
        color: @xtxColor;
        border-bottom: 1px solid @xtxColor;
      }
      // 显示二级类目
      // .layer {
      //   height: 132px;
      //   opacity: 1;
      // }
    }
  }
}
// 二级类目弹层
.layer {
  &.open {
    height: 132px;
    opacity: 1;
  }
  width: 1240px;
  background-color: #fff;
  position: absolute;
  left: -200px;
  top: 56px;
  height: 0;
  overflow: hidden;
  opacity: 0;
  box-shadow: 0 0 5px #ccc;
  transition: all 0.2s 0.1s;
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0 70px;
    align-items: center;
    height: 132px;
    li {
      width: 110px;
      text-align: center;
      img {
        width: 60px;
        height: 60px;
      }
      p {
        padding-top: 10px;
      }
      &:hover {
        p {
          color: @xtxColor;
        }
      }
    }
  }
}
</style>
