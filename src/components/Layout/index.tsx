import Taro, { Component } from '@tarojs/taro'
import { View,Text,Navigator } from '@tarojs/components'
import {globalData} from "../../utils/common";

import './index.less'

interface LayoutProps {
  title?:string,
  isHome?:boolean,
  noBack?:boolean,
}

class Layout extends Component<LayoutProps>{
  componentDidMount() {

  }
  render(){
    const {title,isHome,noBack} = this.props;
    const statusBarHeight = globalData.systemInfo?globalData.systemInfo.statusBarHeight:0;
    const titleHeight = statusBarHeight+44;
    const barHeight = statusBarHeight;

    return (
      <View>
        <View className='nav-header-title' style={{'height':titleHeight+'px'}}>
          {isHome?
            (<Navigator
              className='nav-back'
              style={{"top":barHeight+'px'}}
              open-type='reLaunch'
              url='/pages/index/index'
            >
              <Text className='icon iconfont icon-home'></Text>
            </Navigator>):!noBack?
              (<Navigator
                className='nav-back'
                style={{"top":barHeight+'px'}}
                open-type='navigateBack'
              >
                <Text className='icon iconfont icon-jiantou4'></Text>
              </Navigator>):''
          }
          <View style={{"paddingTop": barHeight+"px"}} className='title-nav-com'><text className='tit'>{title?title:'正在加载'}</text></View>
        </View>

        <View className='page-container' style={{"paddingTop":titleHeight+"px"}}>
          {this.props.children}
        </View>
      </View>
    )
  }
}

export default Layout;
