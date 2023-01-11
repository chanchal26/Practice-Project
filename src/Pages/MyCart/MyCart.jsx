import React, { useEffect, useState } from 'react';
import ReviewItem from './ReviewItem';

const MyCart = () => {

    const [cartItems, setCartItems] = useState([])
    const [refresh, setRefresh] = useState(true)

    useEffect(() => {
        fetch('http://localhost:5000/cartItem')
            .then(res => res.json())
            .then(data => setCartItems(data))
    }, [refresh])


    return (
        <div className='shop'>
            <div className="order-container">
                {
                    cartItems.map(product => <ReviewItem key={product._id} setRefresh={setRefresh} refresh={refresh} product={product}></ReviewItem>)
                }
            </div>
        </div>
    );
};

export default MyCart;