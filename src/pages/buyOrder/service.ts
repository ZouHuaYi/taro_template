import request from "../../utils/request";
import {globalData} from "../../utils/common";


// 获取数据订单列表
export async function orderList(params) {
  return request({
    url:'/rest/order/list',
    data:{
      userId:globalData.userInfo.id,
      page:params.page,
      rows:params.rows,
      type:3,
      status:params.status,  // 0 所有 1 待支付 2 待发货 3 待收货 4 待评价
    }
  })
}


// 提醒发货
export async function remindShop(params) {
  return request({
    url:'/rest/order/remind',
    data:{
      orderId:params.id,
    }
  })
}

// 删除订单接口
export async function deleteOrder(params) {
  return request({
    url:'/rest/order/delete',
    data:{
      orderId:params.id
    }
  })
}

// 取消订单
export async function cancalOrder(params) {
  return request({
    url:'/rest/order/update_status',
    data:{
      orderId:params.id,
      status:-1,
    }
  })
}


// 获取订单详细信息
export async function orderTypeDetail(params) {
  return request({
    url:'/rest/order/detail',
    data:{
      orderId:params.id
    }
  })
}
