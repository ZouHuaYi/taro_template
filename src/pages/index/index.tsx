
import Taro, { Component, Config } from '@tarojs/taro';
import { 
  View,
  Text,
  Swiper,
  SwiperItem,
  Image,
  ScrollView,
} from '@tarojs/components';
// import { connect } from '@tarojs/redux'
import Layout from '../../components/Layout';

import './index.less'

interface IndexProps {
 
}

interface IndexState {
 
}

// @connect(({})=>({}))
class Index extends Component<IndexProps,IndexState > {
 
  constructor(props: IndexProps) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    
  }

  render() {
    return (
    <Layout noBack title='美上美-美丽的私人管家' app-page='page-container' layout='page'>
      <View className='index-box'>
        <Swiper className='index-banner' indicatorDots>
          <SwiperItem className='banner-item'>
            <Image mode='widthFix' className='img' src={'http://mei3mei.oss-cn-shenzhen.aliyuncs.com/uploadfiles/banner/5f6c56ff1aae4df093039ad65b4a16ea.jpg'}></Image>
          </SwiperItem>
          <SwiperItem className='banner-item'>
            <Image mode='widthFix' className='img' src={'http://mei3mei.oss-cn-shenzhen.aliyuncs.com/uploadfiles/banner/5f6c56ff1aae4df093039ad65b4a16ea.jpg'}></Image>
          </SwiperItem>
        </Swiper>
        <View className='index-content'>
          <View className='index-container'>
            <View className='pro-title'>热门推荐</View>
            <View className='cont-image'>
              <View className='big-img'>
                <Image mode='widthFix' className='img' src={'http://mei3mei.oss-cn-shenzhen.aliyuncs.com/uploadfiles/banner/5f6c56ff1aae4df093039ad65b4a16ea.jpg'}></Image>
              </View>
              <View className='small-img'>
               <View className='s-item'><Image mode='widthFix' className='img' src={'http://mei3mei.oss-cn-shenzhen.aliyuncs.com/uploadfiles/banner/5f6c56ff1aae4df093039ad65b4a16ea.jpg'}></Image></View>
               <View className='s-item'><Image mode='widthFix' className='img' src={'http://mei3mei.oss-cn-shenzhen.aliyuncs.com/uploadfiles/banner/5f6c56ff1aae4df093039ad65b4a16ea.jpg'}></Image></View>
              </View>
            </View>
          </View>
          <View className='index-product'>
            <View className='pro-title'>热卖产品</View>
            <View className='product-scroll'>
              <ScrollView scrollX style={{"width":"100%"}}>
                <View className='product-list'>
                  <View className='product-item'>
                    <Image className='img' src={'http://mei3mei.oss-cn-shenzhen.aliyuncs.com/uploadfiles/banner/5f6c56ff1aae4df093039ad65b4a16ea.jpg'}></Image>
                    <View className='item-content'>
                      <View className='item-header'>
                        产品标题，是什么是什么是什么是什么什么是什么是什么
                      </View>
                      <View className='item-price'>
                        <Text className='txt'>&yen;289</Text>
                        <Text className='no-txt'>&yen;90</Text>
                      </View>
                      <View className='self'>
                        <Text>销售 280</Text>
                      </View>
                    </View>
                  </View>
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

