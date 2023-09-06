import React from 'react';
import './SingleCart.css'
const SingleCart = ({ SingleCart }) => {
    const { img, name } = SingleCart;
    return (
        <div className='single-cart-info'>

            <div className="eachSeletedItem">
                <div className="selectedFoodBackground">
                    {/* fdj */}
                    <img src={img} alt="" />
                </div>


                <p>{name}</p>
            </div>
        </div>
    );
};

export default SingleCart;