import { Context } from '@nuxt/types'
import VueI18n from 'vue-i18n'

export enum i18nModuleType {
  article = 'article',
}
interface IModuleLoaded {
  [index: string]: boolean | undefined
}

let vueI18n: VueI18n | null = null

const moduleLoaded: IModuleLoaded = {}

// Server Side
export default function ({ app, route }: Context): Promise<void> {
  /**
   * locale(en) -> 找到對應 en 的 module 底下的 json ->
   * import進來，透過 vuei18n mergeLocaleMessage 把 locale 跟 message merge 在一起
   */
  vueI18n = app.i18n
  const LANG = (route.query.lang || 'zh_TW') as string
  return app.i18n.setLocale(LANG).then(() => {
    // client side ignore
    if (process.client) return
    // server side load source languages instead of each i18nModuleType lang
    return new Promise((resolve) => {
      import(
        /* webpackChunkName: "i18n-source-[request]" */ `@/i18n/sources/lang_${LANG}.json`
      )
        .then((languageJSON) => {
          /**
           * mergeLocaleMessage 是 vue-i18n 的方法，
           * 記得 nuxt-i18n 基本上只是一層包裹著 vue-18n 的套件
           * https://kazupon.github.io/vue-i18n/api/#methods
           */
          /**
           * Object!.key
           * 當編譯器無法自動追蹤出變數已經不可能為 null 或 undefined 值時，
           * 可以在該變數識別字後加上驚嘆號
           * (type assertion operator): title = name!.charAt(1) ...
           * 告訴編譯器該值已不可能為空值。
           */
          vueI18n!.mergeLocaleMessage(LANG, languageJSON)
        })
        .catch(() => {})
        .finally(() => {
          resolve()
        })
    })
  })
}
// Client Side
export const importModuleMessage = (type: i18nModuleType): Promise<void> => {
  const LANG = vueI18n?.locale || 'zh_TW'
  // server side ignore
  if (process.server) {
    return Promise.resolve()
  }
  // client side load each i18nModuleType lang
  return import(
    /* webpackChunkName: "i18n-[request]" */ `@/i18n/modules/${type}/${type}_${LANG}.json`
  )
    .then((languageJSON) => {
      if (!moduleLoaded[type]) {
        vueI18n!.mergeLocaleMessage(LANG, languageJSON)
        moduleLoaded[type] = true
      }
      return Promise.resolve()
    })
    .catch(() => {
      // ignore when can't find this particular language json
      return Promise.resolve()
    })
}
