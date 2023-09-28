import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/CartSlice";

const CartDetail = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.cart);

    const removeItemHandler = (productId) => {
        dispatch(remove(productId))
    }

    const createProductList = () => {
        return products.map((item) => {
            return <div>
                <h1>{item.title}</h1>
                <button onClick={() => removeItemHandler(item.id)}>remove</button>
            </div>
        })
    }
    return <div>{createProductList()}</div>
}

export default CartDetail;
