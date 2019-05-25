import request from "../../utils/request";
import {globalData} from "../../utils/common";


// 获取所有的顾购物车数据
export async function cartShopList() {
  return request({
    url:'/rest/shoppingcart/list',
    data:{
      userId:globalData.userInfo.id
    }
  })
}

// 删除购物车的接口
export async function addOrDel() {
  
}
