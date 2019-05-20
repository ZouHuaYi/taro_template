
import Taro, { Component, Config } from '@tarojs/taro';
import { 
  View,
  Text, 
} from '@tarojs/components';

import './index.less'

interface OrderCartProps {
 
}

interface OrderCartState {
 
}


class OrderCart extends Component<OrderCartProps,OrderCartState > {
 
  constructor(props: OrderCartProps) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <View className='OrderCart-box'>
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
      </View>
    )
  }
}

export default OrderCart

