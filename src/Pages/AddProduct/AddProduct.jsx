import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const navigate = useNavigate()
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const img = form.img.value;
        const product = {
            name,
            price,
            img
        };
        console.log(product);
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                navigate('/')
                form.reset()
            })

    }
    return (
        <div>
            <form className='form-control' onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='name'>Name Of The Product</label>
                    <input type="name" name="name" id="1" />
                </div>
                <div className='form-control'>
                    <label htmlFor='Price'>Price Of The Product</label>
                    <input type="number" name="price" id="2" />
                </div>
                <div className='form-control'>
                    <label htmlFor='image'>image</label>
                    <input type="link" name="img" id="3" />
                </div>

                <button>Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;