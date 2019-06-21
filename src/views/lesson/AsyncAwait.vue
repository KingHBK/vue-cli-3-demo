<template>
  <div>async和await</div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    async asyncTest () {
      return Promise.resolve(1)
    },
    async awaitTest () {
      const result = await new Promise((resolve, reject) => {
        setTimeout(() => resolve('done'), 2000)
      })
      console.log(result)
      return Promise.resolve(1)
    }
  },
  mounted () {
    const promise = new Promise((resolve, reject) => {
      const randomNum = Math.ceil(Math.random() * 5)
      if (randomNum > 2) {
        resolve(randomNum)
      } else {
        reject(randomNum)
      }
    })
    promise.then(result => {
      console.log(`随机数大于2:${result}`)
    }).catch(error => {
      console.log(`随机数小于等于2:${error}`)
    })

    this.asyncTest().then(result => {
      console.log(result)
    })

    this.awaitTest().then(result => console.log(result))
  }
}
</script>
