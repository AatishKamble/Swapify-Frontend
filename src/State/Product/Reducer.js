import { 
    FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS, FIND_PRODUCTS_FAILURE, 
    FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, 
    SELL_PRODUCT_REQUEST, SELL_PRODUCT_SUCCESS, SELL_PRODUCT_FAILURE, 
    CANCEL_REQUEST_REQUEST, CANCEL_REQUEST_SUCCESS, CANCEL_REQUEST_FAILURE 
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
        case CANCEL_REQUEST_REQUEST: // Handling cancel request loading state
            return { ...state, isLoading: true, error: null };

        case FIND_PRODUCTS_FAILURE:
        case FIND_PRODUCT_BY_ID_FAILURE:
        case SELL_PRODUCT_FAILURE:
        case CANCEL_REQUEST_FAILURE: // Handling cancel request failure state
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
                    products: state.products.filter(
                        product => product._id !== action.payload
                    )
                };

        default:
            return { ...state };
    }
};
