import Taro from '@tarojs/taro';
import {toWork,globalData} from "../../utils/common";
import {
  getAreaListData,
  getDefaultAddress,
  setDefaultAddress,
  deletaAreaData,
  updateArea,
  addAreaData,
} from "./service";
import {Tips} from "../../utils/tips";


export default {
  namespace:'areaList',
  state:{
    areaListData:[],
    selectAreaData:null,
    defaultArea:null,
  },
  effects:{
    // 获取总的数据
    *fetchAreaListData(_,{call,put}){
      const [err,result] = yield call(toWork(getAreaListData),{userid:globalData.userInfo.id});
      if(err) return ;
      if(result.messageCode==900){
        yield put({
          type:'save',
          data:{
            areaListData:result.data
          }
        })
      }else {
        Tips.toast(result.message||'无法获取数据');
      }
    },
    // 获取选择默认地址的数据
    *getDefaultData(_,{call,put,select}){
      const [err,result] = yield call(toWork(getDefaultAddress),{userid:globalData.userInfo.id});
      if(err) return ;
      if(result.messageCode==900){
        yield put({
          type:'save',
          data:{
            defaultArea:result.data[0]
          }
        })
        const area = yield select(state=>state.areaList);
        if(!area.selectAreaData){
          yield put({
            type:'save',
            data:{
              selectAreaData:result.data[0]
            }
          })
        }
      }else {
        Tips.toast(result.message||'没有更多数据')
      }
    },
    // 设置默认地址信息
    *setDefaultData({params},{call,put}){
      const [err,result] = yield call(toWork(setDefaultAddress),{...params,userid:globalData.userInfo.id});
      if(err)return ;
      if(result.messageCode==900){
        Tips.success('设置成功');
        yield put({
          type:'getDefaultData'
        })
      }else {
        Tips.toast(result.message||'设置默认地址失败');
      }
    },
    // 删除地址
    *deleteAreaList({params},{call,put}){
      const [err,result] = yield call(toWork(deletaAreaData),params);
      if(err)return ;
      if(result.messageCode==900){
        yield put({
          type:'fetchAreaListData',
        })
        yield Tips.success('删除成功');
      }else {
        Tips.toast(result.message||'设置默认地址失败');
      }
    },
    // 更新地址数据分写法
    *updateAreaList({params},{call,put}){
      const [err,result] = yield call(toWork(updateArea),params);
      if(err)return ;
      if(result.messageCode==900){
        yield Tips.success('更新成功');
        yield put({
          type:'fetchAreaListData',
        })
        Taro.navigateBack();
      }else {
        Tips.toast(result.message||'更新失败');
      }
    },
    // 添加地址
    *addAreaAddress({params},{call,put}){
      Tips.loading('正在保存');
      const [err,result] = yield call(toWork(addAreaData),{...params,userid:globalData.userInfo.id});
      Tips.loaded();
      if(err) return;
      if(result.messageCode==900){
        yield put({
          type:'fetchAreaListData',
        })
        Taro.navigateBack();
      }else{
        Tips.toast(result.message||'保存失败');
      }
    }
  },
  reducers:{
    save(state,action){
      return{
        ...state,
        ...action.data,
      }
    }
  }
}
