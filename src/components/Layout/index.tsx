import Taro, { Component } from '@tarojs/taro'
import { View,Text,Navigator } from '@tarojs/components'
import {globalData} from "../../utils/common";

import './index.less'

interface LayoutProps {
  title?:string,
  isHome?:boolean,
  noBack?:boolean,
  noHeader?:boolean,
  children?:any
}

class Layout extends Component<LayoutProps>{
  static externalClasses = ['app-page','layout']

  componentDidMount() {

  }
  render(){
    const {title,isHome,noBack,noHeader} = this.props;
    const statusBarHeight = globalData.systemInfo?globalData.systemInfo.statusBarHeight:0;
    const titleHeight = statusBarHeight+44;
    const barHeight = statusBarHeight;


    return (
      <View>
        {
          noHeader?(
            <View className='layout'>
              <View className='single-btn' style={{"top":barHeight+'px'}}>
                {
                  isHome?(
                    <Navigator className='nav-back'  open-type='reLaunch' url='/pages/index/index'>
                      <Text className='icon iconfont icon-home'></Text>
                    </Navigator>
                  ):(
                    <Navigator className='nav-back' open-type='navigateBack' >
                      <Text className='icon iconfont icon-jiantou4'></Text>
                    </Navigator>
                  )
                }
              </View>
              <View className='app-page'>
                {this.props.children}
              </View>
            </View>
          ):(
            <View className='layout'>
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
              <View className='app-page' style={{"paddingTop":titleHeight+"px"}}>
                {this.props.children}
              </View>
            </View>
          )
        }
      </View>
    )
  }
}

export default Layout;
