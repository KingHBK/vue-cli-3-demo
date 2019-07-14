<template>
  <div>
    <div>写一个方法去掉字符串中的空格</div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  mounted () {
    const str = '   ab  c d  ef  g '
    const trim = string => {
      const reg = /\s+/g
      if (typeof string === 'string') return str.replace(reg, '')
    }
    console.log(trim(str))
  }
}
</script>
