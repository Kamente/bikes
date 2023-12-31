import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="custom-nav">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/vehicles">Vehicles</Link>
                </li>
                <li>
                    <Link to="/booking">Booking</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
