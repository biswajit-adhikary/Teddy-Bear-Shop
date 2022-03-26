import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [bears, setBears] = useState([]);
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('teddy-bear.json')
            .then(rec => rec.json())
            .then(data => setBears(data));
    }, []);

    const addToList = (bear) => {
        let newList = [];
        const exists = list.find(list => list.id === bear.id);
        const countList = list.length;
        console.log(countList);
        console.log(exists);
        if (countList >= 4) {
            alert('Four Item Already Selected!');
            newList = [...list];
        } else {
            if (!exists) {
                newList = [...list, bear];
            } else {
                newList = [...list];
                alert('This Item Already Selected!');
            }
        }
        setList(newList);
    }

    const clearCart = () => {
        document.getElementById('random-area').style.display = "none";
        setList([]);
    }

    return (
        <div className='shop-area'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 order-md-1 order-2">
                        <div className="products">
                            <div className="row">
                                {
                                    bears.map(bear => <Product
                                        key={bear.id}
                                        bear={bear}
                                        addToList={addToList}
                                    ></Product>)
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 order-md-2 order-1">
                        <div className="cart-area mb-4">
                            {
                                <Cart list={list} clearCart={clearCart}></Cart>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Shop;