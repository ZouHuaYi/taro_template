
import Taro, { Component, Config } from '@tarojs/taro';
import { 
  View,
  Text,
  Form,
  Input,
  Button,

} from '@tarojs/components';
import { connect } from '@tarojs/redux'
import Layout from '../../components/Layout';
import {Tips} from '../../utils/tips'

import './login.less'

interface LoginProps {
  login:any,
  dispatch:any
}

interface LoginState {
  passwordStatus?:boolean,
  phone?:string
}

@connect(({login})=>({login}),)
class Login extends Component<LoginProps,LoginState > {
 
  constructor(props: LoginProps) {
    super(props);
    this.state = {
      phone:''
    }

  }

  componentDidMount() {

  }
  // 提交登录
  formSubmit = (e) => {
    const {phone,code} = e.detail.value;
    if(phone===''){
      Tips.toast('手机号码不能为空！');
      return;
    }
    if(!/^1\d{10}$/.test(phone)){
      Tips.toast('手机号码格式不正确！');
      return;
    }
    if(code===''){
      Tips.toast('验证码不能为空！');
      return;
    }
    this.props.dispatch({
      type:'login/btnLoginFun',
      params:{
        phone,
        code,
      }
    })
  }
  // 发送验证码
  sendCode = () => {
    if(!this.props.login.disabled) return;
    const phone = this.state.phone;
    if(!phone||phone===''){
      Tips.toast('手机号码不能为空！');
      return;
    }
    if(!/^1\d{10}$/.test(phone)){
      Tips.toast('手机号码格式不正确！');
      return;
    }
    // 发送验证码的函数
    this.props.dispatch({
      type:'login/sendCodeFun',
      phone:{phone},
    })


  }
  // 改变电话号码的输入框
  phoneChange = (e) => {
    this.setState({
      phone:e.detail.value
    })
  }
  // 提交密码
  putPassword = (e)=>{
    const {password,repassword} = e.detail.value;
    if(password===''){
      Tips.toast('密码不能为空！');
      return;
    }
    if(password.length<6){
      Tips.toast('密码太短！');
      return;
    }
    if(password!==repassword){
      Tips.toast('两次密码不一样！');
      return;
    }
    this.props.dispatch({
      type:'login/inputPassword',
      password:{
        password
      }
    })
  }

  render() {
    const {disabled,codeText,passwordStatus} = this.props.login;
    return (
    <Layout noBack={passwordStatus} title={passwordStatus?'完善密码':'登录/注册'} app-page='page-container' layout='page'>
      {
        passwordStatus?(
          <View className='add-password'>
            <Form onSubmit={this.putPassword}>
              <View className='login-container'>
                <View className='form-ground'>
                  <Input className='input' type='password' placeholder='请输入密码' name={'password'}  />
                </View>
                <View className='form-ground'>
                  <Input className='input' type='password' placeholder='再次确认密码' name={'repassword'}  />
                </View>
              </View>
              <View className='form-tip'>
                <Text className='tip'>温馨提示：完善密码以便下次使用</Text>
              </View>
              <View className='form-btn'>
                <Button className='btn' formType='submit' type='primary'>完善密码</Button>
              </View>
            </Form>
          </View>
        ):(
          <View className='login-box'>
            <Form onSubmit={this.formSubmit}>
              <View className='login-container'>
                <View className='form-ground'>
                  <Input className='input' type='number' name={'phone'} placeholder='手机号' onInput={this.phoneChange}  />
                  <Text onClick={this.sendCode} className={'vcode '+(disabled?'':'off')}>{codeText}</Text>
                </View>
                <View className='form-ground'>
                  <Input className='input' type='number' name={'code'} placeholder='验证码'  />
                </View>
              </View>
              <View className='form-tip'>
                <Text className='tip'>温馨提示：未注册美上美App账号的手机号，登录时将会自动注册，且代表您已同意</Text>
                <Text className='vip'>《用户注册协议》</Text>
              </View>
              <View className='form-btn'>
                <Button className='btn' formType='submit' type='primary'>登录</Button>
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

