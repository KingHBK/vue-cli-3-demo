<style lang="less" scoped>
</style>

<template>
  <div>
    <van-nav-bar
    :left-arrow="left" fixed
    :title="title"
    :left-text="leftText"
    :right-text="rightText"
    @click-left="leftFun"
    @click-right="rightFun" />
    <div class="header-placeholder"></div>
  </div>
</template>

<script>
import { NavBar } from 'vant'

export default {
  components: {
    VanNavBar: NavBar
  },
  props: {
    left: {
      type: Boolean,
      required: false,
      default: true
    },
    title: {
      type: String,
      required: true,
      default: ''
    },
    leftText: {
      type: String,
      required: false,
      default: ''
    },
    rightText: {
      type: String,
      required: false,
      default: ''
    }
  },
  data () {
    return {}
  },
  methods: {
    leftFun () {
      this.$router.go(-1)
    },
    rightFun () {
      this.$emit('rightFun')
    }
  }
}
</script>
