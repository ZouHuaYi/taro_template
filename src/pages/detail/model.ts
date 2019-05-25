
import {toWork,globalData,loginJudge} from "../../utils/common";
import {
  getDetail,
  addOrdeleteCartAction,
  getShopCartNumber
} from "./service";
import {Tips} from "../../utils/tips";

export default {
  namespace:'detail',
  state: {
    detailData:{},
    shopCartNumber:0,
    cartAccountList:[],
  },
  effects:{
    // 获取详细信息
    *getDetailData({params},{call,put}){
      yield put({
        type:'save',
        data:{
          detailData:{},
        }
      })
      Tips.loading('正在加载');
      const [err,result] = yield call(toWork(getDetail),params);
      Tips.loaded();
      if(err) return ;
      if(result.messageCode==900){
        yield put({
          type:'save',
          data:{
            detailData:result.data
          }
        })
      }else {
        Tips.toast(result.message||'无法加载数据')
      }
    },
    // 购物车操作
    *addOrdeleteCartAction({params},{call,put}){
      yield call(loginJudge);
      const formData = {
        ...params,
        userid:globalData.userInfo.id
      };
      const [err,result] = yield call(toWork(addOrdeleteCartAction),formData);
      if(err) return ;
      if(result.messageCode==900){
        // 操作成功
        yield put({
          type:'getCartAllNumber',
        })
        yield put({
          type:'cart/getCartListData'
        })
      }else {
        Tips.toast(result.message||'操作失败');
      }
    },
    // 获取购物车数量
    *getCartAllNumber(_,{call,put}){
      yield call(loginJudge);
      const [err,result] = yield call(toWork(getShopCartNumber),{userid:globalData.userInfo.id});
      if(err) return ;
      if(result.messageCode==900){
        // 保存购物车数量
        yield put({
          type:'save',
          data:{
            shopCartNumber:result.data
          }
        })
      }else {
        Tips.toast(result.message||'无法获取购物车数量');
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
  },
}
