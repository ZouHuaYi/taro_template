import request from '../utils/request';
import {InterProductDetail} from "./ApiInterface";


export function productDetail(params:InterProductDetail) {  //userId=0&id=3498&type=1, userId 不为空的时候可以购买
  return request({
    url:'/rest/product/detail',
    data:{
      userId:params.userId,
      id:params.id,
      type:params.type
    }
  })
}

export function productList(params) { // isHot=1&categoryId=4&userId=4165&page=1&rows=10&source=0&city=%E5%B9%BF%E5%B7%9E%E5%B8%82
  return request({      // isRecommend=1&categoryId=4&userId=4165&page=1&rows=10&source=0&city=%E5%B9%BF%E5%B7%9E%E5%B8%82
    url:'/rest/product/list',
    data:{
      ...params
    }
  })
}
