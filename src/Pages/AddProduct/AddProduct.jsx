import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {



    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate()



    const handleAddDoctor = data => {
        console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=02d5fe570608c5f64410f8abf959d824`
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData.data.url);
                if (imgData.success) {
                    const doctor = {
                        name: data.name,
                        price: data.price,
                        img: imgData.data.url
                    }

                    fetch('http://localhost:5000/products', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            navigate('/')
                        })
                }
            })
    }


    return (
        <div style={{ display: "grid", justifyItems: "center" }}>
            <h1 style={{ textAlign: "center" }}>Add A New Product</h1>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Name of the product</span>
                    </label>
                    <input {...register("name", { required: true })} type="text" placeholder="Name" className="input input-bordered" />
                    {errors.name?.type === 'required' && <p role="alert" className='text-red-500'>name is required</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Price Of The Product</span>
                    </label>
                    <input {...register("price", { required: true })} type="number" placeholder="Price" className="input input-bordered" />
                    {errors.email?.type === 'required' && <p role="alert" className='text-red-500'>Price is required</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Photo</span>
                    </label>
                    <input {...register("image", { required: true })} type="file" className="file-input" />
                    {errors.name?.type === 'required' && <p role="alert" className='text-red-500'>Photo is required</p>}
                </div>
                <input style={{ padding: "8px", marginLeft: "20px", marginBottom: "20px" }} type="submit" value="Add A Doctor" />
            </form>
        </div>
    );
};

export default AddProduct;