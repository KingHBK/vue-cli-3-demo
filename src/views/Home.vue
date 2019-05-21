<template>
  <div>
    <Header :title="'测试页面'" />
    <emoji />
    <images-upload :imageData="{count: 4, showCount: true}" />
  </div>
</template>

<script>
import Emoji from '@/components/Emoji'
import ImagesUpload from '@/components/ImagesUpload'
import Header from '@/components/Header'

export default {
  components: {
    Emoji,
    ImagesUpload,
    Header
  },
  data () {
    return {}
  }
}
</script>
