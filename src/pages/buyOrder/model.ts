import {toWork} from "../../utils/common";
import {orderList} from "./service";


export default {
  namespace:'buyOrder',
  state:{
    orderList:[],
    page:1,
    rows:10
  },
  effects:{
    // 获取列表数据
    *getOrderList(_,{call,put}){
      const [err,result] = yield call(toWork(orderList),{
                page:1,
                rows:10,
                status:0,
             })
      if(err) return ;
      console.log(result);

    }
  },
  reducers:{

  }
}
