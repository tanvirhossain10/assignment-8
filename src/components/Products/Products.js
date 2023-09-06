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



    const ChoseForMEBtn = (arr) => {
        console.log(arr)
        const ran = randomNumber(random);
        console.log(ran);
        const findRandomFood = arr.find(randomnum => randomnum.random === ran);
        if (arr.length > 1) {
            if (findRandomFood) {
                alert(`You can eat randomly ${findRandomFood.name} which price is ${findRandomFood.price}`)
            }


        }
        else {
            console.log('alert')
            alert('Please select at least two products for randomly selected product')
        }


    }
    const choseAginBtn = () => {
        setCart([])
    }

    return (
        <div className='products'>
            <div className="product">

                {
                    products.map(product => <Product key={product.id} products={product} btnHandeler={btnHandler}></Product>)
                }
            </div>
            <div className="cart">
                <Cart cart={cart} ChoseForMEBtn={ChoseForMEBtn} choseAginBtn={choseAginBtn}></Cart>

            </div>
        </div>
    );
};

export default Products;