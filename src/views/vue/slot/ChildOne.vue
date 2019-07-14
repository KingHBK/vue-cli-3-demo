<style lang="less" scoped>
.slot-box {
  box-shadow: 0 0 3px #000000;
  border-radius: 5px;
  height: 250px;
  width: 250px;
  margin: 15px auto 0 auto;
}
</style>

<template>
  <div>
    <div class="slot-box">
      <strong>Hello </strong>
      <slot :slotOneData="slotOneData">World!</slot>
      <div>{{myData}}</div>
      <button @click="$emit('myEvent', 123)">测试</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    myData: {
      type: [String, Object],
      required: true,
      default: ''
    }
  },
  data () {
    return {
      slotOneData: '这是one data'
    }
  },
  methods: {},
  mounted () {}
}
</script>
