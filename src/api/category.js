// 定义首分类相关 API 接口函数
import request from '@/utils/request'

/**
 * 获取所有分类(顶级,二级,对应的商品推荐数据)
 * @returns Promise
 */
export const findAllCategory = () => {
  return request('/home/category/head', 'get')
}
