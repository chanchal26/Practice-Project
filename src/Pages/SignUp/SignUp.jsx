import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../UserContext/UserContext';
import './SignUp.css'

const SignUp = () => {

    const { createUser } = useContext(authContext);
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if (password.length < 6) {
            setError('must be 6 caracter');
            return
        }

        if (password !== confirm) {
            setError('Your password did not match.')
            return
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(error => {
                console.log(error);
            })

        setError('')
        console.log(email, password, confirm);
    }

    return (
        <div className='form-container'>
            <h1 className='form-title'>Sign Up</h1>
            <form className='form-control' onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='Email'>Email</label>
                    <input type="email" name="email" id="1" />
                </div>
                <div className='form-control'>
                    <label htmlFor='Password'>Password</label>
                    <input type="password" name="password" id="2" />
                </div>
                <div className='form-control'>
                    <label htmlFor='Confirm Password'>Confirm Password</label>
                    <input type="password" name="confirm" id="3" />
                </div>

                <button>Sign Up</button>

                <p>Already have an Account? <small><Link to='/signIn' className='link'>Sign In</Link></small></p>
                <p className='error-text'>{error}</p>
            </form>
        </div>
    );
};

export default SignUp;