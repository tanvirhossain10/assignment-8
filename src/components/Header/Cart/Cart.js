import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    const { img, name } = cart;
    return (
        <div className='cart'>
            <div className="cart-info">
                <img src={img} alt="" />
                <p>{name}</p>
            </div>
        </div>
    );
};

export default Cart;