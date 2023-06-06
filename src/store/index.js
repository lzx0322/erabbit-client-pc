import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import cart from './modules/cart'
import user from './modules/user'
import category from './modules/category'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cart,
    user,
    category
  },
  // 配置插件
  plugins: [createPersistedState({
    // 默认存储在 localStorage
    // 本地存储名字
    key: 'erabbit-client-pc-store',
    // 指定需要存储的模块
    paths: ['user', 'cart']
  })]
})
