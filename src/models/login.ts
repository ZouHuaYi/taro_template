import {authorLogin} from "../api/login";
import {toWork} from "../utils/common";

export default {
  namespace:'login',
  state:{
    num:90
  },
  effects:{
    *wxLoginFn({loginData},{call,put}){

      const [err,result] = yield call(toWork(authorLogin),loginData);

      console.log(err,result);






    }
  },
  reducers:{

  }
}
