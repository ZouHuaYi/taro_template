import Taro from '@tarojs/taro'
import "@tarojs/async-await"

import Tips from './tips'

const Admin_Root = 'https://admin.topmei3mei.com'
const Test_Root = 'https://test.topmei3mei.com'
const dev_status = true
const Root = dev_status?Admin_Root:Test_Root

interface ApiOptions {
  data:any,
  url:string
}

export default function request(options:ApiOptions) {
  return new Promise((resole,reject)=>{
    let data = options.data;
    if(data && Object.keys(data).length>0){
      let keys =  Object.keys(data);
      keys = keys.filter(name=> data[name]!==undefined);
      data = encodeURI(keys.map(name =>`${name}=${data[name]}`).join("&"));
    }else{
      data = {}
    }
    Taro.request({
      url: Root+options.url,
      data:data,
      method:'POST',
      header:{
        "content-type":"application/x-www-form-urlencoded"
      },
      dataType:"JSON",
      success:res => {
        try {
          let dat = JSON.parse(res.data);
          if(dat.messageCode==904 || dat.messageCode==906 || dat.messageCode==903){
            // 这里的判断是授权，这个是用户账户异常的
          }else {
            resole(dat);
          }
        }catch (e) {
          Tips.toast('数据异常');
          reject(e)
        }
      },
      fail:res => {
        Tips.toast('请求出错啦！');
        reject(res)
      }
    })
  })
}
