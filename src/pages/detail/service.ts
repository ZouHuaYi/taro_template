import request from '../../utils/request';
import {InterOrder} from "./interface";
import {globalData} from "../../utils/common";

// 获取商品详情数据 type=1 不知是什么意思
export async function getDetail(params) {
  return request({
    url:'/rest/product/detail',
    data:{
      id:params.id,
      type:1
    }
  })
}

// 添加购物车 action:1 add 0 delete
export async function addOrdeleteCartAction(params) {
  return request({
    url:'/rest/shoppingcart/add_or_delete',
    data:{
      action:params.action===0?0:1,
      number:params.number||undefined,
      specificationGroupId:params.typeid||undefined,
      productId:params.id||undefined,
      ids:params.ids||undefined,
      userId:params.userid
    }
  })
}

// 获取购物陈数量
export async function getShopCartNumber(params) {
  return request({
    url:'/rest/shoppingcart/quantity',
    data:{
      userId:params.userid,
    }
  })
}

// 生成订单
export async function placeOder({params}:InterOrder) {
  return request({
    url:'/rest/order/place',
    data:{
      addressId:params.areaid,
      userId:globalData.userInfo.id,
      hospitalId:params.hospitalid,
      amount:params.price,
      originalPrice:params.price,
      retainage:0.0,
      item:params.item,
      invoiceRemark:params.remark,
      type:3
    }
  })
}


// 微信支付签名
export async function wxPayMonney(params) {
  return request({
    url:'/rest/order/buy',
    data:{
      subject:"商城卖场",
      body:"商城卖场",
      orderNumber:params.orderNumber,
      payType:6,
      openid:params.openid
    }
  })
}


/*
* item =  [{"userCouponId":111,"hospital": { "id": 600,},"item": [{"number": 1,"productId": 3136, "shoppingCartId": 456, "specificationGroupId": 116,},"remark":"请尽快发货"]}]
* */
// 生成多订单的接口
export async function multiProduct(params) {
  return request({
    url:'/rest/order/multi_product',
    data:{
      userId:globalData.userInfo.id,
      type:3,
      addressId:params.areaid,
      item:params.item,
    }
  })
}
