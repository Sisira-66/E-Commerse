import React from 'react';
import './product-list.css';

function ProductList({newPrice, oldPrice, productImage, productName, productCallback}) {

    const chnageNumber = ()=> {
        productCallback(1);
    }

  return (
    <div className="product-card">
        <div className="img-div">
            <img src={productImage} alt="Product Images"/>
        </div>
        <div className="product-title">{productName}</div>
        <div className="product-rate-price">
            <div className="rating">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
            </div>
            <div className="pricing">
                <span className="old-price">{oldPrice}</span>
                <span>/-</span>
                &nbsp;
                <span className="new-price">{newPrice}/-</span>
            </div>
        </div>
        <div className="cart-btn-box">
            <button onClick={chnageNumber} className="add-cart-btn">Add to Cart</button>
        </div>
    </div>
  )
}

export default ProductList;