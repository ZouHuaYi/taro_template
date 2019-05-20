import request from "../utils/request";

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
