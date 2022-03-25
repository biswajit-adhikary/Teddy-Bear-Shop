import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = ({ bear, addToList }) => {
    const { name, price, picture } = bear;
    return (
        <div className='col-lg-4'>
            <div className="single-product">
                <div className="product-image">
                    <img src={picture} alt="" />
                </div>
                <div className="product-text">
                    <h3>{name}</h3>
                    <h4>{price}</h4>
                    <button onClick={() => addToList(bear)} type="button" className="btn btn-primary"><span>Add to List</span> <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
                </div>
            </div>
        </div>
    );
};

export default Product;