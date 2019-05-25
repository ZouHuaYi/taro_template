import request from '../../utils/request';


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
