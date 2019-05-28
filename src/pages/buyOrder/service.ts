import request from "../../utils/request";
import {globalData} from "../../utils/common";


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
