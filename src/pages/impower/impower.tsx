
import Taro, { Component, Config } from '@tarojs/taro';
import { 
  View,
  Button,
} from '@tarojs/components';
// import { connect } from '@tarojs/redux'
import {loginStatus, toWork} from '../../utils/common';

import './impower.less'
import {Tips} from "../../utils/tips";

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

   getUserInfo = async (e) =>{
    if(e.detail.errMsg=='getUserInfo:ok'){
      console.log('允许授权了');
      Tips.loading('正在加载');
      const err =  await loginStatus();
      Tips.loaded();
      if(err){
       Taro.navigateBack();
      }
    }else {
      console.log('拒绝授权登录啊')
    }
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <View className='impower-cont'>
        <View className='impower-box'>
          <Button type='primary' openType='getUserInfo' ongetuserinfo={this.getUserInfo} >微信授权登录</Button>
        </View>
      </View>

    )
  }
}

export default Impower

