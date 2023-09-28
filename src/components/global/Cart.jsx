// responsible for reading the data from store
import { useSelector } from "react-redux";

const Cart = () => {
    const products = useSelector(state => state.cart);

    console.log(products)
    return <h1>Cart: {products.length}</h1>
}

export default Cart;
