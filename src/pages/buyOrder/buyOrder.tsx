
import Taro, { Component, Config } from '@tarojs/taro';
import { 
  View,
  Text,
  Image,
  Button,
  ScrollView,
} from '@tarojs/components';
import { connect } from '@tarojs/redux';
import Layout from '../../components/Layout';

import './buyOrder.less'

interface BuyOrderProps {
  buyOrder:any,
  dispatch:any,
}

interface BuyOrderState {
 
}

@connect(({buyOrder})=>({buyOrder}))
class BuyOrder extends Component<BuyOrderProps,BuyOrderState > {
 
  constructor(props: BuyOrderProps) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.props.dispatch({
      type:'buyOrder/getOrderList',
      params:{

      }
    })
  }

  render() {
    return (
    <Layout noBack={false} title='我的订单' app-page='page-container' layout='page'>
      <View className='buyOrder-box'>
        <View className='buy-nav'>
          <View className='nav-item active'>全部</View>
          <View className='buy-item'>
            <Text className='nav-item'>待付款</Text>
            <Text className='nav-item'>待发货</Text>
            <Text className='nav-item'>待收货</Text>
            <Text className='nav-item'>待评价</Text>
          </View>
        </View>
        <View className='buy-content'>
          <ScrollView scrollY style={{'width':'100%','height':'100%'}}>
            <View className='content-list'>

              <View className='content-item'>
                <View className='item-details'>
                  <View className='cont-img'>
                    <Image mode='center' className='img' src='http://mei3mei.oss-cn-shenzhen.aliyuncs.com/uploadfiles/banner/5f6c56ff1aae4df093039ad65b4a16ea.jpg'></Image>
                  </View>
                  <View className='cont-title'>
                    <View className='tit-first'>产品标题产品名称什么什么的什么什么的产品标题产品名称什么什么的什么什么的</View>
                    <View className='tit-type'>格式</View>
                  </View>
                  <View className='cont-price'>
                    <Text className='price'>￥330</Text>
                    <Text className='num'>X1</Text>
                    <Text className='status'>交易成功</Text>
                  </View>
                </View>
                <View className='cont-number'>共1件商品  合计：¥330</View>
                <View className='cont-active'>
                  <Button className='btn' size='mini' >申请退款</Button>
                  <Button className='btn' size='mini' >提醒发货</Button>
                </View>
              </View>

            </View>
          </ScrollView>
        </View>
      </View>
    </Layout>
    )
  }
}

export default BuyOrder

