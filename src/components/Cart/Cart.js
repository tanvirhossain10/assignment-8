import React, { useState } from 'react';
import './Cart.css'
import SingleCart from '../SingleCart/SingleCart';

const Cart = ({ cart, ChoseForMEBtn, choseAginBtn, dustBtn }) => {
    const [remaingFoods, setRemaingFood] = useState([])
    // console.log(cart)
    // let img;
    // let name;
    // for (const singleCart of cart) {
    //     let { img, name } = singleCart
    //     console.log(singleCart)
    // const toggleVisibility = (id) => {
    //     console.log('hey')
    //     id
    // }
    // const toggleVisibility=()=>{

    // }


    return (
        <div className='cart-c'>
            <div className="cart-info">
                <h3>Selected foods</h3>
                <div className="allSelectedFood">
                    {cart.map(singlecrt => <SingleCart SingleCart={singlecrt} key={singlecrt.id} dustBtn={dustBtn}></SingleCart>)}
                </div>
                <div id='randomBtnDiv'>
                    {/* {
                        cart.length <= 2 ? null : (
                            <button onClick={() => ChoseForMEBtn(cart)} id='randomBtn'>Chose 1 FOR ME </button>
                        )} */}
                    <button onClick={() => ChoseForMEBtn(cart)} id='randomBtn'>Chose 1 FOR ME </button>
                    <button onClick={() => choseAginBtn(cart)} id='choseAgianBtn'>Chose Again </button>
                </div>

            </div>
        </div >
    );
};

export default Cart;