import { useParams, Link } from "react-router-dom";
import { useSingleProductDetails } from "../queryies";

const ProductDetails = () => {
  const { productId } = useParams();
  const { data, isLoading } = useSingleProductDetails(productId);

  if (isLoading) {
    return (
      <div>
        <h2>Loading....</h2>
      </div>
    );
  }

  return (
    <div>
      <div key={data.id} className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">{data.name}</h2>
        <p className="text-gray-600">{data.description}</p>
        <p className="text-blue-600 font-semibold mt-2">{data.price}</p>

        <p className="text-gray-600">{data.material}</p>
        <p className="text-blue-600 font-semibold mt-2">{data.availability}</p>

        <p className="text-gray-600">{data.color}</p>
        <p className="text-blue-600 font-semibold mt-2">{data.brand}</p>

        <p className="text-gray-600">{data.rating}</p>
        <p className="text-blue-600 font-semibold mt-2">{data.reviews}</p>

        <Link
          to={"/products"}
          className="bg-blue-500 mt-6 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Back to Products
        </Link>
      </div>
    </div>
  );
};
export default ProductDetails;
