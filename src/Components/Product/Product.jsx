import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import './Product.css'


const Product = (props) => {
    const { product } = props
    const [count, setCount] = useState(0)
    const [cart, setCart] = useState(false)

    const handleAddToCart = (product) => {
        setCart(true);
        const data = {
            img: product.img,
            name: product.name,
            price: product.price
        }
        fetch('http://localhost:5000/cartItem', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <div className='product'>
            <img src={product.img} alt=""></img>
            <div className='product-info'>
                <h4 className='product-name'>{product.name}</h4>
                <p className='product-price'>Price: {product.price}</p>
            </div>
            {
                cart ? <div style={{ display: "flex" }} className='btn-cart'>
                    <button onClick={() => setCount(count - 1)}><AiOutlineMinus /></button>
                    <p>{count}</p>
                    <button onClick={() => setCount(count + 1)}><AiOutlinePlus /></button>
                </div> : <button className='btn-cart' onClick={() => handleAddToCart(product)}>
                    <p>Add To Cart</p>
                    <FiShoppingCart />
                </button>
            }


        </div>
    );
};

export default Product;