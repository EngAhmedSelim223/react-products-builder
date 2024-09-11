import Button from "../ui/Button";
import Image from "../@image/Image";
import { IProduct } from "../../interfaces";

interface IProps {
    product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
    return (
        <>
            <div className="border rounded-md p-2 flex flex-col  bg-yellow-100">
                <Image url={product.imageURL} alt={"product image"} className={"rounded-md cursor-pointer mb-2"} />
                <h3>{product.title}</h3>
                <p>
                    {product.description.length > 50
                        ? `${product.description.substring(0, 50)}...`
                        : product.description}
                </p>
                <div className="flex items-center my-4 space-x-2">
                    <span className="w-5 h-5 bg-indigo-500 rounded-full cursor-pointer"></span>
                    <span className="w-5 h-5 bg-red-500 rounded-full cursor-pointer"></span>
                    <span className="w-5 h-5 bg-green-500 rounded-full cursor-pointer"></span>
                </div>

                <div className="flex items-center justify-between">
                    <span>{product.price}</span>
                    <Image
                        url={product.category.imageURL}
                        alt={"product image"}
                        className={"w-10 h-10 rounded-full cursor-pointer object-center"}
                    />
                </div>

                <div className="flex justify-between space-x-3 mt-4">
                    <Button
                        text={"Edit 🔃"}
                        className={"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700  flex-1"}
                        onClick={() => console.log("Edit button clicked")}
                    />

                    <Button
                        text={"Delete ❎"}
                        className={"bg-red-500 text-white px-4 py-2 rounded  hover:bg-red-700  flex-1"}
                    />
                </div>
            </div>
        </>
    );
};

export default ProductCard;
