const ProductList = ({ products }) => {

    const createList = () => {
        return products.map((product, index) => {
            return <div key={product.id} className="bg-slate-200 p-2 w-60">
                <h1 className="text-xl font-bold">{product.title}</h1>
                <p className="my-2">{product.description}</p>
                <p className="my-2 font-bold">{product.price}</p>
                <button className="bg-orange-800 rounded-md text-white px-2 hover:bg-orange-700">Add to Cart</button>
            </div >
        })
    }

    return <section className="flex flex-wrap gap-3 m-5 m-auto">
        {products && createList()}
    </section>
}



export default ProductList;
