// 分类模块
// 存储的分类数据

import { findAllCategory } from '@/api/category'
import { topCategory } from '@/api/constants'

export default {
  namespaced: true,
  state: () => {
    return {
      // 分类信息集合,依赖 topCategory 重新设置,保证初始化就有数据,不至于白屏
      list: topCategory.map(item => ({ name: item }))
    }
  },
  // 修改分类函数
  mutations: {
    // payload 所有的分类集合
    setList (state, payload) {
      state.list = payload
    }
  },
  // 获取分类函数
  actions: {
    async getList ({ commit }) {
      // 获取分类数据
      const data = await findAllCategory()
      // 修改分类数据
      commit('setList', data.result)
    }
  }
}
