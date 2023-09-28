import { useSelector } from "react-redux";

const CartDetail = () => {
    const products = useSelector(state => state.cart);

    const createProductList = () => {
        return products.map((item) => {
            return <h1>{item.title}</h1>
        })
    }
    return <div>{createProductList()}</div>
}

export default CartDetail;
