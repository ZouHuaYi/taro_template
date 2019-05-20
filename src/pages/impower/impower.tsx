
import Taro, { Component, Config } from '@tarojs/taro';
import { 
  View,
  Text,
  Button,
} from '@tarojs/components';
// import { connect } from '@tarojs/redux'
import Layout from '../../components/Layout';

import './impower.less'

interface ImpowerProps {
 
}

interface ImpowerState {
 
}

// @connect(({})=>({}))
class Impower extends Component<ImpowerProps,ImpowerState > {
 
  constructor(props: ImpowerProps) {
    super(props)
    this.state = {}
  }

  getUserInfo = (e) =>{
    if(e.detail.errMsg=='getUserInfo:ok'){
      console.log('允许授权了')
      



    }else {
      console.log('拒绝授权登录啊')
    }

  }

  componentDidMount() {
    
  }

  render() {
    return (
    <Layout noBack={false} title='标题' app-page='page-container' layout='page'>
      <View className='impower-box'>
        <Button type='primary' openType='getUserInfo' ongetuserinfo={this.getUserInfo} >微信授权登录</Button>
      </View>
    </Layout>
    )
  }
}

export default Impower

