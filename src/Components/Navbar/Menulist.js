import React from 'react';
import { Link } from 'react-router-dom';

function Menulist() {
    return (
        <>
             <ul className="menuItems" >
                    <li className="nav-links">
                        <Link to="/">Home</Link>
                        </li>
                    <li className="nav-links">
                        <Link to="/product">Product</Link>
                        </li>
                    <li className="nav-links">
                        <Link to="/services">Services</Link>
                        </li>
                    <li className="nav-links">    
                        <Link to="/about">About</Link>
                        </li>
                    <li className="nav-links">
                        <Link to="/contact">Contact</Link>
                        </li>
                        <li className="nav-links">
                        <Link to="/users">Users</Link>
                        </li>
                    
                </ul>
                <i  className='fas fa-bars burger'></i>

        </>
    )
}

export default Menulist
