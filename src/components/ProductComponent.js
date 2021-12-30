import React from 'react'
import {Link} from 'react-router-dom'
import './ProductComponent.css'
import env from '../settings'

const ProductComponent =({files,name,price,description,productId,countInStock})=> {
  const PF = "https://e-commerce-payment-redux.herokuapp.com/"
    return (
        <>
        
        {/* <div className="product__card"  >
          
            {files.map((file,index)=>(
            <img key={index} src={`${env.api}/${file.filePath}`} alt={name}/>))}
          
    
    <div className="product__info">
      <h5 className="info__name">{name}</h5>
      <p className='info__desc'>{description.substring(0,100)}...</p>
      <h5 className="info__price"> &#8377;{price}</h5>
      <h5 className="info__count">{countInStock}</h5>
      <Link to={`/api/product/${productId}`} className="info__button">View</Link>
    </div>
  </div> */}
  <div className='col mb-5 '>
    <div className='card h-100 rounded '>
      {files.map((file,index)=>(
        <img key={index} src={`${env.api}/${file.filePath}`} alt='' className='product__img' />
      ))}
      <div className='card-body p-4 prod__card'>
        <div className='text-center'>
          <h5 className='fw-bolder'>{name}</h5>
          <h6>{description.substring(0,100)}...</h6>
          &#8377; : {price}
        </div>
      </div>

      <div className='card-footer p-4 pt-0 border-top-0  '>
        <div className='text-center'>
          <Link to={`/api/product/${productId}`}>
          <button className='text-center btn  btn-outline-dark mt-auto'>View Product</button>
          </Link>
        </div>
      </div>
    </div>
  </div>

 </>
    )
}


export default ProductComponent;