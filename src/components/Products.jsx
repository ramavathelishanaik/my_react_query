import { useProductsData } from "../queryies";
import { Link } from "react-router-dom";

const Products = () => {
  const { data, isLoading } = useProductsData();

  if (isLoading) {
    return (
      <div>
        <p>loading products....</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 py-4">
        <div className="container mx-auto text-white text-center">
          <h1 className="text-4xl font-bold">Our Products</h1>
        </div>
      </header>

      <main className="container mx-auto py-8">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-blue-600 font-semibold mt-2">
                {product.price}
              </p>
              <div className="flex justify-between">
                <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                  Add to Cart
                </button>

                <Link
                  to={`/products/${product.id}`}
                  className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  More Info
                </Link>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};
export default Products;
