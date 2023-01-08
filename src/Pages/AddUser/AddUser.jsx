import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    const navigate = useNavigate()
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const img = form.img.value;
        const role = form.role.value;
        const plan = form.plan.value;
        const status = form.status.value;

        const user = {
            name,
            email,
            img,
            role,
            plan,
            status
        };
        console.log(user);
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                navigate('/adminPanel/allUsers')
                form.reset()
            })

    }
    return (
        <div>
            <form className='form-control' onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='name'>Name</label>
                    <input type="name" name="name" id="1" />
                </div>
                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <input type="email" name="email" id="1" />
                </div>
                <div className='form-control'>
                    <label htmlFor='name'>Role</label>
                    <select name='role'>
                        <option value='Admin' selected>Admin</option>
                        <option value='Editor'>Editor</option>
                        <option value='Author'>Author</option>
                    </select>
                </div>
                <div className='form-control'>
                    <label htmlFor='name'>Plan</label>
                    <select name='plan'>
                        <option value='Active' selected>Team</option>
                        <option value='InActive'>Company</option>
                        <option value='Pending'>Basic</option>
                        <option value='Pending'>EnterPrise</option>
                    </select>
                </div>
                <div className='form-control'>
                    <label htmlFor='name'>Status</label>
                    <select name='status'>
                        <option value='Active' selected>Active</option>
                        <option value='InActive'>InActive</option>
                        <option value='Pending'>Pending</option>
                    </select>
                </div>
                <div className='form-control'>
                    <label htmlFor='image'>image</label>
                    <input type="link" name="img" id="3" />
                </div>

                <button>Add User</button>
            </form>
        </div>
    );
};

export default AddUser;