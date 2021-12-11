// import {UserActionTypes} from '../constants/userConstants'

// export const getUserAddressReducer = (state={shippingAddress:''},action)=> {
//     switch (action.type) {
//         case UserActionTypes.GET_USER_REQUEST:
//             return {
//                 loading:true
//             }
             
//             case UserActionTypes.GET_USER_SUCCESS:
//                 return {
//                     loading:false,
//                     shippingAddress:action.payload
//                 }

//             case UserActionTypes.GET_USER_FAIL:
//                 return{
//                     loading:false,
//                     error:action.payload
//                 }
//         default:
//             return state;
//     }
// }