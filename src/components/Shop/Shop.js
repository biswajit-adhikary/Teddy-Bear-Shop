import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [bears, setBears] = useState([]);
    useEffect(() => {
        fetch('teddy-bear.json')
            .then(rec => rec.json())
            .then(data => setBears(data));
    }, [])
    return (
        <div className='shop-area'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <div className="products">
                            <div className="row">
                                {
                                    bears.map(bear => <Product
                                        key={bear.id}
                                        bear={bear}
                                    ></Product>)
                                }
                            </div>
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
        </div >
    );
};

export default Shop;