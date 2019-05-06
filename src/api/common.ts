import request from "../utils/request";


// 分类目录的
export function categoryList() { //pid=0&page=1&type=2&rows=10 分页
  return request({
    url:'/rest/category/list',
    data:{

    }
  })
}


// 某个分类下面的轮播图
export function bannerList() {  // categoryId=4&page=1&rows=10&position=2
  return request({
    url:'/rest/banner/list',
    data:{}
  })
}





