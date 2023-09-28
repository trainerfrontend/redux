import { NavLink } from "react-router-dom";

// responsible for reading the data from store
import { useSelector } from "react-redux";

const Cart = () => {
    return <h1><NavLink to="cart">Cart: 0</NavLink></h1>
}

export default Cart;
