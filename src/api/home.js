// 提供首页相关 API 函数
import request from '@/utils/request'

/**
 * 获取品牌
 * @param {Integer} limit - 品牌个数
 * @returns Promise
 */
export const findBrand = (limit = 6) => {
  return request('/home/brand', 'GET', { limit })
}
/**
 * 获取广告区轮播图
 * @returns Promise
 */
export const findBanner = () => {
  return request('/home/banner', 'get')
}
/**
 * 获取人气推荐
 * @returns Promise
 */
export const findNew = () => {
  return request('home/new', 'get')
}
export const findHot = () => {
  return request('home/hot', 'get')
}
