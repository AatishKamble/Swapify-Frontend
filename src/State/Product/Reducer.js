import { 
    FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS, FIND_PRODUCTS_FAILURE, 
    FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, 
    SELL_PRODUCT_REQUEST, SELL_PRODUCT_SUCCESS, SELL_PRODUCT_FAILURE, 
    CANCEL_REQUEST_REQUEST, CANCEL_REQUEST_SUCCESS, CANCEL_REQUEST_FAILURE, 
    GET_SOLD_PRODUCTS_REQUEST, GET_SOLD_PRODUCTS_SUCCESS, GET_SOLD_PRODUCTS_FAILURE, 
    GET_SELL_REQUESTS_REQUEST, GET_SELL_REQUESTS_SUCCESS, GET_SELL_REQUESTS_FAILURE, 
    ACCEPT_SELL_REQUEST_REQUEST, ACCEPT_SELL_REQUEST_SUCCESS, ACCEPT_SELL_REQUEST_FAILURE, 
    REJECT_SELL_REQUEST_REQUEST, REJECT_SELL_REQUEST_SUCCESS, REJECT_SELL_REQUEST_FAILURE
} from "./ActionType.js";

const initialState = {
    products: [],
    product: null,
    sellRequests: [],
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
        case GET_SOLD_PRODUCTS_REQUEST:
        case GET_SELL_REQUESTS_REQUEST:
        case ACCEPT_SELL_REQUEST_REQUEST:
        case REJECT_SELL_REQUEST_REQUEST:  // Handling loading state for accepting/rejecting sell requests
            return { ...state, isLoading: true, error: null };

        case FIND_PRODUCTS_FAILURE:
        case FIND_PRODUCT_BY_ID_FAILURE:
        case SELL_PRODUCT_FAILURE:
        case CANCEL_REQUEST_FAILURE:
        case GET_SOLD_PRODUCTS_FAILURE:
        case GET_SELL_REQUESTS_FAILURE:
        case ACCEPT_SELL_REQUEST_FAILURE:
        case REJECT_SELL_REQUEST_FAILURE:  // Handling failure for accepting/rejecting sell requests
            return { ...state, isLoading: false, error: action.payload };

        case FIND_PRODUCT_BY_ID_SUCCESS:
            return { ...state, isLoading: false, product: action.payload };

        case FIND_PRODUCTS_SUCCESS:
            return { ...state, isLoading: false, products: action.payload };

        case SELL_PRODUCT_SUCCESS:
            return { ...state, isLoading: false, products: [ ...state.products, action.payload ] };

        case CANCEL_REQUEST_SUCCESS:
            return { ...state, isLoading: false };

        case GET_SOLD_PRODUCTS_SUCCESS:
            return { ...state, isLoading: false, products: action.payload.content };

        case GET_SELL_REQUESTS_SUCCESS:
            return { ...state, isLoading: false, sellRequests: action.payload.content.filter((items)=>items.state==="sellrequest") };

        case ACCEPT_SELL_REQUEST_SUCCESS:  // Handling successful acceptance of sell request
            return { 
                ...state, 
                isLoading: false
            };

        case REJECT_SELL_REQUEST_SUCCESS:  // Handling successful rejection of sell request
            return { 
                ...state, 
                isLoading: false 
               
            };

        default:
            return state;
    }
};
