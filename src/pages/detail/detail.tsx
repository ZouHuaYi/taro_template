
import Taro, { Component } from '@tarojs/taro';
import {
  View,
  Image,
  Text,
  Button
}
from '@tarojs/components';
// import { connect } from '@tarojs/redux'
import Layout from '../../components/Layout';
import './detail.less'

interface DetailProps {
 
}

interface DetailState {
 
}

// @connect(({})=>({}))
class Detail extends Component<DetailProps,DetailState > {
 
  constructor(props: DetailProps) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    console.log(this.$router.params.id);

  }

  render() {
    return (
      <Layout noHeader>
        <View className='detail-box'>
          <View className='detail-banner'>
            <Image className='banner-img' mode='widthFix' src='http://mei3mei.oss-cn-shenzhen.aliyuncs.com/uploadfiles/banner/5f6c56ff1aae4df093039ad65b4a16ea.jpg'></Image>
          </View>
          <View className='det-content'>
              <View className='det-price'>
                <View className='price-left'>
                  <Text className='normal-price'>
                    ￥952.80
                  </Text>
                  <Text className='default-price'>
                    ￥2382.00
                  </Text>
                </View>
                <View className='price-right'>
                  <Button className='sd-btn' size='mini'><Text className='icon iconfont icon-aixin'></Text></Button>
                  <Button className='sd-btn' size='mini' ><Text className='icon iconfont icon-fenxiang'></Text></Button>
                </View>
              </View>
              <View className='det-title'>
                <Text className='det-main-tit'>未来密码.全品套装</Text>
                <Text className='det-sub-tit'>上市促销推广价</Text>
              </View>
          </View>
          <View className='det-container'>
            <View className='det-size'>
              <View className='det-size-tit'>规格</View>
              <View className='det-select-size'>
                <Button className='select-btn' size='mini'>6合</Button>
                <Button className='select-btn' size='mini'>6合</Button>
              </View>
            </View>
            <View className='det-all-text'>向上拉查看图文详情</View>
            <View className='det-all-detail'>
              <Image className='all-img' mode='widthFix' src='http://mei3mei.oss-cn-shenzhen.aliyuncs.com/uploadfiles/banner/5f6c56ff1aae4df093039ad65b4a16ea.jpg'></Image>
              <Image className='all-img' mode='widthFix' src='http://mei3mei.oss-cn-shenzhen.aliyuncs.com/uploadfiles/banner/5f6c56ff1aae4df093039ad65b4a16ea.jpg'></Image>
            </View>
          </View>
        </View>
        <View className='cart-list'>
          <View className='cart-nav'>
            <View className='cart-nav-item'>
              <Text className='icon iconfont icon-home'></Text>
              <Text className='title'>首页</Text>
            </View>
            <View className='cart-nav-item'>
              <Text className='icon iconfont icon-cart-copy'></Text>
              <Text className='title'>购物车</Text>
            </View>
            <View className='cart-nav-item'>
              <Text className='icon iconfont icon-kefu'></Text>
              <Text className='title'>客服</Text>
            </View>
          </View>
          <View className='cart-shopping'>
            <Text className='cart-add'>加入购物车</Text><Text className='cart-buy'>立即购买</Text>
          </View>
        </View>
      </Layout>
    )
  }
}

export default Detail

