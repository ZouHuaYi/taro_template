import Taro, { Component } from '@tarojs/taro'
import { View,Text,Navigator } from '@tarojs/components'
import './index.less'

interface LayoutProps {
  title:string,
  isHome:boolean,
  barHeight:number,
  titleHeight:number,
  isBack:boolean,
}

class Layout extends Component<LayoutProps>{
  
  componentDidMount() {}

  render(){
    const {title,isHome,isBack,barHeight,titleHeight} = this.props;
    return (
      <View>
        <View className='nav-header-title' style={{'height':titleHeight+'px'}}>
          {isHome?
            (<Navigator
              className='nav-back'
              style={{"top":barHeight+'px'}}
              o open-type='reLaunch'
              url='/pages/index/index'
            >
              <Text className='icon iconfont icon-home'></Text>
            </Navigator>):isBack?
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
