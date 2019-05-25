import request from '../../utils/request'

// 获取地址数据列表
export async function getAreaListData(params) {
  return request({
    url:'/rest/address/list',
    data:{
      userId:params.userid,
      page:1,
      rows:10,
    }
  })
}

// 删除地址
export async function deletaAreaData(params) {
  return request({
    url:'/rest/address/delete',
    data:{
      addressId:params.id
    }
  })
}

// 添加地址的接口
export async function addAreaData(params) {
  return request({
    url:'/rest/address/add',
    data:{
      userId:params.userid,
      area: params.area,
      receivePhone:params.phone,
      receiveName:params.name,
      address:params.address
    }
  })
}

// 修改数据 更新数据
export async function updateArea(params) {
  return request({
    url:'/rest/address/update',
    data:{
      id:params.id,
      area: params.area,
      receivePhone:params.phone,
      receiveName:params.name,
      address:params.address
    }
  })
}

// 获取 默认 地址
export async function getDefaultAddress(params) {
  return request({
    url: '/rest/address/get_default',
    data: {
      userId: params.userid
    },
  })
}

// 设置默认地址的 api
export async function setDefaultAddress(params) {
  return request({
    url:'/rest/address/set_default',
    data:{
      userId:params.userid,
      addressId:params.id,
    }
  })
}


