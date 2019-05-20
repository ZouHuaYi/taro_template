import Taro, { Component } from '@tarojs/taro';
import {
  View,
  Text,
} from '@tarojs/components';
import './index.less'



export default class EreaCart extends Component{
  render(): any {
    return (
      <View className='order-area'>
        <View className='order-area-list'>
          <View className='area-data'>
            <Text className='ia iconfont icon-kefu'></Text>
            <View className='area-name'>邹华毅</View>
            <View className='area-detail'>广州市番禺区其他市！</View>
            <Text className='area-phone'>15016447087</Text>
            <Text className='jt iconfont icon-jiantou4'></Text>
          </View>
        </View>
      </View>
    )
  }
}
