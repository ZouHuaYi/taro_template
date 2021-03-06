export const route = {
  "pages": [
    'pages/index/index',
    'pages/detail/detail',
    'pages/cart/cart',
    'pages/shopIndex/shopIndex',
    'pages/order/order',
    'pages/addArea/addArea',
    'pages/areaList/areaList',
    'pages/user/user',
    'pages/search/search',
    'pages/login/login',
    'pages/buyOrder/buyOrder',
    'pages/test/index',
    'pages/impower/impower'
  ],
  "window": {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'white',
    navigationStyle:"custom"
  },
  "tabBar":{
    "color":"#7D7C85",
    "selectedColor": "#EE6697",
    "list":[
      {
        "pagePath": "pages/index/index",
        "iconPath": "./assets/tab/shop_default.png",
        "selectedIconPath": "./assets/tab/shop_active.png",
        "text": "首页"
      },
      {
        "pagePath": "pages/shopIndex/shopIndex",
        "iconPath": "./assets/tab/shop_default.png",
        "selectedIconPath": "./assets/tab/shop_active.png",
        "text": "全部商品"
      }
    ]
  }
}
