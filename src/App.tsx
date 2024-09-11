import ProductCard from "./components/productCard/ProductCard";
import { productList } from "./data";
const renderProductList = productList.map((product) => {
    return <ProductCard key={product.id} product={product} />;
});
const App = () => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-2">
                {renderProductList}
            </div>
        </>
    );
};

export default App;
