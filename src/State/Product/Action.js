import { api } from "../../configApi/configApi.js";

import { 
    SELL_PRODUCT_REQUEST, SELL_PRODUCT_SUCCESS, SELL_PRODUCT_FAILURE, 
    FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS, FIND_PRODUCTS_FAILURE, 
    FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, 
    CANCEL_REQUEST_REQUEST, CANCEL_REQUEST_SUCCESS, CANCEL_REQUEST_FAILURE ,
    GET_SOLD_PRODUCTS_REQUEST, GET_SOLD_PRODUCTS_SUCCESS, GET_SOLD_PRODUCTS_FAILURE 
} from "./ActionType.js";

export const findProducts = (reqData) => async (dispatch) => {
    dispatch({ type: FIND_PRODUCTS_REQUEST });
    const { category, minPrice, maxPrice, sort, pageNumber, pageSize } = reqData;
    
    try {
        const { data } = await api.get(`/api/products?category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`);
        dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message });
    }
};

export const findProductById = (reqData) => async (dispatch) => {
    dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
    const { productId } = reqData;

    try {
        const { data } = await api.get(`/api/products/id/${productId}`);
        dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message });
    }
};

export const sellProduct = (productData,jwt) => async (dispatch) => {
    dispatch({ type: SELL_PRODUCT_REQUEST });
    try {
      
        const {data} = await api.post(`/api/user/sell-product`, productData, {
            headers: {
                "authorization": `Bearer ${jwt}`,
                "Content-Type": "multipart/form-data"
            }
        });
        dispatch(getSellProducts());
        dispatch({ type: SELL_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: SELL_PRODUCT_FAILURE, payload: error.message });
    }
};

// Cancel request action
export const cancelRequest = (requestId) => async (dispatch) => {
    dispatch({ type: CANCEL_REQUEST_REQUEST });
    try {
        const { data } = await api.post(`/api/user/sell-product/id/${requestId}`);
        
        dispatch({ type: CANCEL_REQUEST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: CANCEL_REQUEST_FAILURE, payload: error.message });
    }
};

// Function to fetch sold products modification
export const getSellProducts = () => async (dispatch) => {
    dispatch({ type: GET_SOLD_PRODUCTS_REQUEST });

    try {
   
        const res = await api.get(`/api/user/sell-product`);
       
        dispatch({ type: GET_SOLD_PRODUCTS_SUCCESS, payload: res.data });
    } catch (error) {
        dispatch({ type: GET_SOLD_PRODUCTS_FAILURE, payload: error.message });
    }
};
