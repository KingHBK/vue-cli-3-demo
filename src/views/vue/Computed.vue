<template>
  <div>
    <h1>计算属性</h1>
    <input v-model="data1" type="number" />
    <div>{{ computedData1 }}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data1: 0
    }
  },
  computed: {
    computedData1 () {
      return Number(this.data1) * 2
    }
  },
  methods: {},
  mounted () {}
}
</script>
