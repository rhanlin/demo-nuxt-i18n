import { i18nModuleType, importModuleMessage } from '~/plugins/i18n'

const AsyncArticle: Function = () => ({
  /**
   * Dynamic & Async Components
   * https://vuejs.org/v2/guide/components-dynamic-async.html
   */
  component: Promise.all([
    import(
      /* webpackChunkName: "article" */
      '~/components/article/Article.vue'
    ),
    importModuleMessage(i18nModuleType.article)
  ]).then(([component]) => component),
  delay: 0,
  timeout: 3000
})

export default AsyncArticle
