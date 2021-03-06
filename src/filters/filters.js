import Vue from 'vue'

Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  let arr = value.split(' ')
  let capitalizedArray = []
  arr.forEach((word) => {
    let capitalized = word.charAt(0).toUpperCase() + word.slice(1)
    capitalizedArray.push(capitalized)
  })
  return capitalizedArray.join(' ')
})

Vue.filter('title', function (value, replacer = '_') {
  if (!value) return ''
  value = value.toString()

  let arr = value.split(replacer)
  let capitalizedArray = []
  arr.forEach((word) => {
    let capitalized = word.charAt(0).toUpperCase() + word.slice(1)
    capitalizedArray.push(capitalized)
  })
  return capitalizedArray.join(' ')
})

Vue.filter('truncate', function (value, limit, more = '') {
  if (value.length <= limit) {
    return value
  }
  return value.substring(0, limit) + more
})

Vue.filter('tailing', function (value, tail) {
  return value + tail
})

Vue.filter('time', function (value, is24HrFormat = false) {
  if (value) {
    const date = new Date(Date.parse(value))
    let hours = date.getHours()
    const min = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes()
    if (!is24HrFormat) {
      const time = hours > 12 ? 'AM' : 'PM'
      hours = hours % 12 || 12
      return hours + ':' + min + ' ' + time
    }
    return hours + ':' + min
  }
})

Vue.filter('date', function (value, fullDate = false) {
  value = String(value)
  const date = value.slice(8, 10).trim()
  const month = value.slice(4, 7).trim()
  const year = value.slice(11, 15)

  if (!fullDate) return date + ' ' + month
  else return date + ' ' + month + ' ' + year
})

Vue.filter('month', function (val, showYear = true) {
  val = String(val)

  const regx = /\w+\s(\w+)\s\d+\s(\d+)./
  if (!showYear) {
    return regx.exec(val)[1]
  } else {
    return regx.exec(val)[1] + ' ' + regx.exec(val)[2]
  }
})

Vue.filter('digit', function (num) {
  return (num / 1).toString().replace(/[^0-9]/g, '')
})
