
import Taro, { Component } from '@tarojs/taro';
import {
  View,
  Text,
  Image,
  Icon,
  Navigator
}
from '@tarojs/components';
import { connect } from '@tarojs/redux'
import Layout from '../../components/Layout';
import './cart.less'
import {loginStatus} from "../../utils/common";
import {Tips} from "../../utils/tips";
import OnData from "../../components/OnData";


interface CartProps {
  cart:any,
  dispatch:any
}

interface CartState {
  cartShopListData:any,
  cartStatusObj:any,
  allMonney:number,
  allSelectStatus:boolean
}

@connect(({cart})=>({cart}))
class Cart extends Component<CartProps,CartState > {

  constructor(props: CartProps) {
    super(props);
    this.state = {
      cartShopListData:[],
      cartStatusObj:{},
      allMonney:0,
      allSelectStatus:false
    }
  }

  async componentDidMount() {
    if(this.state.cartShopListData.length===0){
      await loginStatus();
      this.props.dispatch({
        type:'cart/getCartListData',
      })
    }

  }

  componentWillReceiveProps(nextProps: Readonly<CartProps>, nextContext: any): void {
    let cartShopListData = [];
    nextProps.cart.cartList.forEach(item=>{
      if(item.item && item.item instanceof Array && item.item.length>0){
        cartShopListData = cartShopListData.concat(item.item);
      }
    })
    this.setState({
      cartShopListData,
      allMonney:0,
      cartStatusObj:{},
      allSelectStatus:false,
    })
  }

  // 选择 - 订单
  selectOrder =  (key) => {
    const {cartShopListData,cartStatusObj} = this.state;
    let allMonney = this.state.allMonney;
    if(cartStatusObj['sl_'+key]){
      cartStatusObj['sl_'+key] = false;
      if(cartShopListData[key]){
        allMonney -= cartShopListData[key].discountPrice*cartShopListData[key].number;
      }
    }else {
      cartStatusObj['sl_'+key] = true;
      if(cartShopListData[key]){
        allMonney += cartShopListData[key].discountPrice*cartShopListData[key].number;
      }
    }

    this.setState({
      cartStatusObj,
      allMonney,
      allSelectStatus:false
    })


      let cartAccountList = [];
      for(let k in cartStatusObj){
        if(cartStatusObj[k]){
          let v = k.substring(3);
          cartAccountList.push(cartShopListData[v]);
        }
      }
      this.props.dispatch({
        type:'detail/save',
        data:{
          cartAccountList,
        }
      })

  }
  // 增加购买数量
  addOrSubtractNumber = (e) => {
    const {status,key} = e.currentTarget.dataset;
    const {cartShopListData,cartStatusObj} = this.state;
    let allMonney = this.state.allMonney;
    if(cartStatusObj['sl_'+key]){
      allMonney = allMonney-cartShopListData[key].number*cartShopListData[key].discountPrice;
    }
    if(status){
      // 加
      cartShopListData[key].number += 1;
    }else {
      // 减
      if( cartShopListData[key].number>1){
        cartShopListData[key].number -= 1;
      }
    }
    if(cartStatusObj['sl_'+key]){
      allMonney = allMonney+cartShopListData[key].number*cartShopListData[key].discountPrice;
    }
    this.setState({
      cartShopListData,
      allMonney
    })
  }
  // 删除购物车列表
  deleteCartFun = (id) => {
    Tips.modal('你是否要删除该条数据',()=>{
      this.props.dispatch({
        type:'cart/deleteCartList',
        params:{
          ids: JSON.stringify([id])
        }
      })
    })
  }
  // 选择所有的套餐
  selectAllList = () => {
    const {cartShopListData,cartStatusObj,allSelectStatus} = this.state;
    let allMonney = 0;
    let cartObj = cartStatusObj;
    let cartAccountList = cartShopListData;
    if(!allSelectStatus){
      cartShopListData.forEach((item,key)=>{
        cartObj['sl_'+key] = true;
        allMonney += Number(item.number*item.discountPrice);
      })
      cartAccountList = cartShopListData;
    }else {
      cartShopListData.forEach((item,key)=>{
        cartObj['sl_'+key] = false;
      })
      cartAccountList = [];
    }

    this.setState({
      allMonney,
      cartStatusObj:{...cartObj},
      cartShopListData,
      allSelectStatus:!allSelectStatus
    })
    this.props.dispatch({
      type:'detail/save',
      data:{
        cartAccountList,
      }
    })

  }


  render() {
    const {cartShopListData,cartStatusObj,allMonney,allSelectStatus} = this.state
    return (
    <Layout noBack title='购物车' app-page='page-container' layout='page'>
      <View className='cart-box'>
          <View className='cart-list'>
            {
              cartShopListData.map((item:any,key:number)=>{
                return(
                  <View key={item.id} className={`${ cartStatusObj['sl_'+key]===true?'on':'off'}`}>
                    <View className='cart-item'>
                      {
                        cartStatusObj['sl_'+key]===true?(<Icon className='circle-icon' onClick={this.selectOrder.bind(this,key)} type='success' size='20'></Icon>):(<Text className='circle' onClick={this.selectOrder.bind(this,key)}></Text>)
                      }
                      <Navigator openType='navigate' url={`/pages/detail/detail?id=${item.productId}`} className='shop-img'>
                        <Image className='img' src={item.thumbnail}></Image>
                      </Navigator>
                      <View className='shop-text'>
                        <View className='shop-tit' >{item.title}</View>
                        <Text className='shop-type'>{item.specificationGroup.specification}</Text>
                        <View className='shop-price'>{item.discountPrice}</View>
                      </View>
                      <View className='delete icon iconfont icon-shanchu' onClick={this.deleteCartFun.bind(this,item.shoppingCartId)}></View>
                      <View className='add-number'>
                        <Text className='btn' data-status={false} data-key={key} onClick={this.addOrSubtractNumber}>-</Text>
                        <Text className='btn-center'>{item.number}</Text>
                        <Text className='btn' data-status={true} data-key={key} onClick={this.addOrSubtractNumber}>+</Text>
                      </View>
                    </View>
                    <View className='center-line'></View>
                  </View>
                )
              })
            }

          </View>
        {cartShopListData.length===0?<OnData />:''}

      </View>
      <View className='order-all'>
        <View className='order-select' onClick={this.selectAllList}>
          {
            allSelectStatus?(<Icon className='circle-icon' type='success' size='20'></Icon>):(<Text className='circle'></Text>)
          }
          <Text className=''>全选</Text>
        </View>
        <View className='order-right'>
          <Text className='order-price'>合计:{allMonney}元</Text>
          <Navigator openType='navigate' url={`/pages/order/order?type=cart`} className='order-btn'>去结算</Navigator>
        </View>
      </View>
    </Layout>
    )
  }
}

export default Cart

