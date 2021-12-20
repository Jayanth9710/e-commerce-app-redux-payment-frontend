import React from 'react'
import {Link} from 'react-router-dom'
import './ProductComponent.css'

const ProductComponent =({files,name,price,description,productId,countInStock})=> {
   
    return (
        <>
        <div className="product__card"  >
          
            {files.map((file,index)=>(
            <img key={"id"} src={`http://localhost:4000/${file.filePath}`} alt={name}/>))}
          
    
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