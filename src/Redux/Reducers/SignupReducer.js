import { SIGNUP_PANDING , SIGNUP_SUCCESS , SIGNUP_ERROR } from "../Actions/SignupAction";


 const InitialState = {
     isLoding :false,
     error:false,
     user:{}
 }

 export const Signupreducer = (store = InitialState , {type , paylod})=>{
  switch(type){
    case SIGNUP_PANDING :return{ ...store , isLoding:true};
    case SIGNUP_ERROR :return{...store , error:true , isLoding:false};
    case SIGNUP_SUCCESS : return {...store , isLoding:false , error:false, user:paylod  }
    default :return store
  }




 }