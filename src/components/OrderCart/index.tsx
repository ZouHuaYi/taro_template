
import Taro, { Component } from '@tarojs/taro';
import { 
  View,
  Text, 
} from '@tarojs/components';

import './index.less'

interface OrderCartProps {
  detailData:any
}

interface OrderCartState {
 
}


class OrderCart extends Component<OrderCartProps,OrderCartState > {
 
  constructor(props: OrderCartProps) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    
  }

  render() {
    const {detailData,orderNumber} = this.props;
    return (
      <View className='OrderCart-box'>
        {
          detailData.discount_price?(
            <View className='order-title'>
              <Text className='tit-left'>{detailData.hospital.name}</Text>
              <Text className='tit-right'>待支付</Text>
            </View>
          ):''
        }

        <View className='shop-detail'>
          <View className='shop-img'>
            <Image className='img' src={detailData.thumbnail} ></Image>
          </View>
          <View className='shop-right'>
            <Text className='shop-title'>{detailData.title}</Text>
            <Text className='shop-price'>￥{detailData.discount_price||detailData.discountPrice}</Text>
            <Text className='shop-number'>x{orderNumber}</Text>
          </View>
        </View>

      </View>
    )
  }
}


export default OrderCart

