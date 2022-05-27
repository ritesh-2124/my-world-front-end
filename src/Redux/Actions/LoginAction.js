import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';


export const LOGIN_PANDING = "LOGIN_PANDING"
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT"


export const loginPanding = ()=>({type:LOGIN_PANDING})
export const loginError = ()=>({type:LOGIN_ERROR})
export const loginSuccess = (payload) =>({type:LOGIN_SUCCESS , payload})
export const logout = () =>({ type: LOGOUT })

export const LoginData = (login ,notify1 , notify2)=>(Dispatch)=>{
    Dispatch(loginPanding())
    axios.post("https://myworldfirst.herokuapp.com/login" , login).then((res)=>{
        notify1()
        setTimeout(() => {
            Dispatch(loginSuccess(res.data.user)) 
        }, 3000);
    }).catch((err)=>{
        setTimeout(() => {
            Dispatch(loginError())     
        }, 3000);
        notify2()
    })
}
