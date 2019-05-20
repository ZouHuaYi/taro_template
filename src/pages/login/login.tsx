
import Taro, { Component, Config } from '@tarojs/taro';
import { 
  View,
  Text,
  Form,
  Input,
  Button,

} from '@tarojs/components';
// import { connect } from '@tarojs/redux'
import Layout from '../../components/Layout';

import './login.less'

interface LoginProps {
 
}

interface LoginState {
  passwordStatus:boolean,
}

// @connect(({})=>({}))
class Login extends Component<LoginProps,LoginState > {
 
  constructor(props: LoginProps) {
    super(props);
    this.state = {
      passwordStatus:false,
    }
  }

  componentDidMount() {
    
  }

  render() {
    return (
    <Layout noBack={false} title='登录/注册' app-page='page-container' layout='page'>
      {
        this.state.passwordStatus?(
          <View className='add-password'>
            <Form>
              <View className='login-container'>
                <View className='form-ground'>
                  <Input className='input' type='password' placeholder='请输入密码'  />
                </View>
                <View className='form-ground'>
                  <Input className='input' type='password' placeholder='再次确认密码'  />
                </View>
              </View>
              <View className='form-tip'>
                <Text className='tip'>温馨提示：完善密码以便下次使用</Text>
              </View>
              <View className='form-btn'>
                <Button className='btn' type='primary'>完善密码</Button>
              </View>
            </Form>
          </View>
        ):(
          <View className='login-box'>
            <Form>
              <View className='login-container'>
                <View className='form-ground'>
                  <Input className='input' type='text' placeholder='手机号'  />
                  <Text className='vcode'>发送验证码</Text>
                </View>
                <View className='form-ground'>
                  <Input className='input' type='text' placeholder='验证码'  />
                </View>
              </View>
              <View className='form-tip'>
                <Text className='tip'>温馨提示：未注册美上美App账号的手机号，登录时将会自动注册，且代表您已同意</Text>
                <Text className='vip'>《用户注册协议》</Text>
              </View>
              <View className='form-btn'>
                <Button className='btn' type='primary'>登录</Button>
              </View>
            </Form>
          </View>
        )
      }



    </Layout>
    )
  }
}

export default Login

