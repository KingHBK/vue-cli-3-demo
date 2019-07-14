<template>
  <div>
    <div>用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值</div>
    <div>
      <p>这是一道大题目，把考点拆成了4个小项；需要侯选人用递归算法实现（限制15行代码以内实现；限制时间10分钟内完成）</p>
      <p>a) 生成一个长度为5的空数组arr。</p>
      <p>b) 生成一个（2－32）之间的随机整数rand。</p>
      <p>c) 把随机数rand插入到数组arr内，如果数组arr内已存在与rand相同的数字，则重新生成随机数rand并插入到arr内[需要使用递归实现，不能使用for/while等循环]</p>
      <p>d) 最终输出一个长度为5，且内容不重复的数组arr。</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  mounted () {
    const arr = []
    const randomNumFun = () => Math.ceil(Math.random() * 30 + 2)
    const pushArr = () => {
      const randomNum = randomNumFun()
      if (arr.length >= 5) {
        console.log(arr)
        return false
      } else {
        if (arr.indexOf(randomNum) < 0) arr.push(randomNum)
        pushArr()
      }
    }
    pushArr()
  }
}
</script>
