import Taro from '@tarojs/taro';


export default class MyTips {
  static  isLoading = false;
  static toast(title:string,onHide?:()=>void){
    Taro.showToast({
      title:title,
      icon:'none',
      mask:true,
      duration:1500
    });
    if(onHide){
      setTimeout(()=>{
        onHide();
      },500)
    }
  }
}
