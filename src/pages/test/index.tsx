import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import OnData from '../../components/OnData';
import Banner from '../../components/Banner'

class Test extends Component{
  render(): any {
    return(
        <View>
          <Banner />
          <OnData />
        </View>
    )
  }
}
export default Test;
