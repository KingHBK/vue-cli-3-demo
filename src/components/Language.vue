<style lang="less">
</style>

<template>
  <div>

    <van-popup v-model="showLanguage" @click-overlay="cancelLanguage" position="bottom">
      <van-picker
      show-toolbar
      :title="$t('language.selectLanguage')"
      :cancel-button-text="$t('tips.cancel')"
      :confirm-button-text="$t('tips.confirm')"
      @cancel="cancelLanguage"
      @confirm="confirmLanguage"
      :columns="languageList"
      ref="picker"
      ></van-picker>
    </van-popup>

  </div>
</template>

<script>
import { Popup, Picker } from 'vant'
import { setCookie, getCookie } from '@/assets/js/common'

export default {
  components: {
    vanPopup: Popup,
    vanPicker: Picker
  },
  data () {
    return {
      showLanguage: false,
      languageList: [
        {
          text: '中文',
          value: 'cn'
        },
        {
          text: 'English',
          value: 'en'
        }
      ]
    }
  },
  methods: {
    dealLanguage () {
      this.showLanguage = true
    },
    cancelLanguage () {
      this.$refs.picker.setColumnIndex(0, this.defaultIndex())
      this.showLanguage = false
    },
    confirmLanguage () {
      setCookie('language', this.$refs.picker.getColumnValue(0).value)
      this.$i18n.locale = this.$refs.picker.getColumnValue(0).value
      this.showLanguage = false
    },
    defaultIndex () {
      for (let i = 0; i < this.languageList; i++) {
        if (this.languageList[i] === getCookie('language')) {
          return i
        }
      }
    }
  }
}
</script>
