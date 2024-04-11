
import {ADD_TO_CART_REQUEST,ADD_TO_CART_SUCCESS,ADD_TO_CART_FAILURE,REMOVE_CART_ITEM_REQUEST,REMOVE_CART_ITEM_SUCCESS,REMOVE_CART_ITEM_FAILURE, GET_USER_CART_FAILURE, GET_USER_CART_REQUEST, GET_USER_CART_SUCCESS} from "./ActionType.js";
import { api } from "../../configApi/configApi.js";
export const addToCart=(reqData)=> async(dispatch)=>{

    dispatch({type:ADD_TO_CART_REQUEST});
try {
   console.log("in add action",reqData)
        const {data}=await api.post("/api/cart/add",reqData);
        console.log("this is user cart after added =",data);
        dispatch({type:ADD_TO_CART_SUCCESS,payload:data});
    
} catch (error) {
    dispatch({type:ADD_TO_CART_FAILURE,payload:error.message});
}


}



export const removeItemFromCart=(productId)=> async(dispatch)=>{

    dispatch({type:REMOVE_CART_ITEM_REQUEST});
try {
   
        const {data}=await api.delete(`/api/cart_items/delete/${productId}`);

        console.log("This is After removal ",data)
        dispatch({type:REMOVE_CART_ITEM_SUCCESS,payload:data._id});
     
    
} catch (error) {
    dispatch({type:REMOVE_CART_ITEM_FAILURE,payload:error.message});
}


}





export const getUserCart=()=> async(dispatch)=>{
    
    dispatch({type:GET_USER_CART_REQUEST});
try {

        const {data}=await api.get("/api/cart");
        console.log("This is get cart ",data)
        dispatch({type:GET_USER_CART_SUCCESS,payload:data});
    
} catch (error) {
    console.log(error.message)
    dispatch({type:GET_USER_CART_FAILURE,payload:error.message});
}


}