import {toWork,globalData} from "../../utils/common";
import {cartShopList} from "./service";
import {Tips} from "../../utils/tips";
import {addOrdeleteCartAction} from "../detail/service";

export default {
  namespace:'cart',
  state:{
    cartList:[],
    payAccountList:[]
  },
  effects:{
    // 获取购物车列表的数据
    *getCartListData(_,{call,put}){
      Tips.loading('正在加载');
      const [err,result] = yield call(toWork(cartShopList),_);
      Tips.loaded();
      if(err) return ;
      if(result.messageCode==900){
        yield put({
          type:'save',
          data:{
            cartList: result.data
          }
        })
      } else if(result.messageCode==905){
        yield put({
          type:'save',
          data:{
            cartList: []
          }
        })
      } else {
        Tips.toast(result.message||'加载数据失败');
      }
    },
    // 删除购物车数据
    *deleteCartList({params},{call,put}){
      const [err,result] = yield call(toWork(addOrdeleteCartAction),{...params,action:0,userid:globalData.userInfo.id});
      if(err) return ;
      if(result.messageCode==900){
        // 更新数据
        yield put({
          type:'getCartListData',
        })
        // 更新购物车数据
        yield put({
          type:'detail/getCartAllNumber'
        })

      }else {
        Tips.toast(result.message||'删除失败');
      }
    }

  },
  reducers:{
    save(state,action){
      return{
        ...state,
        ...action.data
      }
    }
  }
}
