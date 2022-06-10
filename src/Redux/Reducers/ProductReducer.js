import { CARTDATA, FILTER, PRODUCT_ERROR , PRODUCT_LODING ,PRODUCT_SUCCESS , SORT_NAME_ASS , SORT_NAME_DISS , SORT_PRICE_H_TO_L , SORT_PRICE_L_TO_H , SORT_RATING_H_TO_L , SORT_RATING_L_TO_H  } from "../Actions/ProductAction";



const InitialState = {
    isLoding:false,
    Data :[],
    error:false,
    filterData : [],
    cartDataGet : []
}

export const productReducer = (store = InitialState , {type , payload})=>{
    switch(type){
        case PRODUCT_LODING :return {...store , isLoding :true}
        case PRODUCT_ERROR : return {...store , error :true , isLoding:false}
        case PRODUCT_SUCCESS: return {...store , Data:payload , isLoding :false , error : false}
        case SORT_PRICE_L_TO_H : let SortData = store.Data.sort((a,b)=>{return a.price - b.price}) 
        return{
           ...store , Data:[...SortData]
        }
        case SORT_PRICE_H_TO_L : let SortData2 = store.Data.sort((a,b)=>{return b.price - a.price}) 
        return{
           ...store , Data:[...SortData2]
        }
        case SORT_RATING_L_TO_H : let SortData3 = store.Data.sort((a,b)=>{return a.rating.rate - b.rating.rate }) 
        return{
           ...store , Data:[...SortData3]
        }
        case SORT_RATING_H_TO_L : let SortData4 = store.Data.sort((a,b)=>{return b.rating.rate  - a.rating.rate }) 
        return{
           ...store , Data:[...SortData4] 
        }
        case SORT_NAME_ASS: let nameSort = store.Data.sort((a,b)=>{
            let str1  = a.title
            let str2 = b.title
            if(str1.toLowerCase() > str2.toLowerCase()) return 1;
            if(str1.toLowerCase() < str2.toLowerCase()) return -1;
            return 0
        })
        return {...store , Data :[...nameSort]}
        case SORT_NAME_DISS: let nameSortDis = store.Data.sort((a,b)=>{
            let str1  = a.title
            let str2 = b.title
            if(str2.toLowerCase() > str1.toLowerCase()) return 1;
            if(str2.toLowerCase() < str1.toLowerCase()) return -1;
            return 0
        })
        return {...store , Data :[...nameSortDis]}
        case FILTER : 
        let filterResult = store.Data.filter((item)=> item.category == payload)
        return {...store , filterData:[...filterResult] , isLoding :false , error : false}
        case CARTDATA : return {...store ,  cartDataGet : payload}
                default :return store
    }
}