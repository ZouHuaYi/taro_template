
import Taro, { Component, Config } from '@tarojs/taro';
import { 
  View,
  Text,
  Input,
  Icon,
} from '@tarojs/components';
// import { connect } from '@tarojs/redux'
import Layout from '../../components/Layout';

import './search.less'

interface SearchProps {
 
}

interface SearchState {
 
}

// @connect(({})=>({}))
class Search extends Component<SearchProps,SearchState > {
 
  constructor(props: SearchProps) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    
  }

  render() {
    return (
    <Layout noBack={false} title='美上美商城' app-page='page-container' layout='page'>
      <View className='search-box'>
        <View className='search-input-btn'>
          <Input className='s-input' type='text' placeholder={'请输入要搜索的产品'} />
          <Icon type='search' size='20'></Icon>
        </View>
        <View className='s-history'>
          <View className='search-title'>
            <View className='list-title'>
              <Text className='tit'>搜索历史</Text>
              <Text className='icon iconfont icon-shanchu'></Text>
            </View>
            <View className='search-list'>
              <View className='item'>美上美</View>
              <View className='item'>美上美</View>
              <View className='item'>美上美</View>
              <View className='item'>美上美</View>
              <View className='item'>美上美</View>
              <View className='item'>美上</View>
              <View className='item'>美上美</View>
            </View>
          </View>
          <View className='search-title'>
            <View className='list-title'>
              <Text className='tit'>热门搜索</Text>
              {/*<Text className='icon iconfont icon-shanchu'></Text>*/}
            </View>
            <View className='search-list'>
              <View className='item'>美上美</View>
              <View className='item'>美上美</View>
              <View className='item'>美上美</View>
              <View className='item'>美上美</View>
              <View className='item'>美上美</View>
              <View className='item'>美上</View>
              <View className='item'>美上美</View>
            </View>
          </View>
        </View>
      </View>
    </Layout>
    )
  }
}

export default Search

