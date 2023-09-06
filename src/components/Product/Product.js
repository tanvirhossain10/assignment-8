import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShopLock, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const Product = ({ products, btnHandeler }) => {

    const { name, price, img, id } = products
    return (
        <div className='single-product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p><h4>{name}</h4></p>
                <p><h3>${price}</h3></p>
            </div>
            <button onClick={() => btnHandeler(id)}><p>Add hungry cart</p> <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon></button>
        </div>
    );
};

export default Product;