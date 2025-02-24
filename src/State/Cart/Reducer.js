import { ADD_TO_CART_FAILURE, ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS, GET_USER_CART_FAILURE, GET_USER_CART_REQUEST, GET_USER_CART_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS } from "./ActionType"

const initialState={
    loading:false,
    error:null,
    cart:null,

}



export const cartReducer=(state=initialState,action)=>{

    switch(action.type){
        case GET_USER_CART_REQUEST:
            case ADD_TO_CART_REQUEST:
                case REMOVE_CART_ITEM_REQUEST:
                    return {...state,loading:true,error:null};


                    case GET_USER_CART_SUCCESS:
                        return {
                            ...state,
                            loading:false,
                            cart:action.payload,
        
                        }

                        case ADD_TO_CART_SUCCESS:
                            return {
                                ...state,
                                loading:false,
                                cart:action.payload
                            
                            };

                            case REMOVE_CART_ITEM_SUCCESS:
                                return  {
                                    ...state,
                                    loading:false,
                                    cart:cart.filter(item => {item._id != action.payload})
                                };

                    case GET_USER_CART_FAILURE:
                        case ADD_TO_CART_FAILURE:
                            case REMOVE_CART_ITEM_FAILURE:
                                return {...state,loading:false,error:action.payload};

        default:
            return {...state}
    }



}