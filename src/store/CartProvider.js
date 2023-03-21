import CartContext from "./cart-context";

const CartProvider = (props) => {

    const addItemtoCartHandler = item => {};
    const removeItemtoCartHandler = id => {};

    const cartContext = {
        item: [],
        totalAmount:0,
        addItem:addItemtoCartHandler ,
        removeItem:removeItemtoCartHandler 
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>;
};

export default CartProvider;
