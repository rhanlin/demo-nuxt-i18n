const fs = require('fs')
const path = require('path')
const SOURCE_ROOT = path.join('i18n/sources')
const SHARED_ROOT = path.join('i18n/shared')
const TARGET_ROOT = path.join('i18n/modules')
// const SOURCE_ROOT = '../i18n/sources'
const LANG = ['en', 'zh_TW']
const SOURCES = [
  {
    lang: 'en',
    file: 'lang_en.json',
  },
  {
    lang: 'zh_TW',
    file: 'lang_zh_TW.json',
  },
]
const TARGETS = [
  {
    folderName: 'article',
    regexKeyword: [/article\./],
    whitelistKey: [],
    blacklistKey: ['article.btn'],
  },
]
const writeFile = (folder, filename, content) => {
  console.log(folder, filename, content)
  fs.mkdirSync(folder, { recursive: true })
  fs.writeFileSync(folder + '/' + filename, content)
}

export default async () => {
  /**
   * Server Side get all message from google sheet
   */
  const url =
    'https://script.google.com/a/cloud-interactive.com/macros/s/AKfycbxKmmK9rPD6aoqlVMAW3Egt0Hww1U-ekZN-zXpw/exec'
  const response = await fetch(url)
  const { data } = await response.json()
  console.log(`----- get google orign message success -----`)
  const lang_en = {}
  const lang_zh_TW = {}

  // 把google sheet 取得的整包語系檔，依照語系做一次拆分
  data.forEach((item) => {
    if (item.en) {
      lang_en[item.path] = item.en
    }

    if (item.zh) {
      lang_zh_TW[item.path] = item.zh
    }
  })
  // 將拆分好的檔案轉存 JSON 格式，存入 sources
  LANG.forEach((target, index) => {
    writeFile(
      SOURCE_ROOT + '/',
      'lang' + '_' + target + '.json',
      JSON.stringify(index === 0 ? lang_en : lang_zh_TW) + '\n',
    )
  })

  // 將拆分好的檔案(sources)再進行第二次加工處理，把共用的抽出來放在 share，module自己的存入 module
  SOURCES.forEach((source) => {
    const { file, lang } = source
    const result = fs.readFileSync(SOURCE_ROOT + '/' + file)
    const origin = JSON.parse(result)
    console.log(`-----[${lang}] starting-----`)

    TARGETS.forEach((target) => {
      const targetLang = {}
      const { folderName, regexKeyword, whitelistKey, blacklistKey } = target
      regexKeyword.forEach((regex) => {
        const originKeys = Object.keys(origin)
        originKeys.forEach((key) => {
          const isWhitelist = whitelistKey.includes(key)
          const isBlacklist = blacklistKey.includes(key)
          const isMatchRegex = regex.test(key)
          if (isWhitelist || (!isBlacklist && isMatchRegex)) {
            targetLang[key] = origin[key]
            delete origin[key]
          }
          if (isWhitelist) {
            console.log(
              `[${folderName}][WHITELIST] key "${key}" is inside whitelist`,
            )
          }
          if (isBlacklist && isMatchRegex) {
            console.log(
              `[${folderName}][BLACKLIST] key "${key}" is inside blacklist`,
            )
          }
        })
      })

      const targetLength = Object.keys(targetLang).length

      if (targetLength > 0) {
        if (targetLength < 10) {
          console.log(`[${folderName}][WARN] is less then 10 key`)
        }

        writeFile(
          TARGET_ROOT + '/' + folderName,
          folderName + '_' + lang + '.json',
          JSON.stringify(targetLang, null, 2) + '\n',
        )
      }
    })
    writeFile(
      SHARED_ROOT,
      'lang_' + lang + '.js',
      `/* eslint-disable */\nexport default JSON.parse(${JSON.stringify(
        JSON.stringify(origin),
      )})\n`,
    )
  })
}
