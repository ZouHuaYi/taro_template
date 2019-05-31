
import Taro, { Component } from '@tarojs/taro';
import { 
  View,
  Text,
  Image,
  Navigator,
} from '@tarojs/components';

// import { connect } from '@tarojs/redux'
import Layout from '../../components/Layout';
import './user.less'
import {Tips} from "../../utils/tips";
import {globalData} from "../../utils/common";
import withShare from "../../components/Hoc/withShare"

const wait_pay = require('../../assets/user/wait_pay.png');
const wait_send = require('../../assets/user/wait_send.png');
const wait_have = require('../../assets/user/wait_have.png');
const wait_commit = require('../../assets/user/wait_commit.png');
const default_logo = require('../../assets/user/default.png');



interface UserProps {
 
}

interface UserState {
  userInfo:any
}

// @ts-ignore
@withShare()
class User extends Component<UserProps,UserState > {
 
  constructor(props: UserProps) {
    super(props)
    this.state = {
      userInfo:{}
    }
  }

  componentDidMount() {

  }

  componentDidShow(): void {
    if(globalData.userInfo){
      this.setState({
        userInfo:globalData.userInfo,
      })
    }
  }

  navToOrderApp = () => {
    Taro.navigateToMiniProgram({
      appId:'wxe121a943656499fc',
      path:'pages/index/index',
    })
  }

  callPhone = () => {
    Taro.makePhoneCall({
      phoneNumber:'18988967945'
    })
  }

  render() {
    const {userInfo} = this.state;
    return (
    <Layout noBack title='用户中心' app-page='page-container' layout='page'>
      <View className='user-box'>
        <View className='user-header'>
          <View className='user-avter'>
            <Image className='img' src={userInfo.avatar||default_logo}></Image>
          </View>
          {
            userInfo.nickname?(
              <View className='user-content'>
                <View className='user-name'>{userInfo.nickname}</View>
                <View className='user-phone'>{userInfo.phone}</View>
              </View>
            ):(
              <View className='user-content'>
                <View className='user-name'>未登录</View>
                <Navigator openType='navigate' url={'/pages/login/login'} className='user-login'>登录</Navigator>
              </View>
            )
          }
        </View>
        <View className='line-box'></View>
        <View className='user-order'>
          <View className='order-title'>
            <Text className='order-tit'>我的订单</Text>
            <Navigator openType='navigate' url='/pages/buyOrder/buyOrder?status=0' className='order-all'>查看全部&gt;</Navigator>
          </View>
          <View className='order-list'>
            <Navigator className='order-item' openType='navigate' url='/pages/buyOrder/buyOrder?status=1'>
              <Image className='order-icon' src={wait_pay}></Image>
              <Text className='order-name'>待付款</Text>
            </Navigator>
            <Navigator className='order-item' openType='navigate' url='/pages/buyOrder/buyOrder?status=2'>
              <Image className='order-icon' src={wait_send}></Image>
              <Text className='order-name'>待发货</Text>
            </Navigator>
            <Navigator className='order-item' openType='navigate' url='/pages/buyOrder/buyOrder?status=3'>
              <Image className='order-icon' src={wait_have}></Image>
              <Text className='order-name'>待收货</Text>
            </Navigator>
            <Navigator className='order-item' openType='navigate' url='/pages/buyOrder/buyOrder?status=5'>
              <Image className='order-icon' src={wait_commit}></Image>
              <Text className='order-name'>待评价</Text>
            </Navigator>
          </View>
        </View>
        <View className='line-box'></View>
        <View className='nav-list'>
          <View className='nav-item'>
            <View className='nav-icon-text' onClick={this.callPhone}>
              <Text className='icon iconfont icon-kefu'></Text>
              <Text className='nav-text'>联系客服</Text>
            </View>
            <Text className='nav-to iconfont icon-jiantou4'></Text>
          </View>
          <View className='nav-item' onClick={this.navToOrderApp}>
            <View className='nav-icon-text'>
              <Text className='icon iconfont icon-wodetuiguang'></Text>
              <Text className='nav-text'>我的推广</Text>
            </View>
            <Text className='nav-to iconfont icon-jiantou4'></Text>
          </View>
          {/*<View className='nav-item'>18988967945 */}
          {/*  <View className='nav-icon-text'>*/}
          {/*    <Text className='icon iconfont icon-kefu'></Text>*/}
          {/*    <Text className='nav-text'>我的服务</Text>*/}
          {/*  </View>*/}
          {/*  <Text className='nav-to iconfont icon-jiantou4'></Text>*/}
          {/*</View>*/}
        </View>
      </View>
    </Layout>
    )
  }
}

export default User

