
import Taro, { Component, Config } from '@tarojs/taro';
import { 
  View,
  Text,
  Swiper,
  SwiperItem,
  Image,
  ScrollView,
  Navigator,
} from '@tarojs/components';
import { connect } from '@tarojs/redux'
import Layout from '../../components/Layout';
import withShare from '../../components/Hoc/withShare'


import './index.less'

interface IndexProps {
  index:any,
  dispatch:any,
}

interface IndexState {
 
}


@connect(({index})=>({index}))
// @ts-ignore
@withShare()
class Index extends Component<IndexProps,IndexState > {
 
  constructor(props: IndexProps) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.props.dispatch({
      type:'index/getAllHomeData',
    })
  }

  render() {
    const {bannerList,productList} = this.props.index;

    return (
    <Layout noBack title='未来密码' app-page='page-container' layout='page'>
      <View className='index-box'>
        <Swiper className='index-banner' indicatorDots indicatorColor='rgba(255, 255, 255, 1)' indicatorActiveColor='rgba(255, 255, 255, .5)' >
          {bannerList&&bannerList.map(item=>{
            return (
              <SwiperItem className='banner-item' key={item.id}>
                <Image mode='widthFix' className='img' src={item.banner} ></Image>
              </SwiperItem>
            )
          })}
        </Swiper>
        <View className='index-content'>
            {/*<View className='index-container'>*/}
            {/*  <View className='pro-title'>热门推荐</View>*/}
            {/*  <View className='cont-image'>*/}
            {/*    <View className='big-img'>*/}
            {/*      <Image mode='widthFix' className='img' src={'http://mei3mei.oss-cn-shenzhen.aliyuncs.com/uploadfiles/banner/5f6c56ff1aae4df093039ad65b4a16ea.jpg'}></Image>*/}
            {/*    </View>*/}
            {/*    <View className='small-img'>*/}
            {/*     <View className='s-item'><Image mode='widthFix' className='img' src={'http://mei3mei.oss-cn-shenzhen.aliyuncs.com/uploadfiles/banner/5f6c56ff1aae4df093039ad65b4a16ea.jpg'}></Image></View>*/}
            {/*     <View className='s-item'><Image mode='widthFix' className='img' src={'http://mei3mei.oss-cn-shenzhen.aliyuncs.com/uploadfiles/banner/5f6c56ff1aae4df093039ad65b4a16ea.jpg'}></Image></View>*/}
            {/*    </View>*/}
            {/*  </View>*/}
            {/*</View>*/}
          <View className='index-product'>
            <View className='pro-title'>热卖产品</View>
            <View className='product-scroll'>
              <ScrollView scrollX style={{"width":"100%"}}>
                <View className='product-list'>
                  {
                    productList&&productList.map(item=>{
                      return (
                        <Navigator className='product-item'  openType='navigate'url={`/pages/detail/detail?id=${item.id}`}   key={item.id} >
                          <Image className='img' src={item.thumbnail} ></Image>
                          <View className='item-content'>
                            <View className='item-header'>
                              {item.title}
                            </View>
                            <View className='item-price'>
                              <Text className='txt'>&yen;{item.discount_price}</Text>
                              <Text className='no-txt'>&yen;{item.original_price}</Text>
                            </View>
                            <View className='self'>
                              <Text>销售 {item.volume}</Text>
                            </View>
                          </View>
                        </Navigator>
                      )
                    })
                  }
                </View>
              </ScrollView>
            </View>
          </View>
          <View className='bgk-line'></View>
        </View>
      </View>
    </Layout>
    )
  }
}

export default Index

