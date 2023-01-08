import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import './Product.css'


const Product = ({ product, handleCart }) => {
    return (
        <div>
            <div className='product'>
                <img src={product.img} alt=""></img>
                <div className='product-info'>
                    <h4 className='product-name'>{product.name}</h4>
                    <p className='product-price'>Price: {product.price}</p>
                </div>
                <button className='btn-cart' onClick={() => handleCart(product._id)}>
                    <p>Add To Cart</p>
                    <FiShoppingCart />
                </button>
            </div>
        </div>
    );
};

export default Product;