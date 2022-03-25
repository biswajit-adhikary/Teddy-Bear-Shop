import React from 'react';
import './Cart.css';

const Cart = ({ list }) => {
    console.log(list);
    return (
        <div className='cart-content'>
            <h3>Selected Bears:</h3>
            {
                list.map(item => (
                    <div className='single-cart' key={item.id}>
                        <img src={item.picture} alt="" />
                        <p>{item.name}</p>
                    </div>
                ))
            }
            <div className="cart-buttons">
                <button type="button" class="btn btn-light">Light</button>
                <button type="button" class="btn btn-warning">Warning</button>
            </div>
        </div>
    );
};

export default Cart;