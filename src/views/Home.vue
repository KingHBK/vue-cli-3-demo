<template>
  <div>
    <Header :title="'测试页面'" />
    <emoji />
    <images-upload :imageData="{count: 4, showCount: true}" />
    <div @click="handleLanguage">切换语言</div>
    <Language ref="language" />
  </div>
</template>

<script>
import Emoji from '@/components/Emoji'
import ImagesUpload from '@/components/ImagesUpload'
import Header from '@/components/Header'
import Language from '@/components/Language'

export default {
  components: {
    Emoji,
    ImagesUpload,
    Header,
    Language
  },
  data () {
    return {}
  },
  methods: {
    handleLanguage () {
      this.$refs.language.dealLanguage()
    }
  }
}
</script>
