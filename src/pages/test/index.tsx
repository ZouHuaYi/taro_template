import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import Banner from '../../components/Banner'

class Test extends Component{
  render(): any {
    return(
        <View><Banner /></View>
    )
  }
}
export default Test;
