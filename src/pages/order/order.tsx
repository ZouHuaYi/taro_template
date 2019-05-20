
import Taro, { Component, Config } from '@tarojs/taro';
import { 
  View,
  Text,
  Image,
  Input,
} from '@tarojs/components';

// import { connect } from '@tarojs/redux'
import Layout from '../../components/Layout';
import AreaCart from '../../components/EreaCart';
import OrderCart from '../../components/OrderCart';

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
          <AreaCart></AreaCart>
          <View className='order-content'>
            <OrderCart></OrderCart>
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

