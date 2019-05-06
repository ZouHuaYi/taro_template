// 获取购物车的数据
import {InterProductDetail} from "./ApiInterface";
import request from "../utils/request";


// 获取购物车里面的数量
export function shoppingCartNumber(params:InterProductDetail) {
  return request({
    url:'/rest/shoppingcart/quantity',
    data:{
      userId:params.userId
    }
  })
}

// 加入购物车操作
export function addOrDeteleCart() { //number=1&specificationGroupId=94&productId=3122&userId=4165 ?action=1&token=4897ba133fa3f535f0e27fcd15a522e8
  return request({
    url:'/rest/shoppingcart/add_or_delete',
    data:{

    }
  })
}

// 购物车数据列表
export function cartAllList() {  // userId=4165 token
  return request({
    url:'/rest/shoppingcart/list',
    data:{

    }
  })
}
