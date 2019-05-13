
import Taro, { Component, Config } from '@tarojs/taro';
import {
  View,
  Text,
  Image
}
from '@tarojs/components';
// import { connect } from '@tarojs/redux'
import Layout from '../../components/Layout';

import './cart.less'

interface CartProps {
 
}

interface CartState {
 
}

// @connect(({})=>({}))
class Cart extends Component<CartProps,CartState > {
 
  constructor(props: CartProps) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    
  }

  render() {
    return (
    <Layout noBack={false} title='购物车' app-page='page-container' layout='page'>
      <View className='cart-box'>
          <View className='cart-list'>
            <View className='cart-item'>
              <Text className='circle'></Text>
              <View className='shop-img'>
                <Image className='img' src='http://mei3mei.oss-cn-shenzhen.aliyuncs.com/uploadfiles/banner/5f6c56ff1aae4df093039ad65b4a16ea.jpg'></Image>
              </View>
              <View className='shop-text'>
                <View className='shop-tit'>低价代购 Refa Carat 低价代购 低价代购 </View>
                <Text className='shop-type'>银色</Text>
                <View className='shop-price'>￥1356.00</View>
              </View>
              <Text className='delete icon iconfont icon-shanchu'></Text>
              <View className='add-number'>
                <Text className='btn'>-</Text>
                <Text className='btn-center'>13</Text>
                <Text className='btn'>+</Text>
              </View>
            </View>
            <Text className='center-line'></Text>
            <View className='cart-item'>
              <Text className='circle'></Text>
              <View className='shop-img'>
                <Image className='img' src='http://mei3mei.oss-cn-shenzhen.aliyuncs.com/uploadfiles/banner/5f6c56ff1aae4df093039ad65b4a16ea.jpg'></Image>
              </View>
              <View className='shop-text'>
                <View className='shop-tit'>低价代购 Refa Carat 低价代购 低价代购 </View>
                <Text className='shop-type'>银色</Text>
                <View className='shop-price'>￥1356.00</View>
              </View>
              <Text className='delete icon iconfont icon-shanchu'></Text>
              <View className='add-number'>
                <Text className='btn'>-</Text>
                <Text className='btn-center'>13</Text>
                <Text className='btn'>+</Text>
              </View>
            </View>
          </View>
      </View>
      <View className='order-all'>
        <View className='order-select'>
          <Text className='circle'></Text>
          <Text className=''>全选</Text>
        </View>
        <View className='order-right'>
          <Text className='order-price'>合计:0.00元</Text>
          <Text className='order-btn'>去结算</Text>
        </View>
      </View>
    </Layout>
    )
  }
}

export default Cart

