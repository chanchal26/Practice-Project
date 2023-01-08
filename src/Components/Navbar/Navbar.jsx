import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../UserContext/UserContext';
import './Navbar.css';

const Navbar = () => {
    const { user, logOut } = useContext(authContext);
    return (
        <nav className='header'>
            <div>
                <h1><Link to='/' id='logo'>Md Chanchal Hossain</Link></h1>
            </div>
            <div className='link'>
                <Link to='/myCart'>My Cart</Link>
                <Link to='/adminPanel'>Admin Panel</Link>
                {
                    user?.uid ? <Link onClick={logOut}>Sign Out</Link> : <Link to='/signIn'>Sign In</Link>
                }

            </div>

        </nav>
    );
};

export default Navbar;