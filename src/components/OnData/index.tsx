
import Taro, { Component, Config } from '@tarojs/taro';
import { 
  View,
  Image,
  Text, 
} from '@tarojs/components';

import './index.less'
const nomore = require('../../assets/nomore.png');


interface OnDataProps {
 title:string
}


class OnData extends Component<OnDataProps > {

  render() {
    const {title} = this.props;
    return (
      <View className='OnData-box'>
        <View className='nomore-data'>
          <Image className='img' mode='widthFix' src={nomore}></Image>
        </View>
        <Text className='nodate-text'>{title?title:'没有更多内容了'}</Text>
      </View>
    )
  }
}

export default OnData

