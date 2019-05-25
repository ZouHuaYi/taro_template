
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
import AddressCity from '../../components/AddressCity';
import {Tips} from "../../utils/tips";

import './addArea.less'

interface AddAreaProps {
  areaList:any,
  dispatch:any
}

interface AddAreaState {
  areaData:any,
  pickerStatus:boolean
}

@connect(({areaList})=>({areaList}))
class AddArea extends Component<AddAreaProps,AddAreaState > {
 
  constructor(props: AddAreaProps) {
    super(props)
    this.state = {
      areaData:{},
      pickerStatus:false
    }
  }

  componentDidMount() {
    const id = this.$router.params.id;
    if(id){
     const areaData = this.props.areaList.areaListData.filter((item)=>(
        item.id==id
      ))
      this.setState({
        areaData:areaData[0]
      })
    }


  }

  // 提交保存
  onSubmitData = (e)=>{
    const value = e.detail.value;
    if(!value['name']){
      Tips.toast('收货人姓名不能为空');
      return;
    }
    if(!value['phone']){
      Tips.toast('电话不能为空');
      return;
    }
    if(!value['area']){
      Tips.toast('所在地址不能为空');
      return;
    }
    if(!value['address']){
      Tips.toast('详细地址不能为空');
      return;
    }
    const id = this.$router.params.id;
    if(id){
     this.props.dispatch({
        type:'areaList/updateAreaList',
        params:{
          ...value,
          id,
        }
     })
    }else {
      this.props.dispatch({
        type:'areaList/addAreaAddress',
        params:{
          ...value,
        }
      })
    }


  }

  // 切换地区选择器
  togglePicker = (areaInfo) => {
    if(areaInfo){
      this.setState(state=>({
        areaData:{
          ...state.areaData,
          area:areaInfo
        }
      }))
    }
    this.setState(state=>({
      pickerStatus:!state.pickerStatus
    }))
  }

  render() {
    const {areaData ,pickerStatus}= this.state;
    return (
    <Layout noBack={false} title={this.$router.params.id?'修改地址':'添加地址'} app-page='page-container' layout='page'>
      <View className='addArea-box'>
          <Form className='form' onSubmit={this.onSubmitData}>
            <View className='form-box'>
              <View className='form-ground'>
                <Text className='form-title'>收货人</Text>
                <Input type='text' placeholder='请输入收件人姓名' name='name' value={areaData.receiveName} />
              </View>
              <View className='form-ground'>
                <Text className='form-title'>联系电话</Text>
                <Input type='tel' placeholder='请输入联系方式' name='phone' value={areaData.receivePhone} />
              </View>
              <View className='form-ground'>
                <Text className='form-title'>所在地区</Text>
                <Input type='text' disabled placeholder='请选择所在地区' name='area' value={areaData.area} onClick={this.togglePicker.bind(this,false)} />
              </View>
              <View className='form-ground'>
                <Text className='form-title'>详细地址</Text>
                <Input type='text' placeholder='请输入详细地址' name='address' value={areaData.address}  />
              </View>
            </View>
            <View className='add-new-area'>
              <Button className='add-btn' formType='submit' type='primary'>保存地址</Button>
            </View>
          </Form>
      </View>
      <View className='picker-view'>
        <AddressCity pickerShow={pickerStatus} onHandleToggleShow={this.togglePicker}></AddressCity>
      </View>
    </Layout>
    )
  }
}

export default AddArea

