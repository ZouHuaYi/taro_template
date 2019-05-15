
import Taro, { Component, Config } from '@tarojs/taro';
import { 
  View,
  Text,
  Image,
  Input,
} from '@tarojs/components';
// import { connect } from '@tarojs/redux'
import Layout from '../../components/Layout';

import './order.less'

interface OrderProps {
 
}

interface OrderState {
 
}

// @connect(({})=>({}))
class Order extends Component<OrderProps,OrderState > {
 
  constructor(props: OrderProps) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    
  }

  render() {
    return (
    <Layout noBack={false} title='确认订单' app-page='page-container' layout='page'>
      <View className='order-box'>
          <View className='order-area'>
            <View className='order-area-list'>
              <View className='area-data'>
                <Text className='ia iconfont icon-kefu'></Text>
                <View className='area-name'>邹华毅</View>
                <View className='area-detail'>广州市番禺区其他市！</View>
                <Text className='area-phone'>15016447087</Text>
                <Text className='jt iconfont icon-jiantou4'></Text>
              </View>
            </View>
          </View>
          <View className='order-content'>
            <View className='order-title'>
              <Text className='tit-left'>未来密码.艺术家面膜同款</Text>
              <Text className='tit-right'>待支付</Text>
            </View>
            <View className='shop-detail'>
              <View className='shop-img'>
                <Image className='img' src='http://mei3mei.oss-cn-shenzhen.aliyuncs.com/uploadfiles/banner/5f6c56ff1aae4df093039ad65b4a16ea.jpg'></Image>
              </View>
              <View className='shop-right'>
                <Text className='shop-title'>NASAKLL 洗护套装</Text>
                <Text className='shop-price'>￥559.00</Text>
                <Text className='shop-number'>x1</Text>
              </View>
            </View>
            <View className='shop-add-number'>
              <Text className='number-text'>数量</Text>
              <View className='number-add-btn'>
                <Text className='num-btn'>-</Text>
                <Text className='num-input'>1</Text>
                <Text className='num-btn'>+</Text>
              </View>
            </View>
            <View className='send-type'>
              <Text className='send-name'>支付配送</Text>
              <Text className='type'>快递免邮</Text>
            </View>
            <View className='user-buy'>
              <Text className='user-say'>买家留言</Text>
              <Input className='user-inp' name='content' type='text' placeholder={'选填，对本次交易的说明'} />
            </View>
          </View>
      </View>
      <View className='btn-floor'>
        <View className='floor-text'>
          <Text className='s-pay-monney'>支付金额</Text>
          <Text className='s-price'>￥900.00</Text>
        </View>
        <View className='post-btn'>提交订单</View>
      </View>
    </Layout>
    )
  }
}

export default Order

