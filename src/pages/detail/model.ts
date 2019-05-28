
import {toWork,globalData,loginJudge} from "../../utils/common";
import {
  getDetail,
  addOrdeleteCartAction,
  getShopCartNumber,
  placeOder, wxPayMonney,multiProduct
} from "./service";
import {InterOrder} from "./interface";
import {Tips} from "../../utils/tips";
import Taro from "@tarojs/taro";

export default {
  namespace:'detail',
  state: {
    detailData:{},
    shopCartNumber:0,
    cartAccountList:[],
    orderPlaceData:{}
  },
  effects:{
    // 获取详细信息
    *getDetailData({params},{call,put}){
      yield put({
        type:'save',
        data:{
          orderPlaceData:{},
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
    },
    // 生成支付订单
    *createPayOrder({params}:InterOrder,{call,put}){
       const [err,result] = yield call(toWork(placeOder),{params,});
       if(err) return ;
       if(result.messageCode==900){
          // 下单成功
         yield put({
           type:'wechatPayMonney',
           result,
         })
       }else {
         Tips.toast(result.message||'该订单无法生成');
       }
    },
    // 多订单一起生成订单号
    *createMoreOrder({params},{call,put}){
      const [err,result] = yield call(toWork(multiProduct),params);
      if(err) return ;
      if(result.messageCode==900){
        // 下单成功
        yield put({
          type:'wechatPayMonney',
          result,
        })
      }else {
        Tips.toast(result.message||'该订单无法生成');
      }
    },
    // 微信签名 支付模块
    *wechatPayMonney({result},{call,select}){
      // 下单成功
      const openid = yield select(state=>state.login);
      const  [payerr,signData] = yield call(toWork(wxPayMonney),{
        openid:openid.openid,
        orderNumber:result.data.orderNumber,
      })
      if(payerr) return ;
      if(signData.messageCode==900){
        // 调起微信支付
        let {timestamp,total_fee,noncestr,prepayid,sign} = signData.data;
        Taro.requestPayment({
          timeStamp: String(timestamp),
          nonceStr: noncestr,
          package: `prepay_id=${prepayid}`,
          signType: 'MD5',
          paySign: sign,
          total_fee:total_fee,
          success:res => {
            Tips.success('支付成功');
            Taro.reLaunch({
              url:'/pages/user/user'
            })
          },
          fail:error=>{
            Tips.toast('支付失败')
          }
        })
      }else {
        Tips.toast(signData.message||'微信签名失败');
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
