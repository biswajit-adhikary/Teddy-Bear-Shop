import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props);
    const { name, price, picture } = props.bear;
    return (
        <div className='col-lg-4'>
            <div className="single-product">
                <div className="product-image">
                    <img src={picture} alt="" />
                </div>
                <div className="product-text">
                    <h3>{name}</h3>
                    <h4>{price}</h4>
                    <button type="button" className="btn btn-primary"><span>Add to List</span></button>
                </div>
            </div>
        </div>
    );
};

export default Product;