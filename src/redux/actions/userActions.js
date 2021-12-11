// import {UserActionTypes} from '../constants/userConstants';
// import axios from 'axios'

// export const getUserAddress = (user) => async (dispatch) => {
//     try {
//         dispatch({type:UserActionTypes.GET_USER_REQUEST});

//         const {data} = await axios.get(`/address/${user}`,{user});
//         dispatch({
//             type:UserActionTypes.GET_USER_SUCCESS,
//             payload:{
//                 shippingAddress:data.shippingAddress
//             }
//         })
//     } catch (error) { 
//         dispatch({
//             type:UserActionTypes.GET_USER_FAIL,
//             payload:error.response && error.response.data.message ? error.response.data.message :error.message
//         })
//     }
// }