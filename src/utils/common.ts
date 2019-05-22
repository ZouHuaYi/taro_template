import Taro from '@tarojs/taro';
import Tips from './tips';

// 定义全局变量
export let globalData:any = {};


// 判断用户是否已经登录
export async function loginStatus() {
  // 获取用户是否设置信息
  const [err,result] = await toWork(Taro.getSetting)();
  if(err||!result.authSetting['scope.userInfo']) {
    // 用户没有授权的时候跳转到授权页面
    Taro.navigateTo({
      url:'/pages/impower/impower '
    });
   return ;
  }

  const [userErr,user] = await toWork(Taro.getUserInfo)();
  if(userErr){
    // 无法获取用户信息
    Tips.toast('小程序无法获取用户信息，请重启小程序');
   return ;
  }
  globalData.wxUseInfoData = user;
  const [loginErr,login] = await toWork(Taro.login)();
  if(loginErr){
   // 小程序无法登录
    Tips.toast('小程序无法登录，请重启小程序');
   return ;
  }
  //  获取微信登录的信息
  globalData.store.dispatch({
    type:'login/wxLoginFn',
    loginData:{
      code:login.code,
      encryptedData:user.encryptedData,
      iv:user.iv
    }
  })

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

// 延迟时间
export const delay = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve,timeout)
  })

}
