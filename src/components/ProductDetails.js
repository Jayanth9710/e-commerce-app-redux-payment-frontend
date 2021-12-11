import React from 'react'
import './ProductDetails.css'
import {useState,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {useParams,useNavigate} from 'react-router-dom'
//Actions 
import { getProductDetails } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions'

const ProductDetails = () => {
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();

const productDetails = useSelector(state => state.getProductDetails);
const {loading, error, product} = productDetails;
 
const {id} = useParams()
let navigate = useNavigate();

useEffect(()=> {
if(product && id !== product._id) { 
    console.log(id)
    dispatch(getProductDetails(id))
}
},[dispatch, product, qty])

const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    navigate("/cart");
}

    return (
        <div className='product__details'>
            {loading ? <h2>Loading...</h2> :error ? <h2>{error}</h2> : (
                <>
                <div className='product__details__left'>
                {/* <div className='left__image'>
                {product.files.map((file,index)=>(
            <img  src={`http://localhost:4000/${file.filePath}`} alt={product.productName}/>))}
                </div> */}
                <div className='left__info'>
                    <p className='left__name'>{product.productName}</p>
                    <p>Price: &#8377; {product.price}</p>
                    <p>{product.Description}</p>
                </div>
            </div>
            <div className='product_details__right'>
                <div className='right__info'>
                    <p>
                       Price : <span>&#8377; {product.price}</span>
                    </p>
                    <p>
                        <span>{product.countInStock > 0 ? "In Stock" :"Out of Stock"}</span>
                    </p>
                    <p>Qty
                        <select value={qty} onChange={(e) => setQty(e.target.value)}>
                            {[...Array(product.countInStock).keys()].map((x) => (
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
