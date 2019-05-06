import Taro, { Component } from '@tarojs/taro'
import {connect} from '@tarojs/redux'
import { View, Text ,Navigator} from '@tarojs/components'
import Layout from '../../components/Layout'

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
    return (
      <Layout noBack title='美上美-商场' >
        <View className='index'>
          <Text>Hello world!</Text>
          <Navigator url='/pages/test/index'>ok</Navigator>
        </View>
      </Layout>
    )
  }
}
