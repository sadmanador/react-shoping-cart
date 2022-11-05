const addToDb = id => {
    //step-1: making a empty object localstorage value;
    let shoppingCart = {};

    //step-3: if localstorage key already exist, than parsing to use it
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }


    //step-4:set object property by id
    const quantity = shoppingCart[id];

    //step-5: a property already exist, increase the property value by 1 | else set the property value to 1
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else {
        shoppingCart[id] = 1
    }

    //step-2: setting localstorage name, value as string.
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
};

const removeFromCart = () => {
    console.log('remove');
}












export { addToDb, removeFromCart };