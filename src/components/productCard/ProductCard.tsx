import Button from "../@button/Button";
import Image from "../@image/Image";

interface IProps {}

const ProductCard = ({}: IProps) => {
    return (
        <>
            <div className="border rounded-md p-2 flex flex-col  bg-yellow-100">
                <Image
                    url={
                        "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
                    }
                    alt={"product image"}
                    className={"rounded-md cursor-pointer mb-2"}
                />
                <h3>Product title</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, nemo. Non deserunt unde illum
                    architecto.
                </p>
                <div className="flex items-center my-4 space-x-2">
                    <span className="w-5 h-5 bg-indigo-500 rounded-full cursor-pointer"></span>
                    <span className="w-5 h-5 bg-red-500 rounded-full cursor-pointer"></span>
                    <span className="w-5 h-5 bg-green-500 rounded-full cursor-pointer"></span>
                </div>

                <div className="flex items-center justify-between">
                    <span>$50,000</span>
                    <Image
                        url={
                            "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
                        }
                        alt={"product image"}
                        className={"w-10 h-10 rounded-full cursor-pointer object-center"}
                    />
                </div>

                <div className="flex justify-between space-x-3 mt-4">
                    <Button
                        text={"Edit"}
                        className={"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 flex-1"}
                    />

                    <Button
                        text={"Delete"}
                        className={"bg-red-500 text-white px-4 py-2 rounded  hover:bg-red-700  flex-1"}
                    />
                </div>
            </div>
        </>
    );
};

export default ProductCard;
