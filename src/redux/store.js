import { applyMiddleware, createStore } from "redux";
import reducers from './reducers/index';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'

const middleware = [thunk];

const cartFromLocalStorage = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []

const INITIAL_STATE = {
    cart: {
        cartItems:cartFromLocalStorage
    }
}

const store = createStore(reducers,INITIAL_STATE,composeWithDevTools(applyMiddleware(...middleware)));

export default store;