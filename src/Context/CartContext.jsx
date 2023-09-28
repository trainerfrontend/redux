import { createContext, useState } from "react";

const CartContext = createContext();
const { Provider } = CartContext;

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevState) => {
            return [
                ...prevState, product
            ]
        })
    }

    const removeFromCart = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart)
    }

    return <Provider value={{ cart, addToCart, removeFromCart }}>
        {children}
    </Provider>
}

export { CartProvider, CartContext }