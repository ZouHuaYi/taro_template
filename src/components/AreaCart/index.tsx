import Taro, { Component } from '@tarojs/taro';
import {
  View,
  Text,
  Navigator,
} from '@tarojs/components';

import './index.less'
interface AreaProps {
  areaData:any
}


export default class AreaCart extends Component<AreaProps>{
  render(): any {

  const {areaData} = this.props;

    return (
      <Navigator className='order-area' openType='navigate' url={'/pages/areaList/areaList'}>
        <View className='order-area-list'>
          {areaData?(
            <View className='area-data'>
              <Text className='ia iconfont icon-kefu'></Text>
              <View className='area-name'>{areaData.receiveName}</View>
              <View className='area-detail'>{areaData.area}{areaData.address}</View>
              <Text className='area-phone'>{areaData.receivePhone}</Text>
              <Text className='jt iconfont icon-jiantou4'></Text>
            </View>
          ):(
            <View className='area-data'>
              <Text className='ia iconfont icon-kefu'></Text>
              <View className='area-name'>收货地址</View>
              <View className='area-detail'>请填写你的收货地址</View>
              <Text className='jt iconfont icon-jiantou4'></Text>
            </View>
          )}



        </View>
      </Navigator>
    )
  }
}
