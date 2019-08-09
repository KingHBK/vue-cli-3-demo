<template>
  <div>
    <h1>ES6类Class</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {},
  mounted () {
    // function Point (x, y) {
    //   this.x = x
    //   this.y = y
    // }
    // Point.prototype.toString = function () {
    //   return `(${this.x},${this.y})`
    // }
    class Point {
      constructor (x, y) {
        this.x = x
        this.y = y
      }
      toString () {
        return `(${this.x},${this.y})`
      }
    }
    Point.prototype.doStuff = function () { console.log('stuff') }
    const p = new Point(1, 2)
    console.log(p.toString())
    p.doStuff()
  }
}
</script>
