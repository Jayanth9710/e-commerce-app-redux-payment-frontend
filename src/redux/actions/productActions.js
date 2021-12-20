import {ActionTypes} from '../constants/action-types';
import axios from 'axios'
import env from "../../settings";

export const getProducts = () => async (dispatch) => {
    try {
        dispatch({type:ActionTypes.GET_PRODUCTS_REQUEST});

        const {data} = await axios.get(`${env.api}/api/products`);
        dispatch({
            type:ActionTypes.GET_PRODUCTS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type:ActionTypes.GET_PRODUCTS_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message :error.message
        })
    }
}

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({type:ActionTypes.GET_PRODUCT_DETAILS_REQUEST});

        const {data} = await axios.get(`${env.api}/api/product/${id}`);
        dispatch({
            type:ActionTypes.GET_PRODUCT_DETAILS_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:ActionTypes.GET_PRODUCT_DETAILS_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message :error.message
        })
    }
}

export const removeProductDetails = () => (dispatch) => {
    dispatch({
        type:ActionTypes.GET_PRODUCT_DETAILS_RESET,
    });
}