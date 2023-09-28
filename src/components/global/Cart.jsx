import { NavLink } from "react-router-dom";
import { CartContext } from "../../Context/CartContext"
import { useContext } from "react";

// responsible for reading the data from store
import { useSelector } from "react-redux";

const Cart = () => {
    const { cart, setCart } = useContext(CartContext);
    console.log(cart)
    return <h1><NavLink to="cart">Cart: {cart.length}</NavLink></h1>
}

export default Cart;
