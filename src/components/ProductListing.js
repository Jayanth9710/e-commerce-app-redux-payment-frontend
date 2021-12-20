import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { useEffect } from "react";
import { getProducts as listProducts } from "../redux/actions/productActions";
import './ProductListing.css'


function ProductListing() {
  const dispatch = useDispatch();

  const getProducts = useSelector(state => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div className="products__page">
    <div className="product__listing">
      <h2 className="title">Latest Prodcuts</h2>
    <div className="products">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        products.map((product) => 
          <ProductComponent key={product._id} productId={product._id} name={product.productName} price={product.price} description={product.description} files={product.files} />)
        
      )}
    </div>
    </div>
    </div>
  );
}

export default ProductListing;
