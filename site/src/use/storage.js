/**
 * @Author: Sam
 * @Date: 2021-11-05 20:10:52
 * @LastModifiedBy:   Sam
 * @LastModifiedTime: 2021-11-05 20:10:52
 */

// 本地、会话存储相关
export const useLocalStorage = () => {

  let local = {};

  /**
   * 设置存储
   * @param {string} key 存储名
   * @param {*} value 存储数据
   * @return {string} 存储名
   */
  local.set = (key, value) => {
    if (typeof value === 'object') value = JSON.stringify(value);

    window.localStorage.setItem(key, value);

    return value;
  }

  /**
   * 获取指定的存储数据
   * @param {string} key 存储名
   * @param {boolean} isParse 不解析数据，默认false
   * @return {*} 数据内容
   */
  local.get = (key, isParse = false) => {
    const data = window.localStorage.getItem(key);

    return isParse ? JSON.parse(data) : data;
  }

  /**
   * 删除指定存储
   * @param {*} key isParse
   * @return {string} 存储名
   */
  local.del = (key) => {
    window.localStorage.removeItem(key);

    return key;
  }

  local.clear = ()=>{
    window.localStorage.clear();
  }

  return {
    local
  }
}