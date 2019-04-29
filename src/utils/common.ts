export const repeat = (str = '0', times) => (new Array(times + 1)).join(str);
// 时间前面 +0
export const pad = (num, maxLength = 2) => repeat('0', maxLength - num.toString().length) + num;
/** 时间格式的转换 */
export const formatTime = time => `${pad(time.getHours())}:${pad(time.getMinutes())}:${pad(time.getSeconds())}.${pad(time.getMilliseconds(), 3)}`

export var globalData: any = {} // 全局公共变量
