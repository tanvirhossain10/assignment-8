import React, { useState } from 'react';
import './SingleCart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
const SingleCart = ({ SingleCart, dustBtn }) => {
    const { img, name } = SingleCart;

    return (
        <div className='single-cart-info'>

            <div className="eachSeletedItem">
                <div className="selectedFoodBackground">
                    {/* fdj */}
                    <img src={img} alt="" />
                </div>


                <p className='nameIdOfSelectedFoodItem'>{name}</p>

            </div>
            <p className='fontAwesome' onClick={() => dustBtn(SingleCart)}><FontAwesomeIcon icon={faTrashAlt} ></FontAwesomeIcon></p>

        </div>
    );
};

export default SingleCart;