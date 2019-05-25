import Taro from '@tarojs/taro';
import Tips from './tips';

// 定义全局变量
export let globalData:any = {};

let login_type:boolean = false;


// 判断用户是否已经登录
export async function loginStatus() {

  return new Promise(async (resolve,reject)=>{
    // 如果用户信息已经存在则
    if(globalData.userInfo){
      resolve();
      return;
    }
    if(login_type){
      // 如果已经登陆同时也走进去的如何轮询获取该值
     let login_number = 0;
     let t = setInterval(()=>{
        login_number += 1;
        console.log(`跑了${login_number}次`);
        if(login_type===false||login_number===50){
          clearInterval(t);
          resolve();
        }
      },200);
      return;
    }
    login_type = true;

    // 获取用户是否设置信息
    const [err,result] = await toWork(Taro.getSetting)();
    if(err||!result.authSetting['scope.userInfo']) {
      // 用户没有授权的时候跳转到授权页面
      Taro.navigateTo({
        url:'/pages/impower/impower '
      });
      login_type = false;
      reject();
    }

    const [userErr,user] = await toWork(Taro.getUserInfo)();
    if(userErr){
      // 无法获取用户信息
      Tips.toast('小程序无法获取用户信息，请重启小程序');
      login_type = false;
      reject();
    }
    globalData.wxUseInfoData = user;
    const [loginErr,login] = await toWork(Taro.login)();
    if(loginErr){
      // 小程序无法登录
      Tips.toast('小程序无法登录，请重启小程序');
      login_type = false;
      reject();
    }
    try {
      //  获取微信登录的信息
      await globalData.store.dispatch({
        type:'login/wxLoginFn',
        loginData:{
          code:login.code,
          encryptedData:user.encryptedData,
          iv:user.iv
        }
      })
      // 获取购物车的数量
      globalData.store.dispatch({
        type:'detail/getCartAllNumber',
      })
    }finally {
      login_type = false;
      resolve(true);
    }
  });
}

// async await 的错误处理
export function toWork(fn) {
  return async (...args) => {
    try {
      return [null,await fn.apply(this,args)];
    }catch (err) {
      console.log(err);
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


// 验证是否已经登陆
export function loginJudge() {
  return new Promise((resolve,reject)=>{
    if(!globalData.userInfo){
      Taro.navigateTo({
        url:'/pages/login/login',
      });
      reject()
    }
    resolve();
  })
}
