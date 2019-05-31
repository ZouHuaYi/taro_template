import request from "../../utils/request";



// 获取banner图
export async function bannerList() {
  return request({
    url:'/rest/banner/list',
    data:{
      page:1,
      row:20,
      position:0,
    }
  })
}

// 热门产品的数据
export async function hotProduct() {
  return request({
    url:'/rest/product/list',
    data:{
      isHot:1,
      page:1,
      rows:10,
      source:0,
    },
  })
}
