import React, { useEffect, useState } from 'react';
import './Products.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { randomNumber } from '../Utilities/randomnumber';

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
        if (cart.length === 4) {
            alert('You will be fatty.So you can not select more than 4 food products');
            return
        }
        const find = products.find(product => product.id === id);
        if (find) {
            const duplicateSelect = cart.find(product => product.id === id);
            if (duplicateSelect) {
                alert('You can not add more than 1 products at a time')
                return
            }
            setCart([...cart, find]);
            setRandom([...random, find.random]);

        }


    }



    const ChoseForMEBtn = (arr) => {
        const ran = randomNumber(random);
        const findRandomFood = arr.find(randomnum => randomnum.random === ran);
        if (arr.length > 1) {
            if (findRandomFood) {
                alert(`You can eat randomly ${findRandomFood.name} which price is ${findRandomFood.price} `)
            }


        }
        else {
            alert('Please select at least two products for randomly selected product')
        }


    }
    const choseAginBtn = () => {
        setCart([])
    }
    const dustBtn = (removedFood) => {
        if (removedFood) {
            const notExit = cart.filter((dustFood) => removedFood.id !== dustFood.id);
            setCart(notExit)
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
                <Cart cart={cart} ChoseForMEBtn={ChoseForMEBtn} choseAginBtn={choseAginBtn} dustBtn={dustBtn}></Cart>

            </div>
        </div>
    );
};

export default Products;