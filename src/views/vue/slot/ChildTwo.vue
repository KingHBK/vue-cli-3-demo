<style lang="less" scoped>
.slot-box {
  box-shadow: 0 0 3px red;
  // border-radius: 5px;
  height: 150px;
  width: 200px;
  margin: 15px auto 0 auto;
  header { height: 50px; background-color: #00BFFF; }
  main { height: 50px; background-color: #F5DEB3; }
  footer { height: 50px; background-color: #98FB98; }
}
</style>

<template>
  <div>
    <div class="slot-box">
      <header>
        <slot name="header">header</slot>
      </header>
      <main>
        <slot>main</slot>
      </main>
      <footer>
        <slot name="footer">footer</slot>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {},
  mounted () {
    console.log(`$parent.slotOneData:`, this.$parent.slotOneData)
  }
}
</script>
