import Taro from '@tarojs/taro'
import {
  authorLogin,
  sendCode,
  loginApi,
  finishPassword,
  bindWechat,
} from "../api/login";
import {toWork,delay,globalData} from "../utils/common";
import {Tips} from '../utils/tips';

// 登录的所有逻辑状态管理
export default {
  namespace:'login',
  state:{
    user:{},
    openid:'',
    unionid:'',
    codeText:'发送验证码',
    disabled:true,
    passwordStatus:false,
  },
  effects:{
    // 微信自动登录
    *wxLoginFn({loginData},{call,put}){
      // 微信登录 获取 token
      const [err,result] = yield call(toWork(authorLogin),loginData);
      if(err) return ;
      if(result.messageCode==900){
        // 请求获取数据成功 存储 token 用户信息 保存 用户
        yield put({
          type:'save',
          data:{
            user:result.data.user,
            openid:result.data.openid,
          }
        })
        globalData.userInfo = result.data.user;
      }else if(result.messageCode==132){
        // 该微信未绑定
        yield put({
          type:'save',
          data:{
            openid:result.data.openid,
            unionid:result.data.unionid,
          },
        })
        // 跳转到登录页面
        Taro.navigateTo({
          url:'/pages/login/login'
        })
      }else {
        // 接口出错的时候
        Tips.toast(result.message||'无法获取数据');
      }
    },
    // 发送验证码
    *sendCodeFun({phone},{call,put}){
      Tips.loading('正在发送');
      const [err,result] = yield call(toWork(sendCode),phone);
      Tips.loaded();
      if(err) return ;
      if(result.messageCode==900){
        Tips.toast('验证码发送成功');
        yield put({type:'save',data:{disabled:false,} });
        let tim = 59;
        while (tim>0){
          tim--;
          yield call(delay,1000);
          yield put({type:'save',data:{codeText:`${tim}s后重试` }});
        }
        yield put({type:'save',data:{ codeText:`重新获取` }});
      }else {
        Tips.toast(result.message||'验证码发送失败');
      }
      yield put({type:'save',data:{disabled:true}})

    },
    // 点击登录按钮进行登录
    *btnLoginFun({params},{call,put}){
      Tips.loading('正在登录');
      const [err,result] = yield call(toWork(loginApi),params);
      Tips.loaded();
      if(err) return ;
      if(result.messageCode==900){
        // 登录成功
        yield put({type:'save',data:{
            user:result.data,
        }});
        globalData.userInfo = result.data;
        yield put({
          type:"bindWechat"
        })
      }else if(result.messageCode==129){
        // 没有密码的时候
        yield put({type:'save',data:{passwordStatus:true}});
        globalData.userInfo = result.data;
      }else {
        Tips.toast(result.message||'验证码出错');
      }

    },
    // 输入密码的
    *inputPassword({password},{call,put}){
        Tips.loading('提交密码');
        const [err,result] =  yield call(toWork(finishPassword),password);
        Tips.loaded();
        if(err) return ;
        if(result.messageCode==900){
          // 跳转回到原来的url 绑定用户信息
          yield put({
            type:"bindWechat"
          })
        }else {
          Tips.toast(result.message||'无法设置密码');
        }
    },
    *bindWechat(_,{call,select}){
      const user = yield select(state=>state.login);
      console.log(user,'x-x-')
      yield call(toWork(bindWechat),{
        wechat:user.unionid,
        unionId:user.unionid,
        id:user.user.id,
      });
      Taro.navigateBack();
    }
  },
  reducers:{
    save(state,action) {
      return{
        ...state,
        ...action.data,
      }
    }
  }
}
