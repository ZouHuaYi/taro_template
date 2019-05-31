
import Taro, { Component, Config } from '@tarojs/taro';
import { 
  View,
  Text,
  Image,
  Button,
  ScrollView,
} from '@tarojs/components';
import { connect } from '@tarojs/redux';
import Layout from '../../components/Layout';

import './buyOrder.less'
import withShare from "../../components/Hoc/withShare";

interface BuyOrderProps {
  buyOrder:any,
  dispatch:any,
}

interface BuyOrderState {
  showStatusIndex:number,
  scrollTop:number,
}
/*
*
-1://已取消
1: //待付款
2: //待发货
3: //待收货
4://确认收货
5: //待评价
6: //已评价
7: //退款中
8: //退款成功
* */

const statusText = {
  'x_-1':  '已取消',
  'x_1' :  '待付款',
  'x_2' :  '待发货',
  'x_3' :  '待收货',
  'x_4':  '确认收货',
  'x_5' :   '待评价',
  'x_6' : '已评价',
  'x_7' : '退款中',
  'x_8': '退款成功'
}

@connect(({buyOrder})=>({buyOrder}))
// @ts-ignore
@withShare()
class BuyOrder extends Component<BuyOrderProps,BuyOrderState > {
 
  constructor(props: BuyOrderProps) {
    super(props)
    this.state = {
      showStatusIndex:-1,
      scrollTop:0,
    }
  }

  async componentDidMount() {
    const status = this.$router.params.status;

    this.setState({
      showStatusIndex:status
    })

    await this.props.dispatch({
      type:'buyOrder/save',
      data:{
        page:1,
        orderList:[],
      }
    })

    this.props.dispatch({
      type:'buyOrder/getOrderList',
      params:{
        status,
      }
    })
  }

  // tab切换组件
  selectBtn = (status:number) => {
    const dispatch = this.props.dispatch;
    this.setState({
      showStatusIndex:status,
      scrollTop:0
    })
    dispatch({
      type:'buyOrder/save',
      data:{
        orderList:[],
        page:1,
      }
    })
    dispatch({
      type:'buyOrder/getOrderList',
      params:{
        status,
      }
    })
  }

  // 删除订单
  deleteOrderList = (id,e) => {
    e.stopPropagation();
    const status = this.state.showStatusIndex;
    this.props.dispatch({
      type:'buyOrder/deleteOrder',
      params:{
        id,
        status,
      }
    })
  }

  // 提醒发货
  remindFun = (id,e) =>{
    e.stopPropagation()
    this.props.dispatch({
      type:'buyOrder/remindFun',
      params:{
        id,
      }
    })
  }

  // 立即购买订单
  buyNowChase = (id) => {
    this.props.dispatch({
      type:'detail/wechatPayMonney',
      params:{
        orderNumber:id,
      }
    })
  }

  // 上拉加载
  scrollToBottom = async () => {
    const dispatch = this.props.dispatch;
    const status = this.state.showStatusIndex;
    await dispatch({
      type:'buyOrder/getOrderList',
      params:{
        status,
      }
    })
  }

  // 取消订单
  cancalOrder = (id) => {
    const status = this.state.showStatusIndex;
    this.props.dispatch({
      type:'buyOrder/cancalOrder',
      params:{
        id,
        status,
      }
    })
  }

  // 去到详情页
  goToDetail = (id) => {
    Taro.navigateTo({
      url: `/pages/orderType/orderType?id=${id}`,
    })

  }


  render() {
    const {orderList} = this.props.buyOrder;
    const { showStatusIndex,scrollTop } = this.state;

    return (
    <Layout noBack={false} title='我的订单' app-page='page-container' layout='page'>
      <View className='buyOrder-box'>
        <View className='buy-nav'>
          <View className={`nav-item ${showStatusIndex==0?'active':''}`}   onClick={this.selectBtn.bind(this,0)}  >全部</View>
          <View className='buy-item'>
            <Text className={`nav-item ${showStatusIndex==1?'active':''}`} onClick={this.selectBtn.bind(this,1)} >待付款</Text>
            <Text className={`nav-item ${showStatusIndex==2?'active':''}`} onClick={this.selectBtn.bind(this,2)} >待发货</Text>
            <Text className={`nav-item ${showStatusIndex==3?'active':''}`} onClick={this.selectBtn.bind(this,3)} >待收货</Text>
            <Text className={`nav-item ${showStatusIndex==5?'active':''}`} onClick={this.selectBtn.bind(this,5)} >待评价</Text>
          </View>
        </View>
        <View className='buy-content'>
          <ScrollView scrollY style={{'width':'100%','height':'100%'}} onScrollToLower={this.scrollToBottom} scrollTop={scrollTop}>
            <View className='content-list'>
              {
                orderList&&orderList.map(item => {
                  return (
                    <View className='content-item' key={item.orderId} onClick={this.goToDetail.bind(this,item.orderId)}>
                      <View className='item-title'>{item.hospitalName}</View>
                      <View className='item-details'>
                        <View className='cont-img'>
                          <Image mode='widthFix' className='img' src={item.item[0].thumbnail}></Image>
                        </View>
                        <View className='cont-title'>
                          <View className='tit-first'>{item.item[0].name}</View>
                          <View className='tit-type'>{item.item[0].specificationGroup}</View>
                        </View>
                        <View className='cont-price'>
                          <Text className='price'>{item.item[0].price}</Text>
                          <Text className='num'>X{item.item[0].number}</Text>
                          <Text className='status'>{statusText[`x_${item.status}`]}</Text>
                        </View>
                      </View>
                      <View className='cont-number'>共1件商品  合计：¥{item.amount}</View>
                      <View className='cont-active'>
                        {
                          item.status==-1?(<Button onClick={this.deleteOrderList.bind(this,item.orderId)} className='btn' size='mini' >删除订单</Button>):''
                        }
                        {
                          item.status==1?(<Button onClick={this.cancalOrder.bind(this,item.orderId)} className='btn' size='mini' >取消订单</Button>):''
                        }
                        {
                          item.status==1?(<Button onClick={this.buyNowChase.bind(this,item.orderNumber)} className='btn' size='mini' >立即购买</Button>):''
                        }
                        {
                          item.status==2?(<Button onClick={this.remindFun.bind(this,item.orderId)} className='btn' size='mini' >提醒发货</Button>):''
                        }
                      </View>
                    </View>
                  )
                })
              }

            </View>
          </ScrollView>
        </View>
      </View>
    </Layout>
    )
  }
}

export default BuyOrder

