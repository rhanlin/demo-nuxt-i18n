# nuxt-i18n-demo

今年(2020) 在 LINE 開發社群計畫: Vue.js Taiwan 分享會上聽見 nuxt-i18n 的實戰分享後，整理一下筆記實作一下分享會上的內容。其實過往在專案中使用 i18n 時，並沒有在效能及優化上思考太多，純粹就是能切換語系就好，但在聽完分享會後覺得受益許多，很多觀念其實也不只侷限在 i18n 上，可以應用的更廣，因此實作了一個小專案，在這裡做一個紀錄。

在多數情況下，原始語系檔會存放在專案資料夾中(i18n/sources)，但為了方便日後調整與維護，我使用 google sheet 來管理語系內容，並搭配 Google apps-script 產生一支 api，在網頁 server-side render 的時候，取得所有語系資料，並將其自動分放到對應的資料目錄底下。(production 可以不用在使用這支 api)

[Nuxt i18n 優化筆記](https://hackmd.io/@OSLHiEMQTTqKrzYTrvjHQA/H1tL6aV7w#Async-Components).

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

```



