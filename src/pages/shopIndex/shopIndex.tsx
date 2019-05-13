
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
// import { connect } from '@tarojs/redux'
import Layout from '../../components/Layout';

import './shopIndex.less'

interface ShopIndexProps {
 
}

interface ShopIndexState {
 
}

// @connect(({})=>({}))
class ShopIndex extends Component<ShopIndexProps,ShopIndexState > {
 
  constructor(props: ShopIndexProps) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    
  }

  render() {
    return (
    <Layout noBack={false} title='MM卖场' app-page='page-container' layout='page'>
      <View className='shopIndex-box'>
         <View className='shop-box-left'>
          <View className='shop-nav'>
            <View className='shop-item active'>
              <Text className='shop-text'>美妆</Text>
            </View>
            <View className='shop-item'>
              <Text className='shop-text'>美妆</Text>
            </View>
            <View className='shop-item'>
              <Text className='shop-text'>美妆</Text>
            </View>
          </View>
         </View>
         <View className='shop-box-right'>
           <View className='shop-title-select'>
              <Text className='nav active'>销量</Text>
              <Text className='nav'>价格</Text>
             <Navigator className='search-btn' url='/pages/index/index' openType='reLaunch'><Icon size={'20'} type={'search'}></Icon></Navigator>
           </View>
            <View className='shop-all-container'>
              <ScrollView scrollY className='shop-scroll'>
                <View className='scroll-box'>
                  <Swiper className='banner-list'>
                    <SwiperItem className='banner-item'>
                      <Image className='banner-img' src='http://mei3mei.oss-cn-shenzhen.aliyuncs.com/uploadfiles/banner/5f6c56ff1aae4df093039ad65b4a16ea.jpg'></Image>
                    </SwiperItem>
                    <SwiperItem className='banner-item'>
                      <Image className='banner-img' src='http://mei3mei.oss-cn-shenzhen.aliyuncs.com/uploadfiles/banner/5f6c56ff1aae4df093039ad65b4a16ea.jpg'></Image>
                    </SwiperItem>
                  </Swiper>
                  <View className='shop-bar-list'>
                    <View className='shop-bar-item' >
                      <View className='bar-img'>

                      </View>
                      <View className='bar-text'>
                        
                      </View>
                    </View>
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

