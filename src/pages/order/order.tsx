
import Taro, { Component, Config } from '@tarojs/taro';
import { 
  View,
  Text,
  Input,
} from '@tarojs/components';

import { connect } from '@tarojs/redux'
import Layout from '../../components/Layout';
import AreaCart from '../../components/AreaCart';
import OrderCart from '../../components/OrderCart';

import './order.less'
import {Tips} from "../../utils/tips";
import withShare from "../../components/Hoc/withShare";

interface OrderProps {
  detail:any,
  dispatch:any,
  areaList:any,
  cart:any,
}

interface OrderState {
  orderNumber:number,
  payMonney:number|null,
  price:number|null,
  hasIdState:boolean,
  remark:string
}

@connect(({detail,areaList,cart})=>({detail,areaList,cart}),)
// @ts-ignore
@withShare()
class Order extends Component<OrderProps,OrderState > {
 
  constructor(props: OrderProps) {
    super(props)
    this.state = {
      orderNumber:1,
      payMonney:null,
      price:null,
      hasIdState:false,
      remark:''
    }
  }

  async componentDidMount() {
    const {id,type} = this.$router.params;
    const { detailData,cartAccountList } = this.props.detail;
    const {payAccountList} = this.props.cart;

    let price = 0;
    if(id){
      // 单点击产品的时候
      this.setState({
        hasIdState:true
      })

    }else if(type=='cart'){
      // 计算购物车过来的数据
      payAccountList.forEach( item=>{
        item.item.forEach(it=>{
          price += Number(it.discountPrice*it.number);
        })
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
      payMonney:type==='cart'? price : detailData.discount_price,
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

  // 生成购买的订单
  buyShop = () => {
    const {selectAreaData} = this.props.areaList;
    const {id,type} = this.$router.params;
    const {orderNumber,payMonney,remark} = this.state;
    if(!selectAreaData.id){
      Tips.toast('请选择先地址');
      return;
    }

    // 只有一个商品的时候生成一个订单的接口
    if(id){
      const {orderPlaceData,} = this.props.detail;

      let item = JSON.stringify([{
          ...orderPlaceData.item,
          number:orderNumber
        }]
      )
      this.props.dispatch({
        type:'detail/createPayOrder',
        params:{
          item,
          remark:remark,
          areaid:selectAreaData.id,
          price:payMonney,
          hospitalid: orderPlaceData.hospitalid,
        }
      })
    }else if(type==='cart') {
      // 多个产品生成一个订单
      const {payAccountList} = this.props.cart;
      let accountList = [...payAccountList];

      accountList = accountList.map(item=>{
        item.remark = remark;
        return item;
      })

      let item = JSON.stringify(accountList);
      this.props.dispatch({
        type:'detail/createMoreOrder',
        params:{
          areaid:selectAreaData.id,
          item,
        }
      })
    }
  }

  // 绑定输入框输入文字
  inputRemark = (e) => {
    this.setState({
      remark:e.detail.value,
    })
  }


  render() {
    const {detailData} = this.props.detail;
    const {payAccountList} = this.props.cart;
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
                payAccountList && payAccountList.length > 0 && payAccountList.map((item, keys) => {
                    return (
                      <View key={keys}>
                        {
                          item.item&&item.item.map((it,key)=>{
                            return(
                              <OrderCart key={it.id}  detailData={it} orderNumber={it.number}  ></OrderCart>
                            )
                          })
                        }

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
              <Input className='user-inp' name='content' onInput={this.inputRemark} type='text' placeholder={'选填，对本次交易的说明'} />
            </View>
          </View>
      </View>
      <View className='footer-line'></View>
      <View className='btn-floor'>
        <View className='floor-text'>
          <Text className='s-pay-monney'>支付金额</Text>
          <Text className='s-price'>￥{payMonney}</Text>
        </View>
        <View className='post-btn' onClick={this.buyShop}>立即购买</View>
      </View>
    </Layout>
    )
  }
}

export default Order

