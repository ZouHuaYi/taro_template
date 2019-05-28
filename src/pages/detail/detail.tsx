
import Taro, { Component } from '@tarojs/taro';
import {
  View,
  Image,
  Text,
  Button,
  Navigator,
}
from '@tarojs/components';
import "@tarojs/async-await";
import { connect } from '@tarojs/redux'
import Layout from '../../components/Layout';
import WxParse from '../../components/wxParse/wxParse';
import {Tips} from "../../utils/tips";
import {loginJudge} from "../../utils/common";
import {interOrder} from "./interface";


import './detail.less'

interface DetailProps {
  detail:any,
  dispatch:any
}

interface DetailState {
  selectIndex:number,
  typeid:number|null
}

@connect(({detail})=>({detail}),)
class Detail extends Component<DetailProps,DetailState > {
 
  constructor(props: DetailProps) {
    super(props);
    this.state = {
      selectIndex:-1,
      typeid:null
    }
  }

  async componentDidMount() {

     const id = this.$router.params.id;
     await this.props.dispatch({
        type:'detail/getDetailData',
        params:{
          id,
        }
      })

    const {description,specification} = this.props.detail.detailData;
    if(description){
      WxParse.wxParse('article', 'html', description, this.$scope, 0)
    }
    if(specification&&specification.length===1){
      this.setState({
        selectIndex:0,
        typeid:specification[0].id
      })
    }
  }

  // 点击添加购物车
  addCart = () => {
    const typeid = this.state.typeid;
    const id = this.$router.params.id;
    if(typeid===null){
      Tips.toast('请选择产品规格');
      return;
    }
    this.props.dispatch({
      type:'detail/addOrdeleteCartAction',
      params:{
        typeid,
        id,
        number: 1,
      }
    })
  }

  // 选择规格
  selectType = (val,key)=> {
    this.setState({
      selectIndex:key,
      typeid:val,
    })

  }

  // 立即购买
   goToBuyPlace = async () => {
    await loginJudge();
    const selectIndex = this.state.selectIndex;
    if(this.state.selectIndex===-1){
      Tips.toast('请选择产品规格');
      return ;
    }

    /*
    * item: [{"number":"1","productId":"3498","specificationGroup":"210"}]
    * */
    // 存储单张订单的数据
     const {detailData} = this.props.detail;

     await this.props.dispatch({
            type:'detail/save',
            data:{
              orderPlaceData:{
                hospitalid: detailData.hospital.id,
                item:{
                  productId: detailData.id,
                  specificationGroup:detailData.specification[selectIndex].id
                }
              }
            }
         })


    Taro.navigateTo({
      url:`/pages/order/order?id=${this.$router.params.id}`
    })

  }

  render() {
    const {detailData,shopCartNumber} = this.props.detail;
    const {selectIndex} = this.state
    return (
      <Layout noHeader>
        <View className='detail-box'>
          <View className='detail-banner'>
            <Image className='banner-img' mode='widthFix' src={detailData.thumbnail}></Image>
          </View>
          <View className='det-content'>
              <View className='det-price'>
                <View className='price-left'>
                  <Text className='normal-price'>
                    &yen; {detailData.discount_price||0}
                  </Text>
                  <Text className='default-price'>
                    &yen; {detailData.original_price||0}
                  </Text>
                </View>
                <View className='price-right'>
                  {/*<Button className='sd-btn' size='mini'><Text className='icon iconfont icon-aixin'></Text></Button>*/}
                  <Button className='sd-btn' size='mini' ><Text className='icon iconfont icon-fenxiang'></Text></Button>
                </View>
              </View>
              <View className='det-title'>
                <Text className='det-main-tit'>{detailData.title}</Text>
                <Text className='det-sub-tit'>{detailData.subtile}</Text>
              </View>
          </View>
          <View className='det-container'>
            <View className='det-size'>
              <View className='det-size-tit'>规格</View>
              <View className='det-select-size'>
                {
                  detailData.specification&&detailData.specification.map((item,key)=>{
                    return(
                      <Button key={item.id} className={`select-btn ${key==selectIndex?'active':''}`} onClick={this.selectType.bind(this,item.id,key)} size='mini'>{item.specification}</Button>
                    )
                  })
                }
              </View>
            </View>
            <View className='det-all-text'>向上拉查看图文详情</View>
            <View className='det-all-detail'>
              <import src='../../components/wxParse/wxParse.wxml' />
              <template is='wxParse' data='{{wxParseData:article.nodes}}'/>
            </View>
          </View>
        </View>
        <View className='cart-list'>
          <View className='cart-nav'>
            <View className='cart-nav-item'>
              <Text className='icon iconfont icon-home'></Text>
              <Text className='title'>首页</Text>
            </View>
            <Navigator openType='reLaunch' url='/pages/cart/cart'  className='cart-nav-item' >
              <Text className='icon iconfont icon-cart-copy'></Text>
              <Text className='title'>购物车</Text>
              {shopCartNumber===0?'':(<Text className='shop-number'>{shopCartNumber}</Text>)}
            </Navigator>
            <View className='cart-nav-item'>
              <Text className='icon iconfont icon-kefu'></Text>
              <Text className='title'>客服</Text>
            </View>
          </View>
          <View className='cart-shopping'>
            <Text className='cart-add' onClick={this.addCart}>加入购物车</Text><Text onClick={this.goToBuyPlace} className='cart-buy'>立即购买</Text>
          </View>
        </View>
      </Layout>
    )
  }
}

export default Detail

