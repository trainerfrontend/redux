import ProductList from "./ProductList";
import { fetchProducts } from "../store/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Products = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    const { data } = useSelector(state => state.product)

    return <ProductList products={data} />
}

export default Products;
