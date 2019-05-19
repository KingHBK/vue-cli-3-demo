/**
 * 时间戳转日期格式
 * @param {String} timestamp  是 时间戳10位或13位
 * @return {String} 年-月-日 时:分:秒
 */
let timestampToTime = (timestamp) => {
  let date, Y, M, D, h, m, s
  if (timestamp.length === 10) {
    date = new Date(timestamp * 1000)
  } else {
    date = new Date(timestamp)
  }
  Y = date.getFullYear() + '-'
  M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  D = date.getDate() + ' '
  h = date.getHours() + ':'
  m = date.getMinutes() + ':'
  s = date.getSeconds()
  return Y + M + D + h + m + s
}

/**
 * 结束时间倒数
 * @param {String} timestamp  是 时间戳10位或13位
 * @return {String} 年-月-日 时:分:秒
 */
let timestampToEnd = (timestamp) => {
  let hours = Math.floor(timestamp / 3600)
  let minutes = Math.floor(timestamp % 3600 / 60)
  let seconds = Math.floor(timestamp % 3600 % 60)
  if (hours < 0 || minutes < 0 || seconds < 0) {
    return '00:00:00'
  } else {
    return `${hours < 10 ? '0' : ''}${hours} : ${minutes < 10 ? '0' : ''}${minutes} : ${seconds < 10 ? '0' : ''}${seconds}`
  }
}

/**
 * 获取url上的参数
 * @param {String} name 获取的参数名
 * @return {String} 返回参数
 */
let getQueryString = (name) => {
  // let url = document.location.toString()
  let url = window.location.hash.toString()
  let arrObj = url.split('?')
  if (arrObj.length > 1) {
    let arrPara = arrObj[1].split('&')
    let arr
    for (let i = 0; i < arrPara.length; i++) {
      arr = arrPara[i].split('=')
      if (arr != null && arr[0] === name) {
        return arr[1]
      }
    }
    return ''
  } else {
    return ''
  }
}

/**
 * 设置cookie
 * @param {String} name  是 设置的cookie的名称
 * @param {String} value 是 设置的cookie的值
 * @param {String} day   否 设置的cookie的有效期限
 */
let setCookie = (name, value, day) => {
  day = day === undefined ? 0 : day
  if (day !== 0) { // 当设置的时间等于0时，不设置expires属性，cookie在浏览器关闭后删除
    let expires = day * 24 * 60 * 60 * 1000
    let date = new Date(+new Date() + expires)
    document.cookie = `${name}=${escape(value)};path=/;expires=${date.toUTCString()}`
  } else {
    document.cookie = `${name}=${escape(value)};path=/`
  }
}
/**
 * 获取cookie
 * @param {String} name 是 需获取的cookie的名称
 * @return {String} 返回cookie
 */
let getCookie = (name) => {
  let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  let arr = document.cookie.match(reg)
  if (arr) {
    return unescape(arr[2])
  } else {
    return ''
  }
}
/**
 * 删除cookie
 * @param {String} name 是 需删除的cookie的名称
 */
let delCookie = (name) => {
  setCookie(name, ' ', -1)
}

/**
 * 判断手机浏览器类型（安卓或苹果）
 * @return {String} android(安卓) ios(苹果)
 */
let judgeOS = () => {
  let u = navigator.userAgent
  let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1
  let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  if (isAndroid) {
    return 'android'
  } else if (isIOS) {
    return 'ios'
  }
}

/**
 * 判断是否微信浏览器
 * @return {Boolean}
 */
let isWeiXin = () => {
  let ua = window.navigator.userAgent.toLowerCase()
  return ua.indexOf('micromessenger') !== -1
}

/**
 * 检验手机号码合法性
 * @param {String} phone 是 手机号码
 * @return {Boolean}
 */
let isMobileAvailable = (phone) => {
  let reg = /^[1][3,4,5,7,8][0-9]{9}$/
  if (!reg.test(phone)) {
    return false
  } else {
    return true
  }
}

export { timestampToTime, timestampToEnd, setCookie, getCookie, delCookie, judgeOS, isWeiXin, isMobileAvailable, getQueryString }
