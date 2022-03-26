import React, { useState } from 'react';
import './Cart.css';

const Cart = ({ list, clearCart }) => {
    console.log(list);

    const [random, setRandom] = useState([]);
    const randomBear = () => {
        if (list.length > 0) {
            document.getElementById('random-area').style.display = "block";
            const randomList = list[Math.floor(Math.random() * list.length)];
            setRandom(randomList);
        }
    }

    return (
        <div className='cart-content'>
            <div id='random-area' className='p-2 mb-2'>
                <h3>Selected One:</h3>
                <div className='single-cart'>
                    <img src={random.image} alt="" />
                    <p>{random.name}</p>
                </div>
            </div>
            <h3>Selected Bears:</h3>
            <div id='cart-bear'>
                {
                    list.map(item => (
                        <div className='single-cart' key={item.id}>
                            <img src={item.image} alt="" />
                            <p>{item.name}</p>
                        </div>
                    ))
                }
            </div>
            <div className="cart-buttons">
                <button onClick={randomBear} type="button" className="btn btn-light">Select One</button>
                <button onClick={clearCart} type="button" className="btn btn-warning">Choose Again</button>
            </div>
        </div>
    );
};

export default Cart;