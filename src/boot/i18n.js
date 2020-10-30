/*
 * @Date           : 2020-08-31 16:40:04
 * @FilePath       : /jinnian-space/src/boot/i18n.js
 * @Description    : 
 */
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from 'src/i18n'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'en-us',
  fallbackLocale: 'en-us',
  messages
})

export default ({ app }) => {
  // Set i18n instance on app
  app.i18n = i18n
}

export { i18n }

