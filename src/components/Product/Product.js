import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const Product = ({ products, btnHandeler }) => {

    const { name, price, img, id } = products
    return (
        <div className='single-product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h4>{name}</h4>
                <h3>$ {price}</h3>
            </div>
            <button onClick={() => btnHandeler(id)}><p>Add hungry cart</p> <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon></button>
        </div>
    );
};

export default Product;