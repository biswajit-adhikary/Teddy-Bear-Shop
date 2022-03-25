import React from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    return (
        <div className='shop-area'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <div className="products">
                            {
                                <Product></Product>
                            }
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="cart">
                            {
                                <Cart></Cart>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;