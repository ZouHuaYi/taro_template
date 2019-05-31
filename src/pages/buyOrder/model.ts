import {toWork} from "../../utils/common";
import {deleteOrder, orderList, remindShop,cancalOrder,orderTypeDetail} from "./service";
import {Tips} from "../../utils/tips";


export default {
  namespace:'buyOrder',
  state:{
    orderList:[],
    page:1,
    rows:10,
    orderDetail:{}
  },
  effects:{
    // 获取列表数据
    *getOrderList({params},{call,put,select}){
      Tips.loading('正在加载');
      const buyOrder = yield select(state=>state.buyOrder);
      const [err,result] = yield call(toWork(orderList),{ page:buyOrder.page, rows:buyOrder.rows,...params});
      Tips.loaded();
      if(err) return ;
      if(result.messageCode==900){
        yield put({
          type:'save',
          data:{
            page:buyOrder.page+1,
            orderList:buyOrder.orderList.concat(result.data),
          }
        })

      }else if(result.messageCode==905){
        // 没有数据
      } else {
        Tips.toast(result.message||'数据加载出错啦');
      }
    },
    // 提醒发货
    *remindFun({params},{call,put}){
      Tips.loading('正在操作');
      const [err,result] = yield call(toWork(remindShop),params);
      Tips.loaded();
      if(err) return;
      if(result.messageCode==900){
      }else {
        Tips.toast(result.message||'提醒发货失败');
      }
    },
    // 删除订单
    *deleteOrder({params},{call,put}){
      const [err,result] = yield call(toWork(deleteOrder),params);
      if(err) return;
      if(result.messageCode==900){
        // 重新获取数据
        yield put({
          type:'save',
          data:{
            orderList:[],
            page:1,
          }
        })
        yield put({
          type:'getOrderList',
          params:{
            status:params.status,
          }
        })
      }else {
        Tips.toast(result.message||'删除失败');
      }
    },
    // 取消订单
    *cancalOrder({params},{call,put}){
      const [err,result] = yield call(toWork(cancalOrder),params);
      if(err) return ;
      if(result.messageCode==900){
        // 初始化
        yield put({
          type:'save',
          data:{
            orderList:[],
            page:1,
          }
        })
        // 获取列表数据
        yield put({
          type:'getOrderList',
          params:{
            status:params.status,
          }
        })

      }else {
        Tips.toast(result.message||'取消失败');
      }
    },
    // 获取订单的详细信息
    *getOrderTypeDetail({params},{call,put}){
      Tips.loading('正在加载');
      yield put({
        type:'save',
        data:{
          orderDetail:{}
        }
      });
      const [err,result] = yield call(toWork(orderTypeDetail),params);
      Tips.loaded();
      if(err) return ;
      if(result.messageCode==900){
         yield put({
           type:'save',
           data:{
             orderDetail:result.data,
           }
         })
      }else {
        Tips.toast(result.message||'取消失败');
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
