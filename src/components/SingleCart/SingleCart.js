import React from 'react';
import './SingleCart.css'
const SingleCart = ({ SingleCart }) => {
    const { img, name } = SingleCart;
    return (
        <div className='single-cart-info'>
            <div className="selectedFoodBackground">
                {/* fdj */}
            </div>
            <div className="eachSeletedItem">
                <img src={img} alt="" />

                <p>{name}</p>
            </div>
        </div>
    );
};

export default SingleCart;