import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { getCookie, setCookie } from '@/assets/js/common'
import cn from './language/cn'
import en from './language/en'

Vue.use(VueI18n)

const languageSet = () => {
  if (getCookie('language') === '') {
    setCookie('language', 'cn')
    return 'cn'
  } else {
    return getCookie('language')
  }
}

export default new VueI18n({
  locale: languageSet(),
  messages: {
    cn, en
  }
})
