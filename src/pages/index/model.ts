import {
  bannerList,
  hotProduct,
} from './service';
import {toWork} from "../../utils/common";
import {Tips} from "../../utils/tips";


export default {
  namespace:'index',
  state: {
    bannerList:[],
    productList:[],

  } ,
  effects:{
    // 主页需要加载数据
    *getAllHomeData(_,{call,put}){
      Tips.loading('正在加载');
      const [err,banner] = yield call(toWork(bannerList),_);
      const [err1,product] = yield call(toWork(hotProduct),_);
      Tips.loaded();
      if(err&&err1) return ;
      yield put({
        type:'save',
        data:{
          bannerList:banner.data,
          productList:product.data,
        }
      })
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
