<template>
  <div>
    <h1>题目</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  mounted () {
    const strTest = 'abcccdeffghhhh'

    // 字符串或数组去重思路
    const removeRepeatStr1 = str => {
      let newStr = ''
      let newLen = 0
      let flag
      for (let i = 0; i < str.length; i++) {
        flag = 1
        newLen = newStr.length
        for (let j = 0; j < newLen; j++) {
          if (str[i] === newStr[j]) {
            flag = 0
            break
          }
        }
        if (flag) {
          newStr = newStr + str[i]
        }
      }
      return newStr
    }

    const removeRepeatStr2 = str => {
      let newStr = ''
      for (let i = 0; i < str.length; i++) {
        if (newStr.indexOf(str[i]) === -1) {
          newStr = newStr + str[i]
        }
      }
      return newStr
    }

    console.log(removeRepeatStr1(strTest))
    console.log(removeRepeatStr2(strTest))

    // 数组排序思路
    const arrTest = [ 2, 4, 3, 5, 4, 5, 2, 4, 1, 2 ]
    const sortArr1 = arr => {
      let newArr = []
      for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
          newArr.push(arr[0])
          continue
        }
        for (let j = 0; j < newArr.length; j++) {
          if (arr[i] <= newArr[j]) {
            newArr.splice(j, 0, arr[i])
            break
          } else if (arr[i] > newArr[newArr.length - 1]) {
            newArr.push(arr[i])
            break
          }
        }
      }
      return newArr
    }

    // 冒泡式排序
    const sortArr2 = arr => {
      for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
          if (arr[j] > arr[j + 1]) {
            let temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
          }
        }
      }
      return arr
    }

    console.log(sortArr1(arrTest))
    console.log(sortArr2(arrTest))

    // 数组去重
    let afterSet = new Set(arrTest)
    afterSet = Array.from(afterSet)
    console.log(afterSet)
  }
}
</script>
