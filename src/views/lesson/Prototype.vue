<template>
  <div>原型及原型链</div>
</template>

<script>
export default {
  data () {
    return {}
  },
  mounted () {
    // 每当代码读取某个对象的某个属性的时候，都会执行一次搜索。
    // 首先从对象实例本身开始，如果在实例中找到了该属性，
    // 则返回该属性的值，如果没有找到，则顺着原型链指针向上，
    // 到原型对象中去找，如果找到就返回该属性值。

    // ↓ 原型简介 =====================================================================
    function Person (name, age) {
      this.name = name
    }
    Person.prototype.sex = 'female'
    let person2 = new Person('Summer')
    let person3 = new Person('Autumn')
    console.log(`2性别：${person2.sex} 3性别：${person3.sex}`)
    Person.prototype.sex = 'male'
    console.log(`2性别：${person2.sex} 3性别：${person3.sex}`)

    // constructor属性指向它们的构造函数
    console.log(`person2.constructor === Person -- ${person2.constructor === Person}`)

    // Javascript还提供了一个instanceof运算符，验证原型对象与实例对象之间的关系
    console.log(`person2 instanceof Person -- ${person2 instanceof Person}`)

    // isPrototypeOf()用来判断，某个proptotype对象和某个实例之间的关系
    console.log(`Person.prototype.isPrototypeOf(person2) -- ${Person.prototype.isPrototypeOf(person2)}`)

    // 每个实例对象都有一个hasOwnProperty()方法，用来判断某一个属性到底是本地属性，还是继承自prototype对象的属性
    console.log(`person2.hasOwnProperty('name') -- ${person2.hasOwnProperty('name')}`)
    console.log(`person2.hasOwnProperty('sex') -- ${person2.hasOwnProperty('sex')}`)

    // in运算符可以用来判断，某个实例是否含有某个属性，不管是不是本地属性
    console.log(`'name' in person2 -- ${'name' in person2}`)
    console.log(`'sex' in person2 -- ${'sex' in person2}`)
    // ↑ 原型简介 =============================================================================

    // ↓ 构造函数之间继承 ===================================================================
    function Animal () {
      this.species = '动物'
    }
    function Cat (name, color) {
      this.name = name
      this.color = color
    }
    // 1.构造函数绑定
    // 使用call或apply方法，将父对象的构造函数绑定在子对象上，即在子对象构造函数中加一行
    // function Cat (name, color) {
    //   Animal.apply(this, arguments)
    //   this.name = name
    //   this.color = color
    // }
    // 2.使用prototype属性
    // 我们将Cat的prototype对象指向一个Animal的实例
    Cat.prototype = new Animal()
    // 任何一个prototype对象都有一个constructor属性，指向它的构造函数。如果没有"Cat.prototype = new Animal();"这一行，Cat.prototype.constructor是指向Cat的
    // 加了这一行以后，Cat.prototype.constructor指向Animal
    Cat.prototype.constructor = Cat
    // 3.直接继承prototype
    // 4.利用空对象作为中介
    // 封装成一个方法
    // const extend = (Child, Parent) => {
    //   let F = function () {}
    //   F.prototype = Parent.prototype
    //   Child.prototype = new F()
    //   Child.prototype.constructor = Child
    //   Child.uber = Parent.prototype
    // }
    // extend(Cat, Animal)
    let cat1 = new Cat('大毛', '黄色')
    console.log(cat1.species)
    // ↑ 构造函数之间继承 ===================================================================

    // ↓ 非构造函数之间继承 ============================================
    // 1.object()方法
    let Chinese = { nation: '中国' }
    // 这个object()函数，其实只做一件事，就是把子对象的prototype属性
    // 指向父对象，从而使得子对象与父对象连在一起
    const object = (o) => {
      let F = function () {}
      F.prototype = o
      return new F()
    }
    // 使用的时候，第一步先在父对象的基础上，生成子对象
    let Doctor = object(Chinese)
    // 然后，再加上子对象本身的属性
    Doctor.career = '医生'
    // 这时，子对象已经继承了父对象的属性了
    console.log(Doctor.nation)
    // ↑ 非构造函数之间继承 ============================================
  }
}
</script>
