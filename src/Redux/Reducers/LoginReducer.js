import { LOGIN_PANDING , LOGIN_SUCCESS , LOGIN_ERROR , LOGOUT } from "../Actions/LoginAction";



 const InitialState = {
     isLogged:false,
     isLoding :false,
     error:false,
     user:{}
 }

 export const Loginreducer = (store = InitialState , {type , payload})=>{
  switch(type){
    case LOGIN_PANDING :return{ ...store , isLoding:true};
    case LOGIN_ERROR :return{...store , error:true , isLoding:false};
    case LOGIN_SUCCESS : return {...store , isLoding:false , error:false, isLogged:true ,user:payload};
    case LOGOUT: return {...InitialState };
    default :return store
  
  }
 }