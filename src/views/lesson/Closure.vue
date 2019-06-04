<template>
  <div>闭包</div>
</template>

<script>
export default {
  data () {
    return {}
  },
  mounted () {
    function A () {
      let count = 0
      function B () {
        count++
        console.log(count)
      }
      return B
    }
    let C = A()
    C()
    C()
    C()
  }
}
</script>
