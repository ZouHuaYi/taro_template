import request from "../utils/request";


// 获取用户的登录信息
export async function authorLogin(params){
  return request({
    url:'/rest/user/getAppletUnionId',
    data:{
      encryptedData:params.encryptedData,
      iv:params.iv,
      code:params.code
    }
  })
}


// 发送验证码
export async function sendCode(params) {
  return request({
    url:'/rest/user/send_code',
    data:{
      phone:params.phone,
      type:5,
    }
  })
}

// 验证码登录
export async function loginApi(params) {
  return request({
    url:'/rest/user/login_by_code',
    data:{
      phone:params.phone,
      code:params.code
    }
  })
}

// 完善密码
export async function finishPassword(params) {
  return request({
    url:'/rest/user/improve_password',
    data:{
      password:params.password
    }
  })
}

// 绑定微信
export async function bindWechat(params) {
  return request({
    url:'/rest/user/open_bind_unbundled',
    data:{
      wechat:params.unionId,
      unionId:params.unionId,
      id:params.id,
      action:0,
    }
  })
}
