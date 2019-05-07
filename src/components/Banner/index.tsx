import Taro, { Component } from '@tarojs/taro'
import { View,Swiper,SwiperItem,Image } from '@tarojs/components'
import './index.less'







class Banner extends Component{

  render(): any {
    return (
      <View>
        <Swiper className='banner-box'
          autoplay
          indicator-dots
          indicator-color='#D0D0D0'
          indicator-active-color='#17CCBD'
        >
          <SwiperItem className='banner-item'>
            <Image className='banner-img' src='http://mei3mei.oss-cn-shenzhen.aliyuncs.com/uploadfiles/banner/5f6c56ff1aae4df093039ad65b4a16ea.jpg'></Image>
          </SwiperItem>
          <SwiperItem className='banner-item'>
            <Image className='banner-img' src='http://mei3mei.oss-cn-shenzhen.aliyuncs.com/uploadfiles/banner/5f6c56ff1aae4df093039ad65b4a16ea.jpg'></Image>
          </SwiperItem>
        </Swiper>
      </View>
    )
  }
}

export default Banner;
