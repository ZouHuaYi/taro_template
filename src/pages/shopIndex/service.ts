import request from '../../utils/request'
// 产品相关参数

export interface InterProductDetail {
  userId:number,
  id?:number,
  type?:1
}

// /rest/category/list 获取大分类 pid=0&page=1&type=2&rows=10
export async function categoryList() {
  return request({
    url:'/rest/category/list',
    data:{
      pid:0,
      page:1,
      type:2,
      rows:20,
    }
  })
}

// categoryId=4&page=1&rows=10&position=2 获取banner的数据
export async function bannerList(params:InterProductDetail) {
  return request({
    url:'/rest/banner/list',
    data:{
      categoryId:params.id,
      page:1,
      rows:10,
      position:2,
    }
  })
}

// isRecommend=1&categoryId=4&userId=4165&page=1&rows=10&source=0&city=%E5%B9%BF%E5%B7%9E%E5%B8%82
// order 1 按照销售得量的方式排序，2 价格由高到低，3 价格由低到高
export async function productList(params) {
  return request({
    url:'/rest/product/list',
    data:{
      isRecommend:1,
      categoryId:params.id,
      order:params.order || undefined,
      page:params.page || 1,
      rows:10,
      source:0,
      city:'',
    }
  })
}
