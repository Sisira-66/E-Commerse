import React from 'react';
import './product.css';
import ProductList from './product-list/product-list';

function Product({parentCallback}) {
    
    const [productData, setProductData] = React.useState([]);
    
    React.useEffect(()=> {
        fetch('https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json')
        .then(res => res.json())
        .then(data => {
            setProductData(Object.values(data))
            console.log(productData);
        })
    }, []);

  return (
    <section className="product-section">
        <h2>Products</h2>
        <div className="product-container">
            {
                productData.map(product => {
                    return <ProductList
                        key={product.id}
                        newPrice = {product.newPrice}
                        oldPrice = {product.oldPrice}
                        productImage = {product.productImage}
                        productName = {product.productName}
                        productCallback = {parentCallback}
                    />
                })
            }
        </div>
    </section>
  )
}

export default Product;