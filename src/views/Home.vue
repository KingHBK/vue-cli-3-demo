<template>
  <div>
    <images-upload :imageData="{count: 4, showCount: true}" />
  </div>
</template>

<script>
import ImagesUpload from '@/components/ImagesUpload'

export default {
  components: {
    ImagesUpload
  },
  data () {
    return {}
  }
}
</script>
