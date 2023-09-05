import React from 'react';
import './Cart.css'
import SingleCart from '../../SingleCart/SingleCart';

const Cart = ({ cart }) => {
    // console.log(cart)
    // let img;
    // let name;
    // for (const singleCart of cart) {
    //     let { img, name } = singleCart
    //     console.log(singleCart)

    return (
        <div className='cart'>
            <div className="cart-info">
                {cart.map(singlecrt => <SingleCart SingleCart={singlecrt} key={singlecrt.id}></SingleCart>)}

            </div>
        </div>
    );
};

export default Cart;