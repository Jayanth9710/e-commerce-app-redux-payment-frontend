import React from 'react'
import './CartPage.css';
import CartItem from './CartItem';
import {useState,useEffect} from 'react';
import {useParams,useNavigate} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
import { addToCart } from '../redux/actions/cartActions';
import { removeFromCart } from '../redux/actions/cartActions';
import axios from 'axios'
import dotenv from 'dotenv';
import env from "../settings";

require('dotenv').config()

const CartPage = () => {
const dispatch= useDispatch();

const [addrs,SetAddrs] = useState(['']);
let navigate = useNavigate();

const cart = useSelector(state=> state.cart);
const {cartItems} = cart;

const qtyChangeHandler = (id,qty) => {
dispatch(addToCart(id,qty))
};

const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
}

const getCartCount = () => {
    return cartItems.reduce((qty,item)=> Number(item.qty) +qty,0);
};


   const total =  (cartItems.reduce((price,item)=> (item.price * item.qty) + price,0).toFixed(2));
   

   
//--------------Payment Gateway-----------//
function loadScript (src) {
    return new Promise((resolve) => {
        const script =document.createElement('script')
        script.src= src
        script.onload = () => {
            resolve(true)
        }
        script.onerror = () => {
            resolve(false)
        }
        document.body.appendChild(script)
    })
}

// const __DEV__ = document.domain === 'https://mern-stack-e-commerce.netlify.app/cart'
async  function displayRazorPay () {
    const res = await loadScript ('https://checkout.razorpay.com/v1/checkout.js')
    
    if(!res) {
        alert('Razorpay SDK failed to load,Check your Connection.')
        return
    }
    
    const data = await axios.post(`${env.api}/cart`,{total})
    
    console.log(data.data)
    
            const options = {
                key:process.env.REACT_RAZOR_PAY_KEY, // Enter the Key ID generated from the Dashboard
                amount: total, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                currency: data.data.currency,
                name: "Squish & Mush",
                description: "Thank you",
                image: "https://example.com/your_logo",
                order_id: data.data.id, //This is a sample Order ID. Pass the `id` obtained in the previous step
                handler: function (response){
                    alert(response.razorpay_payment_id);
                    alert(response.razorpay_order_id);
                    alert(response.razorpay_signature)
                },
                prefill: {
                    name: "Gaurav Kumar",
                    email: "gaurav.kumar@example.com",
                    contact: "9999999999"
                },
                notes: {
                    address:addrs
                }
               
            };
            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
        }


        // const getAddress = async () => {
        //     try {
        //     console.log(id)
        //     const addressData = await axios.get(`/cart/${id}`);
        //     console.log(addressData)
        //     SetAddrs(addressData)
           
        //     } catch (error) {
                
        //         console.log(error)
        //     }
        
        // }
        // getAddress(id);
        
        const {id} = useParams();
        const user = window.localStorage.getItem("user")
        console.log(user)
        
    return (
        <>
        {user === null ? (<div className='guest_Login'>
            <h2>Please Log In Before Checking Out</h2>
        </div>): (
            <div className='cartpage'>
            <div className='cartpage__left'>
                <h2>Shopping Cart</h2>
              {cartItems.length === 0 ? (
                  <div>
                      Your cart is empty <Link className='link' to='/'>Go Back</Link>
                  </div> 
              ) : (
                  cartItems.map((item) => <CartItem key={item.product} item={item} qtyChangeHandler={qtyChangeHandler} removeFromCartHandler={removeFromCartHandler}  />)
                  )}

            </div>
            <div className='cartpage__right'>
                <div className='cartpage__info'>
                    <p>Subtotal ({getCartCount()}) items </p>
                    <p>&#8377; {total}</p>
                    <div className='cartpage__address__select'>
                    <p>{addrs}</p>
                    </div>
                </div>
                {/* <div>
                    <Link to={`/address/${user}`}><button>Select Address</button></Link>
                    
                </div> */}
                <div>
                    <button onClick={displayRazorPay}>Proceed to Checkout</button>
                </div>
            </div>
        </div>
        )}
        
        </>
    )
}

export default CartPage
