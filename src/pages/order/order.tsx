
import Taro, { Component, Config } from '@tarojs/taro';
import { 
  View,
  Text,
  Image,
  Input,
} from '@tarojs/components';

import { connect } from '@tarojs/redux'
import Layout from '../../components/Layout';
import AreaCart from '../../components/AreaCart';
import OrderCart from '../../components/OrderCart';

import './order.less'

interface OrderProps {
  detail:any,
  dispatch:any,
  areaList:any,
}

interface OrderState {
  orderNumber:number,
  payMonney:number|null,
  price:number|null,
  hasIdState:boolean
}

@connect(({detail,areaList})=>({detail,areaList}),)
class Order extends Component<OrderProps,OrderState > {
 
  constructor(props: OrderProps) {
    super(props)
    this.state = {
      orderNumber:1,
      payMonney:null,
      price:null,
      hasIdState:false,
    }
  }

  async componentDidMount() {
    const {id,type} = this.$router.params;
    const { detailData,cartAccountList } = this.props.detail;
    let price = 0;
    if(id){
      this.setState({
        hasIdState:true
      })

    }else if(type=='cart'){
      cartAccountList.forEach( item=>{
        price += Number(item.discountPrice*item.number);
      })
      this.setState({
        hasIdState:false
      })

    }

    if(detailData.length==0 && id){
     await this.props.dispatch({
        type:'detail/getDetailData',
        params:{
          id,
        }
      })
    }

    const area = this.props.areaList.selectAreaData;

    if(!area){
      this.props.dispatch({
        type:'areaList/getDefaultData'
      })
    }

    // 设置起初价格
    this.setState({
      payMonney:detailData.discount_price || price,
      price:detailData.discount_price,
    })
  }




  // 点击增加或者减少数量的按钮
  addOrMinus = (key) => {
    const orderNumber = this.state.orderNumber;
    const price = this.state.price;
    if(key==='minus'){
      if(orderNumber===1) return;
      this.setState({
        orderNumber:orderNumber-1,
        payMonney:(orderNumber-1)*price
      })
    }else if(key==='add'){
      this.setState({
        orderNumber:orderNumber+1,
        payMonney:(orderNumber+1)*price
      })
    }
  }


  render() {
    const {detailData,cartAccountList} = this.props.detail;
    const {selectAreaData} = this.props.areaList;
    const {payMonney,orderNumber,hasIdState} = this.state;

    return (
    <Layout noBack={false} title='立即购买' app-page='page-container' layout='page'>
      <View className='order-box'>
          <AreaCart areaData={selectAreaData}></AreaCart>
          <View className='line-box'></View>
          <View className='order-content'>
            {
              hasIdState?(
                  <View>
                    <OrderCart  detailData={detailData} orderNumber={orderNumber} ></OrderCart>
                    <View className='shop-add-number'>
                      <Text className='number-text'>数量</Text>
                      <View className='number-add-btn'>
                        <Text className='num-btn' onClick={this.addOrMinus.bind(this,'minus')}>-</Text>
                        <Text className='num-input'>{orderNumber}</Text>
                        <Text className='num-btn' onClick={this.addOrMinus.bind(this,'add')}>+</Text>
                      </View>
                    </View>
                  </View>
                ):
                cartAccountList && cartAccountList.length > 0 && cartAccountList.map((item, key) => {
                    return (
                      <View>
                        <OrderCart  detailData={item} orderNumber={item.number}  ></OrderCart>
                      </View>
                    )
                  })
            }

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
          <Text className='s-price'>￥{payMonney}</Text>
        </View>
        <View className='post-btn'>立即购买</View>
      </View>
    </Layout>
    )
  }
}

export default Order

