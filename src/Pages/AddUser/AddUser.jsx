import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate()

    const handleAddUser = data => {
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
                        email: data.email,
                        plan: data.plan,
                        role: data.role,
                        status: data.status,
                        image: imgData.data.url
                    }

                    fetch('http://localhost:5000/users', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            navigate('/adminPanel/allUsers')
                        })
                }
            })
    }


    return (
        <div style={{ display: "grid", justifyItems: "center" }}>
            <h1 style={{ textAlign: "center" }}>Add A New User</h1>
            <form onSubmit={handleSubmit(handleAddUser)}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Name of the product</span>
                    </label>
                    <input {...register("name", { required: true })} type="text" placeholder="Name" className="input input-bordered" />
                    {errors.name?.type === 'required' && <p role="alert" className='text-red-500'>name is required</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Email Address</span>
                    </label>
                    <input {...register("email", { required: true })} type="email" placeholder="Email" className="input input-bordered" />
                    {errors.email?.type === 'required' && <p role="alert" className='text-red-500'>Email is required</p>}
                </div>
                <div className='form-control'>
                    <label htmlFor='name'>Role</label>
                    <select style={{ padding: "10px" }} {...register("role", { required: true })}>
                        <option value='Admin' selected>Admin</option>
                        <option value='Editor'>Editor</option>
                        <option value='Author'>Author</option>
                    </select>
                </div>
                <div className='form-control'>
                    <label htmlFor='name'>Status</label>
                    <select style={{ padding: "10px" }} name='status' {...register("status", { required: true })}>
                        <option value='Active' selected>Active</option>
                        <option value='InActive'>InActive</option>
                        <option value='Pending'>Pending</option>
                    </select>
                </div>
                <div className='form-control'>
                    <label htmlFor='name'>Plan</label>
                    <select style={{ padding: "10px" }} name='plan' {...register("plan", { required: true })}>
                        <option value='Active' selected>Team</option>
                        <option value='InActive'>Company</option>
                        <option value='Pending'>Basic</option>
                        <option value='Pending'>EnterPrise</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Photo</span>
                    </label>
                    <input {...register("image", { required: true })} type="file" className="file-input" />
                    {errors.name?.type === 'required' && <p role="alert" className='text-red-500'>Photo is required</p>}
                </div>
                <input style={{ padding: "8px", marginLeft: "20px", marginBottom: "20px" }} type="submit" value="Add A User" />
            </form>
        </div>
    );
};

export default AddUser;