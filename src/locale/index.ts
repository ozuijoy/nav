// 開源項目，未經作者同意，不得以抄襲/複製代碼/修改源代碼版權信息。
import english from './english'
import zh_CN from './zh_CN'
import zh_TW from './zh_TW'
import { STORAGE_KEY_MAP } from 'src/constants'
import { settings } from 'src/store'

const o = {
  en: english,
  cn: zh_CN,
  tw: zh_TW,
}

export function getLocale(): string {
  return localStorage.getItem(STORAGE_KEY_MAP.LANGUAGE) || settings().language
}

const l = getLocale()

export function $t(s: string, map?: Record<string, any>): string {
  function replaceStr(s: string, map?: Record<string, any>) {
    if (map) {
      for (const k in map) {
        s = s.replaceAll(`{${k}}`, map[k])
      }
    }
    return s
  }
  if (l === 'zh-TW') {
    return replaceStr(o.tw[s], map)
  }
  if (l === 'zh-CN') {
    return replaceStr(o.cn[s], map)
  }
  return replaceStr(o.en[s] ?? o.cn[s], map)
}

export function isZhCN(): boolean {
  return l === 'zh-CN'
}

export function isZhTW(): boolean {
  return l === 'zh-TW'
}

export default o
