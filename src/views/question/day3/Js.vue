<template>
  <div>去除字符串中最后一个指定的字符</div>
</template>

<script>
export default {
  data () {
    return {}
  },
  mounted () {
    let str = 'abcde'
    const delLast = (string) => {
      if (typeof str !== 'string') {
        console.log('请确认要删除的对象为字符串')
      }
      string = string.slice(0, string.length - 1)
      console.log(string)
    }
    delLast(str)
  }
}
</script>
