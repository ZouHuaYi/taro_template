import Taro, { Component, Config } from '@tarojs/taro'
import "@tarojs/async-await"
import {Provider} from '@tarojs/redux'
import dva from "./utils/dva"
import models from "./models"
import {globalData,toWork} from "./utils/common"

import './app.less'
import Index from './pages/index'


// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }


const dvaApp = dva.createApp({
  initialState:{},
  models:models
})

const store = dvaApp.getStore()

class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
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

  async componentDidMount () {
    // 获取设备信息
    globalData.store = store;
    const sys = await Taro.getSystemInfo();
    sys && (globalData.systemInfo = sys);

  }

  async componentDidShow () {
    const [err,result] = await toWork(Taro.getSetting)();
    if(err||!result.authSetting['scope.userInfo']) return;

    const [userErr,user] = await toWork(Taro.getUserInfo)();
    if(userErr) return ;
    globalData.wxUseInfoData = user;

    const [loginErr,login] = await toWork(Taro.login)();
    if(loginErr) return ;

    store.dispatch({
      type:'login/wxLoginFn',
      loginData:{
        code:login.code,
        encryptedData:user.encryptedData,
        iv:user.iv
      }
    })

    console.log(user);


  }

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>

    )
  }
}

Taro.render(<App />, document.getElementById('app'))
