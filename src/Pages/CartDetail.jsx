import { CartContext } from "../Context/CartContext";
import { useContext } from "react";


const CartDetail = () => {
    const { cart, removeFromCart } = useContext(CartContext);

    const createProductList = () => {
        return cart.map((item) => {
            return <div>
                <h1>{item.title}</h1>
                <button onClick={() => removeFromCart(item.id)}>remove</button>
            </div>
        })
    }
    return <div>{createProductList()}</div>
}

export default CartDetail;
