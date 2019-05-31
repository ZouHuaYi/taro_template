
import Taro, { Component, Config } from '@tarojs/taro';
import {
  View,
  Text,
  Image,
} from '@tarojs/components';

import { connect } from '@tarojs/redux'
import Layout from '../../components/Layout';
import {formatTime} from '../../utils/common';

import './orderType.less'

import withShare from "../../components/Hoc/withShare";

interface OrderProps {
  dispatch:any,
  buyOrder:any,
}


interface OrderState {
  allPrice:number
}

@connect(({buyOrder})=>({buyOrder}),)
// @ts-ignore
@withShare()
class OrderType extends Component<OrderProps,OrderState > {

  constructor(props: OrderProps) {
    super(props)
    this.state = {
      allPrice:0
    }
  }

  async componentDidMount() {
    const {id} = this.$router.params;
    await this.props.dispatch({
      type:'buyOrder/getOrderTypeDetail',
      params:{
        id,
      }
    })
    const {orderDetail} = this.props.buyOrder;
    if(orderDetail.items){
      let allPrice = 0;
      orderDetail.items.forEach(item=>{
        allPrice += Number(item.price*item.number)
      })
      this.setState({
        allPrice:allPrice,
      })
    }



  }


  render() {
    const {orderDetail} = this.props.buyOrder;
    return (
      <Layout noBack={false} title='订单状态' app-page='page-container' layout='page'>
        <View className='order-box'>
          <View className='order-area-list'>
            <View className='area-data'>
              <Text className='ia iconfont icon-ditu'></Text>
              <View className='area-name'>{orderDetail.receiverName}</View>
              <View className='area-detail'>{orderDetail.receiverArea}{orderDetail.receiverAddress}</View>
              <Text className='area-phone'>{orderDetail.receiverPhone}</Text>
            </View>
          </View>
          <View className='line-box'></View>
          <View className='order-content'>
            <View className='send-type'>
              <Text className='send-name'>订单号</Text>
              <Text className='type'>{orderDetail.orderNumber}</Text>
            </View>
            {
              orderDetail.items&&orderDetail.items.map(item=>{
                return (
                  <View>
                    <View className='shop-detail'>
                      <View className='shop-img'>
                        <Image className='img' src={item.thumbnail} ></Image>
                      </View>
                      <View className='shop-right'>
                        <Text className='shop-title'>{item.name}</Text>
                        <Text className='shop-price'>￥{item.price}</Text>
                        <Text className='shop-number'>x{item.number}</Text>
                      </View>
                    </View>
                    <View className='send-type'>
                      <Text className='send-name'>单价</Text>
                      <Text className='type'>&yen;{item.price}</Text>
                    </View>
                  </View>
                )
              })
            }
            <View style={{paddingTop:'20px'}}>
              <View className='send-type'>
                <Text className='send-name'>下单时间</Text>
                <Text className='type'>{formatTime('yyyy-MM-dd HH:mm:ss',orderDetail.createTime)}</Text>
              </View>
              <View className='send-type'>
                <Text className='send-name'>总金额</Text>
                <Text className='type'>&yen;{this.state.allPrice}</Text>
              </View>
            </View>

          </View>
        </View>

      </Layout>
    )
  }
}

export default OrderType;

