import React from 'react';
import './ReviewItem.css'
import { BsTrashFill } from "react-icons/bs";


const ReviewItem = ({ product, setRefresh, refresh }) => {
    const { name, price, img } = product;
    const handleDelete = (name) => {
        fetch(`http://localhost:5000/deleteCart/${name}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setRefresh(!refresh)
            });
    }
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='review-details-container'>
                <div className='info'>
                    <h4>{name}</h4>
                    <p><small>Price: {price}</small></p>
                    <p><small>Quentity: 1</small></p>
                </div>
                <div className='btn'>
                    <button className='btn0' onClick={() => handleDelete(product.name)}><BsTrashFill className="h-6 w-6 text-blue-500" /></button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;