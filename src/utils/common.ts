
// 定义全局变量
export let globalData:any = {};


// 登录验证
export async function getSettingStatus() {

}

// async await 的错误处理
export function toWork(fn) {
  return async (...args) => {
    try {
      return [null,await fn.apply(this,args)];
    }catch (err) {
      return [err];
    }
  }
}
