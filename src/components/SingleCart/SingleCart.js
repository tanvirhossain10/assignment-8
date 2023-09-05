import React from 'react';
import './SingleCart.css'
const SingleCart = ({ SingleCart }) => {
    const { img, name } = SingleCart;
    return (
        <div className='single-cart-info'>
            <img src={img} alt="" />
            <p>{name}</p>
        </div>
    );
};

export default SingleCart;