import React from 'react';
import './Cart.css';

const Cart = ({ list, clearCart, selectOne }) => {
    return (
        <div className='cart-content'>
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
                <button onClick={() => selectOne(list)} type="button" className="btn btn-light">Select One</button>
                <button onClick={clearCart} type="button" className="btn btn-warning">Choose Again</button>
            </div>
        </div>
    );
};

export default Cart;