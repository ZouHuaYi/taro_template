
import Taro, { Component, Config } from '@tarojs/taro';
import { 
  View,
  Text,
  Button
} from '@tarojs/components';
// import { connect } from '@tarojs/redux'
import Layout from '../../components/Layout';

import './areaList.less'

interface AreaListProps {
 
}

interface AreaListState {
 
}

// @connect(({})=>({}))
class AreaList extends Component<AreaListProps,AreaListState > {
 
  constructor(props: AreaListProps) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    
  }

  render() {
    return (
    <Layout noBack={false} title='地址管理' app-page='page-container' layout='page'>
      <View className='areaList-box'>
          <View className='area-list'>
            <View className='area-item'>
              <View className='area-text'>
                <View className='text-txt'>
                  <Text className='area-name'>邹华毅</Text>
                  <Text className='area-name'>15016447087</Text>
                </View>
                <View className='area-detail'>广州市清河街道</View>
              </View>
              <View className='area-action'>
                <View className='def'>
                  <Text className='circle'></Text>
                  <Text className='default-txt'>默认地址</Text>
                </View>
                <View className='action'>
                  <Text className='edit'>编辑</Text>|
                  <Text className='delete'>删除</Text>
                </View>
              </View>
            </View>
            <View className='area-item'>
              <View className='area-text'>
                <View className='text-txt'>
                  <Text className='area-name'>邹华毅</Text>
                  <Text className='area-name'>15016447087</Text>
                </View>
                <View className='area-detail'>广州市清河街道</View>
              </View>
              <View className='area-action'>
                <View className='def'>
                  <Text className='circle'></Text>
                  <Text className='default-txt'>默认地址</Text>
                </View>
                <View className='action'>
                  <Text className='edit'>编辑</Text>|
                  <Text className='delete'>删除</Text>
                </View>
              </View>
            </View>
            <View className='area-item'>
              <View className='area-text'>
                <View className='text-txt'>
                  <Text className='area-name'>邹华毅</Text>
                  <Text className='area-name'>15016447087</Text>
                </View>
                <View className='area-detail'>广州市清河街道</View>
              </View>
              <View className='area-action'>
                <View className='def'>
                  <Text className='circle'></Text>
                  <Text className='default-txt'>默认地址</Text>
                </View>
                <View className='action'>
                  <Text className='edit'>编辑</Text>|
                  <Text className='delete'>删除</Text>
                </View>
              </View>
            </View>
          </View>
        <View className='add-new-area'>
          <Button className='add-btn' type='primary'>添加新地址</Button>
        </View>
      </View>
    </Layout>
    )
  }
}

export default AreaList

