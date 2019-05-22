import {toWork} from "../../utils/common";
import {getDetail} from "./service";

export default {
  namespace:'detail',
  state: {

  },
  effects:{
    
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
