import ProductList from "./ProductList";
import { fetchProducts } from "../store/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Products = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    const { data, status } = useSelector(state => state.product);

    if (status == "loading") {
        return <h2>Loading....</h2>
    }

    if (status == "error") {
        return <h2>error....</h2>
    }

    return <ProductList products={data} />
}

export default Products;
