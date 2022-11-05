import React from 'react';
import { addToDb, removeFromCart } from '../../utility/manageLocalStorage';
import './ButtonProduct.css'

const ButtonProduct = (props) => {
    const { id } = props.product

    const addToCart = id => {
        addToDb(id)
    }

    const decreaseCart = id => {
        removeFromCart(id)
    }

    return (
        <div>
            <button onClick={() => decreaseCart(id)}>Minus</button>
            <button onClick={() => addToCart(id)}>Plus</button>
            <button>Remove</button>
        </div>
    );
};

export default ButtonProduct;