import ProductCard from "./components/productCard/ProductCard";

const App = () => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-2">
                <ProductCard />
            </div>
        </>
    );
};

export default App;
