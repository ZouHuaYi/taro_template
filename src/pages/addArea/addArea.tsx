
import Taro, { Component, Config } from '@tarojs/taro';
import { 
  View,
  Text,
  Form,
  Input,
  Button
} from '@tarojs/components';
// import { connect } from '@tarojs/redux'
import Layout from '../../components/Layout';

import './addArea.less'

interface AddAreaProps {
 
}

interface AddAreaState {
 
}

// @connect(({})=>({}))
class AddArea extends Component<AddAreaProps,AddAreaState > {
 
  constructor(props: AddAreaProps) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    
  }

  render() {
    return (
    <Layout noBack={false} title='添加地址' app-page='page-container' layout='page'>
      <View className='addArea-box'>
          <Form className='form'>
            <View className='form-box'>
              <View className='form-ground'>
                <Text className='form-title'>收货人</Text>
                <Input type='text' placeholder='请输入收件人姓名' />
              </View>
              <View className='form-ground'>
                <Text className='form-title'>联系电话</Text>
                <Input type='text' placeholder='请输入联系方式' />
              </View>
              <View className='form-ground'>
                <Text className='form-title'>所在地区</Text>
                <Input type='text' placeholder='请选择所在地区' />
              </View>
              <View className='form-ground'>
                <Text className='form-title'>详细地址</Text>
                <Input type='text' placeholder='请输入详细地址' />
              </View>
            </View>
            <View className='add-new-area'>
              <Button className='add-btn' type='primary'>保存地址</Button>
            </View>
          </Form>
      </View>
    </Layout>
    )
  }
}

export default AddArea

