import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../UserContext/UserContext';
import './SignIn.css'

const SignIn = () => {

    const navigate = useNavigate();
    const { signIn } = useContext(authContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className='form-container'>
            <h1 className='form-title'>Login</h1>
            <form className='form-control' onSubmit={handleLogin}>
                <div className='form-control'>
                    <label>Email</label>
                    <input type="email" name="email" id="1" />
                </div>
                <div className='form-control'>
                    <label>Password</label>
                    <input type="password" name="password" id="2" />
                </div>

                <button>Log In</button>

                <p>New to This Site? <small><Link to='/signUp' className='link'>Create New Account.</Link></small></p>
            </form>
        </div>
    );
};

export default SignIn;