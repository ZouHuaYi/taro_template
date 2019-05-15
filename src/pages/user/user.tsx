
import Taro, { Component, Config } from '@tarojs/taro';
import { 
  View,
  Text,
  Button,

} from '@tarojs/components';
// import { connect } from '@tarojs/redux'
import Layout from '../../components/Layout';

import './user.less'

interface UserProps {
 
}

interface UserState {
 
}

// @connect(({})=>({}))
class User extends Component<UserProps,UserState > {
 
  constructor(props: UserProps) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    
  }

  render() {
    return (
    <Layout noBack={false} title='用户中心' app-page='page-container' layout='page'>
      <View className='user-box'>


      </View>
    </Layout>
    )
  }
}

export default User

