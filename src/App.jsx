import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Parallel from "./components/Parallel";
import DynamicParallel from "./components/DynamicParallel";
import Dependent from "./components/Dependent";
import Superheros from "./components/Superheros";
import SuperHeordetailspage from "./components/SuperHeordetailspage";
import Pagination from "./components/Pagination";
import InfiniteQueries from "./components/InfiniteQueries";
import Signup from "./components/Signup";
import NotFound from "./components/Notfound";

import { Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:productId" element={<ProductDetails />} />
        <Route path="superheros" element={<Parallel />} />
        <Route path="dynamicparallel" element={<DynamicParallel />} />
        <Route
          path="dependent"
          element={<Dependent email="ramavath@gmail.com" />}
        />
        <Route path="initialdata" element={<Superheros />} />
        <Route path="initialdata/:heroId" element={<SuperHeordetailspage />} />
        <Route path="pagination" element={<Pagination />} />
        <Route path="infinite" element={<InfiniteQueries />} />
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
