import { api } from "../../configApi/configApi.js";
import {FIND_PRODUCTS_REQUEST,FIND_PRODUCTS_SUCCESS,FIND_PRODUCTS_FAILURE,FIND_PRODUCT_BY_ID_REQUEST,FIND_PRODUCT_BY_ID_SUCCESS,FIND_PRODUCT_BY_ID_FAILURE} from "./ActionType.js"

export const findProducts = (reqData) => async (dispatch) => {
    dispatch({type:FIND_PRODUCTS_REQUEST})
    const { category, minPrice, maxPrice, sort, pageNumber, pageSize } = reqData;
    console.log(reqData)
    try {
        console.log("req")
const {data}=await api.get(`/api/products?category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`)
console.log(data)
dispatch({type:FIND_PRODUCTS_SUCCESS,payload:data});
    } catch (error) {
dispatch({type:FIND_PRODUCTS_FAILURE,payload:error.message})
    }

}

export const findProductById = (reqData) => async (dispatch) => {
    dispatch({type:FIND_PRODUCT_BY_ID_REQUEST})
    const {productId} = reqData;

    try {

const {data}=await api.get(`/api/products/id/${productId}`);
        dispatch({type:FIND_PRODUCT_BY_ID_SUCCESS,payload:data});
    } catch (error) {
dispatch({type:FIND_PRODUCT_BY_ID_FAILURE,payload:error.message})
    }

}


