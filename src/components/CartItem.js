import React from 'react'
import './CartItem.css';
import {Link} from 'react-router-dom'

const CartItem = ({ item, qtyChangeHandler, removeFromCartHandler }) => {

    const PF = "https://e-commerce-payment-redux.herokuapp.com/Uploads/"
    return (
        <div className='cartitem'>
            {item.files.map((file,index)=>(
            <img  src={PF+file.filepath} alt={item.productName}/>))}
            <Link to={`/product/${item.product}`} className='cartitem__name'>
        <p>{item.name}</p>
            </Link>
            <p className='cartitem__price'> &#8377; {item.price}</p>
            <select 
            className='cartitem__select'
             value={item.qty} 
             onChange={(e) => qtyChangeHandler(item.product, e.target.value)}>
                {[...Array(item.countInStock).keys()].map(x => (
                    <option key={ x + 1} value={ x + 1}>
                        { x + 1}
                        </option>
                ))}        
            </select>
            <button className='cartitem__deleteBtn' onClick={() =>removeFromCartHandler(item.product)}>
                <i className='fas fa-trash'></i>
            </button>
        </div>
    )
}

export default CartItem
