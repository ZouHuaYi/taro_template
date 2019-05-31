
import Taro, { Component, Config } from '@tarojs/taro';
import { 
  View,
  Text,
  ScrollView,
  Navigator,
  Icon,
  Swiper,
  SwiperItem,
  Image,
} from '@tarojs/components';
import "@tarojs/async-await"
import { connect } from '@tarojs/redux'
import Layout from '../../components/Layout';
import NoData from '../../components/OnData';

import './shopIndex.less'
import withShare from "../../components/Hoc/withShare";

interface ShopIndexProps {
  dispatch:any,
  shopIndex:any,
}

interface ShopIndexState {
  defaultIndex:number,
  id:number,
  sellStatus:boolean,
  priceStatus:number,
}


@connect(({shopIndex})=>({shopIndex}),)
// @ts-ignore
@withShare()
class ShopIndex extends Component<ShopIndexProps,ShopIndexState > {
 
  constructor(props: ShopIndexProps) {
    super(props)
    this.state = {
      defaultIndex:0,
      id:0,
      sellStatus:false,
      priceStatus:0,
    }
  }

  async componentDidMount() {
     await this.props.dispatch({
       type:'shopIndex/getCategoryList'
      })
      const id = this.props.shopIndex.category[0].id
      this.setState({
        id,
      })
  }

  // 点击切换不同的分类
  tabChangeCategory = async (id,key) => {
    const {dispatch} = this.props;
    this.setState({
      defaultIndex:key,
      id:id,
      sellStatus:false,
      priceStatus:0,
    })

    await dispatch({
      type:'shopIndex/save',
      data:{
        page:1
      }
    })

    dispatch({
      type:'shopIndex/getBannerList',
      params:{
        id,
      }
    })
    dispatch({
      type:'shopIndex/getPruductList',
      params:{
        id
      }
    })
  }

  // 排序函数
  orderTabList = (num) =>{
    const {sellStatus,id} = this.state;
    const {dispatch} = this.props;

    this.setState({
      priceStatus:0,
      sellStatus:!sellStatus
    },async ()=>{
       await dispatch({
          type:'shopIndex/save',
          data:{
            page:1
          }
        })
        dispatch({
          type:'shopIndex/getPruductList',
          params:{
            id,
            order:sellStatus?undefined:num
          }
        })

    })

  }
  // 价格排序
  priceOrder = () =>{
    const {priceStatus,id} = this.state;
    const {dispatch} = this.props;
    this.setState({
      sellStatus:false,
    })

    if(priceStatus<2){
      this.setState({
        priceStatus:priceStatus+1
      },async ()=>{
        await dispatch({
          type:'shopIndex/save',
          data:{
            page:1
          }
        })

        dispatch({
          type:'shopIndex/getPruductList',
          params:{
            id,
            order:priceStatus+2
          }
        })
      })
    }else {
      this.setState({
        priceStatus:0
      },async ()=>{
        await dispatch({
          type:'shopIndex/save',
          data:{
            page:1
          }
        })

        dispatch({
          type:'shopIndex/getPruductList',
          params:{
            id,
          }
        })
      })
    }


  }

  // 上拉加载 数据
  addProductList = () =>{
    const { id } = this.state;
    this.props.dispatch({
      type:'shopIndex/getPruductList',
      params:{
        id,
      }
    })


  }

  render() {
    const {category,bannerList,productList} = this.props.shopIndex;
    const {defaultIndex,sellStatus,priceStatus}  = this.state;
    return (
    <Layout noBack title='MM卖场' app-page='page-container' layout='page'>
      <View className='shopIndex-box'>
         <View className='shop-box-left'>
          <View className='shop-nav'>
            {
              category&&category.map((item,key)=>{
                return (
                  <View className={`shop-item ${defaultIndex==key?'active':''}`} onClick={this.tabChangeCategory.bind(this,item.id,key)} key={item.id}>
                    <Text className='shop-text'>{item.name}</Text>
                  </View>
                )
              })
            }
          </View>
         </View>
         <View className='shop-box-right'>
           <View className='shop-title-select'>
              <View className={`nav ${sellStatus?'active':''}`} onClick={this.orderTabList.bind(this,1)}>销量</View>
              <View className={`nav ${priceStatus!=0?'active':''}`}  onClick={this.priceOrder}   >价格{priceStatus===1?'▼':''}{priceStatus===2?'▲':''} </View>
             {/*<Navigator className='search-btn' url='/pages/search/search' openType='navigate'><Icon size={'20'} type={'search'}></Icon></Navigator>*/}
           </View>
            <View className='shop-all-container'>
              <ScrollView scrollY className='shop-scroll' onScrolltolower={this.addProductList}>
                <View className='scroll-box'>
                  {
                    bannerList&&bannerList.length>0?(<Swiper className='banner-list'>
                      {
                        bannerList&&bannerList.map((item,)=>{
                          return(
                            <SwiperItem className='banner-item' key={item.id}>
                              <Image mode='widthFix' className='banner-img' src={item.banner}></Image>
                            </SwiperItem>
                          )
                        })
                      }
                    </Swiper>):''
                  }
                  <View className='shop-bar-list'>
                    {
                      productList&&productList.length>0?
                        productList.map(item=>{
                        return(
                          <Navigator  className='shop-bar-item' key={item.id} openType='navigate' url={`/pages/detail/detail?id=${item.id}`} >
                            <View className='bar-img'>
                              <Image className='img' src={item.thumbnail}></Image>
                            </View>
                            <View className='bar-text'>
                              <View className='bar-title'>{item.title}</View>
                              <View className='bar-price'>
                                <Text className='bar-num'>{item.discount_price}</Text>
                                <Text className='bar-c-num'>{item.original_price}</Text>
                              </View>
                            </View>
                          </Navigator>
                        )
                      }):<NoData title={'没有更多数据'} />
                    }
                  </View>
                </View>
              </ScrollView>
            </View>
         </View>
      </View>
    </Layout>
    )
  }
}

export default ShopIndex

