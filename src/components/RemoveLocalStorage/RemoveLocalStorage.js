import React from 'react';

const RemoveLocalStorage = () => {
const removeWholeLocalStorage = () => localStorage.removeItem('shopping-cart');

    return (
        <div>
            <button onClick={removeWholeLocalStorage}>Remove all from cart</button>        
        </div>
    );
};

export default RemoveLocalStorage;