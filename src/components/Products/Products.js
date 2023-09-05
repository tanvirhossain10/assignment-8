import React, { useEffect, useState } from 'react';
import './Products.css'
import Product from '../Product/Product';
import Cart from '../Header/Cart/Cart';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const [cart, setCart] = useState([]);
    const btnHandler = id => {
        const find = products.find(product => product.id === id);
        if (find) {
            setCart([find, ...cart])
        }

    }

    return (
        <div className='products'>
            <div className="product">

                {
                    products.map(product => <Product key={product.id} products={product} btnHandeler={btnHandler}></Product>)
                }
            </div>
            <div className="cart">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Products;