import Taro, { Component } from '@tarojs/taro'
import {connect} from '@tarojs/redux'
import { View, Text ,Navigator,Swiper,SwiperItem,Image,ScrollView} from '@tarojs/components'
import Layout from '../../components/Layout'
import Banner from '../../components/Banner'

import './index.less'

interface IndexProps {
  dispatch?:any,
  global:any
}

@connect(({global})=>({
  global
}))
export default class Index extends Component<IndexProps> {


  componentWillMount () { }

  componentDidMount () {}

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    let navList = [];
    for (let i=0;i<10;i++){
      navList.push({
        'name':"美妆"+i
      })
    }

    return (
        <Layout noBack title='美上美-商场' app-page='page-container' layout='page'>
          <View className='index-box'>
              <View className='tab-nav-box'>
                <View className='tab-nav-list'>
                {
                  navList.map((item,key)=>{
                    return <Text className='tab-nav-item' key={key}>{item.name}</Text>
                  })
                }
                </View>
              </View>
              <View className='index-content'>
                <Swiper className='index-banner'>
                  <SwiperItem className='index-banner-item'>
                    <View className='index-sroll'>
                      <View className='index-scroll-box'>
                        <View className='banner'>
                          <Banner />
                        </View>
                        <ScrollView scrollX >
                          <View className='shopping-hot-scroll'>
                            <View className='shopping-hot-list'>
                              <View className='shopping-hot-item'>
                                <Image className='shopping-img' src='http://mei3mei.oss-cn-shenzhen.aliyuncs.com/uploadfiles/banner/5f6c56ff1aae4df093039ad65b4a16ea.jpg'></Image>
                              </View>
                            </View>
                          </View>
                      </ScrollView>
                        <View className='shopping-content'>
                          <View className='shopping-title'>
                            <Text className='shoping-title-text'>热门产品</Text>
                          </View>
                          <View className='shop-list'>
                            {
                              navList.map((item,key)=>{
                                return(
                                  <View className='shop-item' key={key}>
                                    <View className='shop-img'>
                                      <Image className='img' src='http://mei3mei.oss-cn-shenzhen.aliyuncs.com/uploadfiles/banner/5f6c56ff1aae4df093039ad65b4a16ea.jpg'></Image>
                                    </View>
                                    <View className='shop-main'>
                                      <View className='shop-main-title'>
                                        滚动条里面的小方块，能向上向下移动（或往左往右移动，取决于是垂直滚动条还是水平滚动条）
                                      </View>
                                      <View className='shop-main-sub'>
                                        或往左往右移动，取决于是垂直滚动条还是水平滚动条能向上向下移动能向上向下移动能向上向下移动
                                      </View>
                                      <View className='shop-price'>
                                        <Text className='true-p'>￥560</Text>
                                        <Text className='false-p'>￥400</Text>
                                      </View>
                                      <View className='shop-buy-number'>
                                        <Text className='num'>销量 780</Text>
                                      </View>
                                    </View>
                                  </View>
                                )
                              })
                            }


                          </View>
                        </View>
                      </View>
                    </View>
                  </SwiperItem>
                  <SwiperItem className='index-banner-item'>
                    <View className='banner'>
                      <Banner />
                    </View>
                  </SwiperItem>
              </Swiper>
              </View>
          </View>
        </Layout>
    )
  }
}
