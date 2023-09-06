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
    const [random, setRandom] = useState([]);
    const btnHandler = id => {
        const find = products.find(product => product.id === id);
        if (find) {
            const duplicateSelect = cart.find(product => product.id === id);
            if (duplicateSelect) {
                alert('you can only select one products at time beacuse doublce select of a products will give me some error in console')
                return
            }
            setCart([...cart, find]);
            setRandom([...random, find.random]);

        }


    }
    console.log(random)

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