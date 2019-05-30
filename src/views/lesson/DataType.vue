<template>
  <div>数据类型</div>
</template>

<script>
import { judgeDataType } from '@/assets/js/common'

export default {
  data () {
    return {}
  },
  methods: {
    f1typeof (data) {
      // 对于基本类型，除 null 以外，均可以返回正确的结果。
      // 对于引用类型，除 function 以外，一律返回 object 类型。
      // 对于 null ，返回 object 类型。
      // 对于 function 返回  function 类型
      return typeof data
    }
  },
  mounted () {
    const tString = 'Hello World'
    const tNumber = 666
    const tSymbol = Symbol('Hello World')
    const tBoolean = true
    const tNull = null
    const tUndefined = undefined
    const tArray = [ 1, 2, 3 ]
    const tFunction = () => { console.log('This is function.') }
    const tDate = new Date()
    console.log(`方式     期望      结果
typeof  string    ${this.f1typeof(tString)}
typeof  number    ${this.f1typeof(tNumber)}
typeof  symbol    ${this.f1typeof(tSymbol)}
typeof  boolean   ${this.f1typeof(tBoolean)}
typeof  null      ${this.f1typeof(tNull)}
typeof  undefined ${this.f1typeof(tUndefined)}
typeof  array     ${this.f1typeof(tArray)}
typeof  function  ${this.f1typeof(tFunction)}
typeof  date      ${this.f1typeof(tDate)}`)

    // 通用但很繁琐的方法： prototype
    console.log(`方式        值类型     结果
prototype  string    ${judgeDataType(tString)}
prototype  number    ${judgeDataType(tNumber)}
prototype  symbol    ${judgeDataType(tSymbol)}
prototype  boolean   ${judgeDataType(tBoolean)}
prototype  null      ${judgeDataType(tNull)}
prototype  undefined ${judgeDataType(tUndefined)}
prototype  array     ${judgeDataType(tArray)}
prototype  function  ${judgeDataType(tFunction)}
prototype  date      ${judgeDataType(tDate)}
prototype  RegExp    ${judgeDataType(new RegExp())}
prototype  document  ${judgeDataType(document)}
prototype  window    ${judgeDataType(window)}`)
  }
}
</script>
