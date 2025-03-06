import { 
    FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS, FIND_PRODUCTS_FAILURE, 
    FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, 
    SELL_PRODUCT_REQUEST, SELL_PRODUCT_SUCCESS, SELL_PRODUCT_FAILURE, 
    CANCEL_REQUEST_REQUEST, CANCEL_REQUEST_SUCCESS, CANCEL_REQUEST_FAILURE 
    , GET_SOLD_PRODUCTS_REQUEST, GET_SOLD_PRODUCTS_SUCCESS, GET_SOLD_PRODUCTS_FAILURE
} from "./ActionType.js";

const initialState = {
    products: [],
    product: null,
    isLoading: null,
    error: null,
    sellProduct: null,
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_PRODUCTS_REQUEST:
            case FIND_PRODUCT_BY_ID_REQUEST:
            case SELL_PRODUCT_REQUEST:
            case CANCEL_REQUEST_REQUEST:
            case GET_SOLD_PRODUCTS_REQUEST: // Handling loading state for sold products
                return { ...state, isLoading: true, error: null };
    
            case FIND_PRODUCTS_FAILURE:
            case FIND_PRODUCT_BY_ID_FAILURE:
            case SELL_PRODUCT_FAILURE:
            case CANCEL_REQUEST_FAILURE:
            case GET_SOLD_PRODUCTS_FAILURE: // Handling failure for sold products
                return { ...state, isLoading: false, error: action.payload };
    
            case FIND_PRODUCT_BY_ID_SUCCESS:
                return { ...state, isLoading: false, product: action.payload };
    
            case FIND_PRODUCTS_SUCCESS:
                return { ...state, isLoading: false, products: action.payload };
    
            case SELL_PRODUCT_SUCCESS:
                return { ...state, isLoading: false, sellProduct: action.payload };
    
            case CANCEL_REQUEST_SUCCESS:
                return {
                    ...state,
                    isLoading: false,
                };
    
            case GET_SOLD_PRODUCTS_SUCCESS: // Handling success case for sold products
                return { ...state, isLoading: false, products:action.payload.content};
    
            default:
                return state;
    }
};
