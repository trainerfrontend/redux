import ProductList from "./ProductList";
import useFetch from "../hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Products = () => {
    const { data: products } = useFetch('https://fakestoreapi.com/products?limit=5')
    return <ProductList products={products} />
}

export default Products;
