import {
  categoryList,
  bannerList,
  productList
} from "./service";
import {toWork} from "../../utils/common";
import {Tips} from "../../utils/tips";

export default {
  namespace:'shopIndex',
  state:{
    category:[],
    bannerList:[],
    productList:[],
    page:1,
  },
  effects:{
    // 获取分类数据
    *getCategoryList(_,{call,put}){
     const [err,result] = yield call(toWork(categoryList),_);
     if(err) return ;
     if(result.messageCode==900){
       // 获取分类的数据
        yield put({
          type:'save',
          data:{
            category:result.data
          }
        })
       // 获取 banner 的数据
       if(result.data.length>0){
         yield put({
           type:'getBannerList',
           params:{
             id:result.data[0].id
           }
         })
         yield put({
           type:'getPruductList',
           params:{
             id:result.data[0].id
           }
         })
       }
     }else {
        Tips.toast(result.message||'无法加载分类数据');
     }
    },
    // 获取每一页的banner数据
    *getBannerList({params},{call,put}){
      const [err,result] = yield call(toWork(bannerList),params);
      if(err) return ;
      if(result.messageCode==900 || result.messageCode==905){
        yield put({
          type:'save',
          data:{
            bannerList:result.data||[]
          }
        })
      }else {
        Tips.toast(result.message||'无法加载轮播图数据数据');
      }
    },
    // 获取产品数据   可能要做分页所以跟上面的banner分开来显示
    *getPruductList({params},{call,put,select}){
      const shopIndex = yield select(state=>state.shopIndex);
      const [err,result] = yield call(toWork(productList),{...params,page:shopIndex.page});
      if(err) return ;
      if(result.messageCode==900|| result.messageCode==905){
        yield put({
          type:'save',
          data:{
            productList:shopIndex.page==1?(result.data||[]):shopIndex.productList.concat(result.data||[])
          }
        })
        if(result.data&&result.data.length>0){
          yield put({
            type:'save',
            data:{
              page:shopIndex.page+1
            }
          })
        }
      }else {
        Tips.toast(result.message||'无法加载产品数据数据');
      }
    }
  },
  reducers:{
    save(state,action){
      return {
        ...state,
        ...action.data,
      }
    }
  }
}
