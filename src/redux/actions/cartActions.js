import { CartActionTypes } from "../constants/cartconstants"; 
import axios from 'axios';

export const addToCart = (id,qty) => async (dispatch,getState)=> {
    const {data} = await axios.get(`/api/product/${id}`);

    dispatch({
        type:CartActionTypes.ADD_TO_CART,
        payload: {
            product:data._id,
            name:data.productName,
            description:data.description, 
            price:data.price,
            countInStock:data.countInStock,
            files:data.files,
            qty
        } 
    })
    localStorage.setItem('cart',JSON.stringify(getState().cart.cartItems));
}

export const removeFromCart = (id) => (dispatch,getState) => {
    dispatch({
        type: CartActionTypes.REMOVE_FROM_CART,
        payload:id
    })
    localStorage.setItem('cart',JSON.stringify(getState().cart.cartItems))
}