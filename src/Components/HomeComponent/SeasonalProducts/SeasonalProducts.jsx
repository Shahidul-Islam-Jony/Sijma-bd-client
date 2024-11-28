import sweets1 from "../../../assets/images/sweets/sweets.png";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

const SeasonalProducts = () => {
  const products = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="my-10">
      <div>
        <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold uppercase mb-10">
          Seasonal Products
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center px-4">
        {products.map((product) => (
          <div
            key={product}
            className="border-2 group relative border-gray-100 shadow-lg shadow-black rounded-lg p-1"
          >
            <div className="w-fit">
              <img src={sweets1} className="rounded-t-lg" alt="sweets" />
            </div>
            <div className="px-1">
              <h4 className="text-lg">
                <span className="font-medium">Name:</span> Sweets
              </h4>
              <p>
                <span className="font-medium">Price:</span> 300tk
              </p>
              <button className="border-2 px-4 py-2 w-full my-2 rounded-md bg-[#113061] text-white font-bold">
                Quick View
              </button>
            </div>
            <div className="hidden group-hover:block absolute top-3 right-3">
              <FaRegHeart className="text-3xl" />
              <MdOutlineShoppingCart className="text-3xl mt-2" />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button className="border-2 border-[#113061] px-4 py-1 bg-[#113061] text-white font-semibold rounded-md hover:bg-blue-800 hover:border-blue-800">Show More</button>
      </div>
    </div>
  );
};

export default SeasonalProducts;
