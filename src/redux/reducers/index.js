import {combineReducers} from 'redux';
import { getProductReducer,getProductDetailsReducer } from './productReducer';
import {cartReducer} from './cartReducers'
// import {getUserAddressReducer} from './userReducer'
const reducers = combineReducers({
    getProducts:getProductReducer,
    getProductDetails:getProductDetailsReducer,
    cart:cartReducer,
    // getUserAddress:getUserAddressReducer

});

export default reducers;