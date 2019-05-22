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
