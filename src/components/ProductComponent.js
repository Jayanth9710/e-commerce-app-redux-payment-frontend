import React from 'react'
import {Link} from 'react-router-dom'
import './ProductComponent.css'
import env from '../settings'

const ProductComponent =({files,name,price,description,productId,countInStock})=> {
  const PF = "https://e-commerce-payment-redux.herokuapp.com"
    return (
        <>
        <div className="product__card"  >
          
            {files.map((file,index)=>(
            <img key={index} src={PF + file.filePath} alt={name}/>))}
          
    
    <div className="product__info">
      <h5 className="info__name">{name}</h5>
      <p className='info__desc'>{description.substring(0,100)}...</p>
      <h5 className="info__price"> &#8377;{price}</h5>
      <h5 className="info__count">{countInStock}</h5>
      <Link to={`/api/product/${productId}`} className="info__button">View</Link>
    </div>
  </div>
 </>
    )
}


export default ProductComponent;