import { NavLink } from "react-router-dom";

// responsible for reading the data from store
import { useSelector } from "react-redux";

const Cart = () => {
    const products = useSelector(state => state.cart);

    console.log(products)
    return <h1><NavLink to="cart">Cart: {products.length}</NavLink></h1>
}

export default Cart;
