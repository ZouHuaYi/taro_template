
import Taro, { Component, Config } from '@tarojs/taro';
import { 
  View,
  Text,
  Button,
  Image,
  Navigator,
} from '@tarojs/components';
// import { connect } from '@tarojs/redux'
import Layout from '../../components/Layout';

import './user.less'

interface UserProps {
 
}

interface UserState {
 
}

// @connect(({})=>({}))
class User extends Component<UserProps,UserState > {
 
  constructor(props: UserProps) {
    super(props)
    this.state = {}
  }

  componentDidMount() {

  }

  render() {
    return (
    <Layout noBack title='用户中心' app-page='page-container' layout='page'>
      <View className='user-box'>
        <View className='user-header'>
          <View className='user-avter'>
            <Image className='img' src={'http://mei3mei.oss-cn-shenzhen.aliyuncs.com/uploadfiles/banner/5f6c56ff1aae4df093039ad65b4a16ea.jpg'}></Image>
          </View>
          <View className='user-content'>
            <View className='user-name'>未登录</View>
            <View className='user-login'>登录</View>
          </View>
        </View>
        <View className='line-box'></View>
        <View className='user-order'>
          <View className='order-title'>
            <Text className='order-tit'>我的订单</Text>
            <Text className='order-all'>查看全部&gt;</Text>
          </View>
          <View className='order-list'>
            <Navigator className='order-item' openType='navigate' url='/pages/buyOrder/buyOrder'>
              <Image className='order-icon' src={'http://mei3mei.oss-cn-shenzhen.aliyuncs.com/uploadfiles/banner/5f6c56ff1aae4df093039ad65b4a16ea.jpg'}></Image>
              <Text className='order-name'>待付款</Text>
            </Navigator>
            <View className='order-item'>
              <Image className='order-icon' src={'http://mei3mei.oss-cn-shenzhen.aliyuncs.com/uploadfiles/banner/5f6c56ff1aae4df093039ad65b4a16ea.jpg'}></Image>
              <Text className='order-name'>待发货</Text>
            </View>
            <View className='order-item'>
              <Image className='order-icon' src={'http://mei3mei.oss-cn-shenzhen.aliyuncs.com/uploadfiles/banner/5f6c56ff1aae4df093039ad65b4a16ea.jpg'}></Image>
              <Text className='order-name'>待收货</Text>
            </View>
            <View className='order-item'>
              <Image className='order-icon' src={'http://mei3mei.oss-cn-shenzhen.aliyuncs.com/uploadfiles/banner/5f6c56ff1aae4df093039ad65b4a16ea.jpg'}></Image>
              <Text className='order-name'>待评价</Text>
            </View>
            <View className='order-item'>
              <Image className='order-icon' src={'http://mei3mei.oss-cn-shenzhen.aliyuncs.com/uploadfiles/banner/5f6c56ff1aae4df093039ad65b4a16ea.jpg'}></Image>
              <Text className='order-name'>退款/售后</Text>
            </View>
          </View>
        </View>
        <View className='line-box'></View>
        <View className='nav-list'>
          <View className='nav-item'>
            <View className='nav-icon-text'>
              <Text className='icon iconfont icon-kefu'></Text>
              <Text className='nav-text'>联系客服</Text>
            </View>
            <Text className='nav-to iconfont icon-jiantou4'></Text>
          </View>
          <View className='nav-item'>
            <View className='nav-icon-text'>
              <Text className='icon iconfont icon-kefu'></Text>
              <Text className='nav-text'>我的服务</Text>
            </View>
            <Text className='nav-to iconfont icon-jiantou4'></Text>
          </View>

        </View>
      </View>
    </Layout>
    )
  }
}

export default User

