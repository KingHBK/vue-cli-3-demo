<template>
  <div>ES6</div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {},
  mounted () {
    const arr = ['aaa', 'bbb', 'ccc']
    const testMap = arr.map((v, i) => {
      return `${i}:${v}`
    })
    console.log(testMap)
  }
}
</script>
