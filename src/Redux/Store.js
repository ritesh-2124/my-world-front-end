import {createStore} from "redux"
import {productReducer} from "./Reducers/ProductReducer"
import thunk from "redux-thunk"
import { combineReducers  } from "redux"
import { applyMiddleware } from "redux"
import { Signupreducer } from "./Reducers/SignupReducer"
import { Loginreducer } from "./Reducers/LoginReducer"


const rootReducer = combineReducers({
    productsFatch :productReducer,
    SignupFatch : Signupreducer,
    LoginFatch : Loginreducer
})

export const  store = createStore(rootReducer , applyMiddleware(thunk))