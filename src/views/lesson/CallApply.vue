<template>
  <div>call()和apply()</div>
</template>

<script>
export default {
  data () {
    return {}
  },
  mounted () {
    // 1.调用函数，传递参数
    const add = (x, y) => {
      return x + y
    }
    const addCall = (x, y) => {
      return add.call(this, x, y)
    }
    const addApply = (x, y) => {
      return add.apply(this, [x, y])
    }
    console.log('call()' + addCall(10, 20))
    console.log('apply()' + addApply(10, 20))

    // 改变函数作用域

    // 高级用法，实现js继承
    function Person () {
      this.sayName = function () {
        return this.name
      }
    }
    function Chinese (name) {
      Person.call(this)
      this.name = name
      this.ch = function () {
        console.log('中国人')
      }
    }
    function America (name) {
      Person.call(this)
      this.name = name
      this.am = function () {
        console.log('美国人')
      }
    }
    let ch1 = new Chinese('成龙')
    let am1 = new America('jack')
    console.log(ch1.sayName())
    console.log(am1.sayName())

    // 区别
    // 参数不同, apply 传入的是一个参数数组，也就是将多个参数组合成一个参数数组， call 从第二个参数开始依次传入.
    // apply 可以直接将当前函数的arguments对象作为apply的第二个参数传入
  }
}
</script>
