import React from 'react'
import './ProductDetails.css'
import {useState,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {useParams,useNavigate} from 'react-router-dom'
//Actions 
import { getProductDetails } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions'
import env from '../settings'

const ProductDetails = () => {
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();

const productDetails = useSelector(state => state.getProductDetails);
const {loading, error, singleProduct} = productDetails;
 
const {id} = useParams()
let navigate = useNavigate();

useEffect(()=> {
if(singleProduct && id !== singleProduct._id) { 
    console.log(id)
    dispatch(getProductDetails(id))
}
},[dispatch, singleProduct, qty])

const addToCartHandler = () => {
    dispatch(addToCart(singleProduct._id, qty));
    navigate("/cart");
}

const PF = "https://e-commerce-payment-redux.herokuapp.com/images/"

    return (
        <div className='product__details'>
            {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : (
                <>
                <div className='product__details__left'>
                <div className='productImage'>
                { singleProduct.files.map((e,index)=>(
            <img className='productImage'  src={PF+e.filepath} alt={singleProduct.name}/>))}
                </div>
                <div className='left__info'>
                    <p className='left__name'>{singleProduct.productName}</p>
                    <p>Price: &#8377; {singleProduct.price}</p>
                    <p>{singleProduct.Description}</p>
                </div>
            </div>
            <div className='product_details__right'>
                <div className='right__info'>
                    <p>
                       Price : <span>&#8377; {singleProduct.price}</span>
                    </p>
                    <p>
                        <span>{singleProduct.countInStock > 0 ? "In Stock" :"Out of Stock"}</span>
                    </p>
                    <p>Qty
                        <select value={qty} onChange={(e) => setQty(e.target.value)}>
                            {[...Array(singleProduct.countInStock).keys()].map((x) => (
                                <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                    </option>
                                ))}
                        </select>
                    </p>
                    <p>
                        <button type='button' onClick={addToCartHandler}>Add to Cart</button>
                    </p>
                </div>
            </div>
                </>
            )}
            
        </div> 
    )
}

export default ProductDetails
