
import Taro, { Component, Config } from '@tarojs/taro';
import { 
  View,
  Text,
  Navigator,
  Icon,
} from '@tarojs/components';
import { connect } from '@tarojs/redux'
import Layout from '../../components/Layout';

import './areaList.less'
import {Tips} from "../../utils/tips";

interface AreaListProps {
  areaList:any,
  dispatch:any
}

interface AreaListState {
 
}

@connect(({areaList})=>({areaList}))
class AreaList extends Component<AreaListProps,AreaListState > {
 
  constructor(props: AreaListProps) {
    super(props)
    this.state = {}
  }

  componentDidMount() {

    this.props.dispatch({
      type:'areaList/fetchAreaListData'
    })

    if(!this.props.areaList.defaultArea){
      this.props.dispatch({
        type:'areaList/getDefaultData'
      })
    }

  }

  // 设置默认地址
  setDefaultArea = (id) =>{
    this.props.dispatch({
      type:'areaList/setDefaultData',
      params:{
        id,
      }
    })
  }

  //选择地址
  selectAreaList = async (key) =>{

    const selectAreaData  = this.props.areaList.areaListData[key];
    await this.props.dispatch({
            type:'areaList/save',
            data:{
              selectAreaData
            }
          })
    Taro.navigateBack();
  }

  // 删除地址
  deleteAreaData = (id) => {
    Tips.modal('您是否要删除该地址信息',()=>{
      this.props.dispatch({
        type:'areaList/deleteAreaList',
        params:{
          id
        }
      })

    })
  }

  render() {
    const { areaListData,defaultArea } = this.props.areaList;
    const defaultAreaId = defaultArea?defaultArea.id:0;

    return (
    <Layout noBack={false} title='地址管理' app-page='page-container' layout='page'>
      <View className='areaList-box'>
          <View className='area-list'>
            {areaListData&&areaListData.map((item,key)=>{
              return(
                <View className='area-item' key={item.id}>
                  <View className='area-text' onClick={this.selectAreaList.bind(this,key)}>
                    <View className='text-txt'>
                      <Text className='area-name'>{item.receiveName}</Text>
                      <Text className='area-name'>{item.receivePhone}</Text>
                    </View>
                    <View className='area-detail'>{item.area}{item.address}</View>
                  </View>
                  <View className='area-action'>
                    <View className='def'>
                      {defaultAreaId===item.id?(<Icon className='cir-icon' type='success' size='20'></Icon>):(<Text onClick={this.setDefaultArea.bind(this,item.id)} className='circle'></Text>)}
                      <Text onClick={this.setDefaultArea.bind(this,item.id)} className='default-txt'>默认地址</Text>
                    </View>
                    <View className='action'>
                      <Navigator openType='navigate' url={`/pages/addArea/addArea?id=${item.id}`} className='edit'>编辑</Navigator>|
                      <Text className='delete'  onClick={this.deleteAreaData.bind(this,item.id)}>删除</Text>
                    </View>
                  </View>
                </View>

              )
            })}

          </View>
        <View className='add-new-area'>
          <Navigator className='add-btn' openType='navigate' url='/pages/addArea/addArea' >添加新地址</Navigator>
        </View>
      </View>
    </Layout>
    )
  }
}

export default AreaList

