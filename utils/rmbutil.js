'use strict'

let allow_point = true
let allow_point_len = 3
let limit_len = 12

function updateInput(lastChar, oldStr) {
  let newStr = oldStr
  let current_len = oldStr.length
  switch (lastChar) {
    case '.':
      if (allow_point) {
        // 判断点号前的输入为空即输入了'0'的时候
        if (oldStr === '') {
          oldStr = '0'
          current_len += 1
        }
        newStr = oldStr + lastChar
        //只能输入一个小数点
        allow_point = false
        // 输入小数点后的长度限制为当前长度加3，即小数点加两位小数
        limit_len = current_len + allow_point_len
      }
      break
    case '0':
      // 输入为'0'时，若长度大于0小于限制，则可以输入
      if (current_len > 0 && current_len < limit_len)
        newStr = oldStr + lastChar
      break
    default:
      // 其余字符直接输入
      if (current_len < limit_len)
        newStr = oldStr + lastChar
      break;
  }
  return newStr
}
/**
 * 按删除键时处理字符长度变化
 */
function updateInputBack(lastChar, oldStr) {
  // 删除无需条件皆可删
  let newStr = oldStr.substring(0, oldStr.length - 1)
  switch (lastChar) {
    case '.':
      // 删除只剩'0'时，置为空
      if (newStr === '0') {
        newStr = ''
      }
      reset()
      break
    default:
      break;
  }
  return newStr
}

function reset() {
  limit_len = 12
  allow_point = true
  allow_point_len = 3
}

export {
  updateInput,
  updateInputBack,
  reset
}
