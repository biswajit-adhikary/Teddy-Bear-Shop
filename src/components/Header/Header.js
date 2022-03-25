import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header bg-primary py-4 text-white bg-opacity-75 text-center'>
            <div className="container">
                <div className="logo">
                    <h1>Teddy Bear Shop</h1>
                </div>
            </div>
        </div>
    );
};

export default Header;