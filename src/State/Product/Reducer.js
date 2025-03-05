import { 
    FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS, FIND_PRODUCTS_FAILURE, 
    FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, 
    SELL_PRODUCT_REQUEST, SELL_PRODUCT_SUCCESS, SELL_PRODUCT_FAILURE 
} from "./ActionType.js";

const initialState = {
    products: [],
    product: null,
    isLoading: null,
    error: null,
    sellProduct: null // Add this line to manage sell product state
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_PRODUCTS_REQUEST:
        case FIND_PRODUCT_BY_ID_REQUEST:
        case SELL_PRODUCT_REQUEST:
            return { ...state, isLoading: true, error: null };

        case FIND_PRODUCTS_FAILURE:
        case FIND_PRODUCT_BY_ID_FAILURE:
        case SELL_PRODUCT_FAILURE:
            return { ...state, isLoading: false, error: action.payload };

        case FIND_PRODUCT_BY_ID_SUCCESS:
            return { ...state, isLoading: false, product: action.payload };

        case FIND_PRODUCTS_SUCCESS:
            return { ...state, isLoading: false, products: action.payload };

        case SELL_PRODUCT_SUCCESS:
            return { ...state, isLoading: false, sellProduct: action.payload }; // Add this line to handle sell product success

        default:
            return { ...state };
    }
};
