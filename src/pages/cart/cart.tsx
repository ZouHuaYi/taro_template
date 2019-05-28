
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

  // 单 选择 的时候 - 订单
  selectOrder =  (keys,key) => {

    const {cartList} = this.props.cart;
    let {cartStatusObj,allMonney,allSelectStatus} = this.state;
    const item = cartList[keys].item[key];

    let k = `sl_${keys}_${key}`;
    if(cartStatusObj[k]){
      cartStatusObj[k] = false;
      allMonney -= Number(item.discountPrice*item.number);
      allSelectStatus = false;
    }else {
      cartStatusObj[k] = true;
      allMonney += Number(item.discountPrice * item.number);
    }

    this.setState({
      cartStatusObj,
      allMonney,
      allSelectStatus,
    })

  }

  // 增加购买数量
  addOrSubtractNumber = async (keys,key,status) => {
    let {cartList} = this.props.cart;
    let {cartStatusObj,allMonney,} = this.state;
    const item = {...cartList[keys].item[key]};

    let k = `sl_${keys}_${key}`;

    if(status){
      // 加
      cartList[keys].item[key].number += 1;
    }else {
      // 减
      if(cartList[keys].item[key].number>1){
        cartList[keys].item[key].number -= 1;
      }
    }

    if(cartStatusObj[k]){
      allMonney = allMonney - item.number*item.discountPrice;
      allMonney +=  cartList[keys].item[key].number*item.discountPrice
    }

    await this.props.dispatch({
      type:'cart/save',
      data:{
        cartList,
      }
    })

    this.setState({
      allMonney,
    })
    // 强制刷新
    this.forceUpdate();

  }
  // 删除购物车列表
  deleteCartFun = (id) => {
    Tips.modal('你是否要删除该条数据',()=>{

      let {cartStatusObj} = this.state;
      for (let k in cartStatusObj){
        cartStatusObj[k] = false;
      }

      this.setState({
        allMonney:0,
        cartStatusObj:{...cartStatusObj},
        allSelectStatus:false,
      })

      this.props.dispatch({
        type:'cart/deleteCartList',
        params:{
          ids: JSON.stringify([id])
        }
      })

    })
  }
  // 结算数据的定单的时候 openType='navigate' url={`/pages/order/order?type=cart`}
  goToOrder = async () =>{
    const {cartList} = this.props.cart;
    const {cartStatusObj} = this.state;
    const key = Object.keys(cartStatusObj);
    let payAccountList = [];
    // 计算所有的选择产品
    key.forEach(item=>{

      if(!cartStatusObj[item]) {
        return;
      }
        const k =  item.split('_');
        const h =  {...cartList[k[1]]};
        const i = h.item;

        // 循环 原来的医院中是否已经存在这个值

        h.item = [i[k[2]]];
        payAccountList.push(h);

    })
    // 判断是否选择
    if(payAccountList.length===0){
      Tips.toast('请选择商品');
      return ;
    }

    let newList = [];
    // 合并 相同医院的数据一起
    payAccountList.forEach(item=>{
      newList = newList.map(it=>{
        let t = it.item;
        if(item.hospital.id==it.hospital.id){
          // 如果已经存在着个医院的时候
          t.push(item.item[0]);
        }
        return t;
      })
      newList.push(item);
    })


    // console.log(payAccountList);
    return ;
    await this.props.dispatch({
      type:'cart/save',
      data:{
        payAccountList,
      }
    })

    // 跳转
    Taro.navigateTo({
      url:'/pages/order/order?type=cart'
    })
  }

  // 选择所有的套餐
  selectAllList = () => {
    let {cartList} = this.props.cart;
    let {cartStatusObj,allSelectStatus} = this.state;
    let allMonney = 0;

    cartList.forEach((item,keys)=>{
      item.item&&item.item.forEach((it,key)=>{
        let k = `sl_${keys}_${key}`;
        cartStatusObj[k] = !allSelectStatus;
        if(!allSelectStatus){
          allMonney += it.number*it.discountPrice;
        }
      })
    })

    this.setState({
      allSelectStatus:!allSelectStatus,
      cartStatusObj:{...cartStatusObj},
      allMonney
    })

  }

  render() {
    const {cartShopListData,cartStatusObj,allMonney,allSelectStatus} = this.state;
    const {cartList} = this.props.cart;

    return (
    <Layout noBack title='购物车' app-page='page-container' layout='page'>
      <View className='cart-box'>
          <View className='cart-list'>
            {cartList&&cartList.map((items,keys)=>{
                return(
                  <View key={items.hospital.id}>
                    <View className='hospitalName'>{items.hospital.name}</View>
                    {
                      items.item&&items.item.map((item,key)=>{
                        return(
                          <View  key={item.id}>
                          <View >
                            <View className='cart-item' key={item.id}>
                              {
                                cartStatusObj['sl_'+keys+'_'+key]===true?(<Icon className='circle-icon' onClick={this.selectOrder.bind(this,keys,key)} type='success' size='20'></Icon>):(<Text className='circle' onClick={this.selectOrder.bind(this,keys,key)}></Text>)
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
                                  <Text className='btn' onClick={this.addOrSubtractNumber.bind(this,keys,key,false)}>-</Text>
                                  <Text className='btn-center'>{item.number}</Text>
                                  <Text className='btn' onClick={this.addOrSubtractNumber.bind(this,keys,key,true)}>+</Text>
                                </View>
                            </View>
                            <View className='center-line'></View>
                          </View>
                          </View>
                          )
                        })
                    }
                  </View>
                )
              })
            }
          </View>
        {cartList.length===0?<OnData />:''}
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
          <View onClick={this.goToOrder} className='order-btn'>去结算</View>
        </View>
      </View>
    </Layout>
    )
  }
}

export default Cart

