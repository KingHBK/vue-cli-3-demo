<template>
  <div>原型</div>
</template>

<script>
export default {
  data () {
    return {}
  },
  mounted () {
    // prototype是函数才有的属性
    // __proto__是每个对象都有的属性

    // __proto__属性指向谁？
    /* 1.字面量方式 */
    // const a = {}
    // console.log(a.__proto__)
    // console.log(a.__proto__ === a.constructor.prototype)
    /* 2.构造器方式 */
    // const A = function () {}
    // const a = new A()
    // console.log(a.__proto__)
    // console.log(a.__proto__ === A.prototype)
    /* 3.Object.create()方式 */
    // const a1 = { a: 1 }
    // const a2 = Object.create(a1)
    // console.log(a2.__proto__)

    // 什么是原型链
    // __proto__所有对象都有的属性，js万物皆对象，所以会形成__proto__链,递归到头值为null
    // 当js引擎查找对象属性时，想查找本身是否存在，如果不存在，会到链上找，但不会查自身prototype
    // const A = function () {}
    // const a = new A()
    // console.log(a.__proto__) // A{} (即构造器A的原型对象)
    // console.log(a.__proto__.__proto__) // Object {} (即构造器function Object的原型对象)
    // console.log(a.__proto__.__proto__.__proto__) // null

    console.log(Function instanceof Object)
    console.log(Object instanceof Function)
  }
}
</script>
