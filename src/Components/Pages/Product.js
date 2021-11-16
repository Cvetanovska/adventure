import React from 'react';
import './Product.css';
import {ProductList} from '../helpers/ProductList';
import ProductItems from './ProductItems';


function Product() {
    return (
        <div className="product-menu">
        <div className="productList">
             {ProductList.map((productItem, key) => {
          return (
            <ProductItems
              key={key}
              image={productItem.image}
              name={productItem.name}
             
            />
            
          );

        })} 
            
        </div>
    </div>
    )
}

export default Product
