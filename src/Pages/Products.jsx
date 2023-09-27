import useFetch from "../hooks/useFetch";
import ProductList from "./ProductList";

const Products = () => {
    const { data, isError, isLoading } = useFetch("https://fakestoreapi.com/products?limit=10");

    return <ProductList products={data} />
}

export default Products;
