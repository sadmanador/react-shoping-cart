import React from 'react';
import ButtonProduct from '../ButtonProduct/ButtonProduct';
import './Product.css'

const Product = (props) => {
    const {name, id, guid} = props.product;
    return (
        <div className='card'>
            <h2>Name: {name}</h2>
            <p>{guid}</p>
            <p><small>ID: {id}</small></p>
            <ButtonProduct
            product={props.product}
            ></ButtonProduct>
        </div>
    );
};

export default Product;