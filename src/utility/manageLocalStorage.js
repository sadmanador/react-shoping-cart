const addToDb = id => {
    //step-1: making a empty object localStorage value;
    let shoppingCart = {};

    //step-3: if localStorage key already exist, than parsing to use it
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

    //step-2: setting localStorage name, value as string.
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
};




const removeFromCart = id => {
    const storedCart = localStorage.getItem('shopping-cart');
    const storedCartStr = JSON.parse(storedCart);

    const quantity = storedCartStr[id]
    if (quantity) {
        let newQuantity = quantity -1;
        storedCartStr[id] = newQuantity
    }

    localStorage.setItem('shopping-cart', JSON.stringify(storedCartStr))
}


const deletingItem = id => {
    const storedCart = localStorage.getItem('shopping-cart');
    const storedCartStr = JSON.parse(storedCart);

    const quantity = storedCartStr[id];
    if(quantity){
        delete storedCartStr[id]
    }

    localStorage.setItem('shopping-cart', JSON.stringify(storedCartStr))
};









export { addToDb, removeFromCart, deletingItem};