import { ActionTypes } from "../constants/action-types";

export const getProductReducer = (state={products:[]},action)=> {
    switch (action.type) {
        case ActionTypes.GET_PRODUCTS_REQUEST:
            
            return {
                loading:true,
                products:[]
            }

            case ActionTypes.GET_PRODUCTS_SUCCESS:
                return {
                    loading:false,
                    products:action.payload
                }
    
                case ActionTypes.GET_PRODUCT_DETAILS_FAIL:
                    return{
                        loading:false,
                        error:action.payload
                    }
        default:
            return state;
    }
}

export const getProductDetailsReducer = (state={singleProduct:{}},action)=> {
    switch (action.type) {
        case ActionTypes.GET_PRODUCT_DETAILS_REQUEST:
            return {
                loading:true
            }
            
            case ActionTypes.GET_PRODUCT_DETAILS_SUCCESS:
                return {
                    loading:false,
                singleProduct:action.payload
                }

            case ActionTypes.GET_PRODUCT_DETAILS_FAIL:
                return{
                    loading:false,
                    error:action.payload
                }
            case ActionTypes.GET_PRODUCT_DETAILS_RESET:
                return {
                    singleProduct:{}
                }
        default:
            return state;
    }
}