import ProductList from "./ProductList";
import { fetchProducts } from "../store/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Products = () => {

    return <ProductList />
}

export default Products;
