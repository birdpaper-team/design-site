/**
 * @Author: Sam
 * @Date: 2021-10-29 16:13:03
 * @LastModifiedBy:   Sam
 * @LastModifiedTime: 2021-10-29 16:13:03
 */

import { useI18n } from "vue-i18n"
import { useLocalStorage } from "./storage.js"

// 国际化
export const useLocals = () => {
  const { local } = useLocalStorage()

  const { t, locale } = useI18n()

  const getLocals = () => local.get("lang") || locale.value

  const setLocals = (lang = "") => {
    locale.value = lang
    local.set('lang', lang)
    location.reload()
  }

  return {
    t,
    locale,
    getLocals,
    setLocals
  }
}