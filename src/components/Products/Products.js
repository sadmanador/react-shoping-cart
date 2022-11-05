import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Products.css'
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='container'>
            {
                products.map(product => <Product
                product={product}
                key={product.id}
                ></Product>)
            }
        </div>
    );
};

export default Products;