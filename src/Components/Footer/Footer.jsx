import React from 'react';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <h1>Md Chanchal Hossain</h1>
                <div className='link f-Link' >
                    <Link>Services</Link>
                    <Link>Careers</Link>
                    <Link>FAQ</Link>
                    <Link>Contact</Link>
                    <Link>About</Link>
                </div>
                <h3>Stay in touch</h3>
                <div>
                    <BsFacebook className='icons' />
                    <BsInstagram className='icons' />
                    <AiOutlineTwitter className='icons' />
                    <AiFillGithub className='icons' />
                </div>
                <p>© Md Chanchal Hossain. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;