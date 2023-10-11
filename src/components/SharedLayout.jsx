import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ReactQueryDevtools } from "react-query/devtools";

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <div className="mt-14">
        <Outlet />
      </div>
      <Footer />
      <ReactQueryDevtools position="bottom-right" />
    </>
  );
};
export default SharedLayout;
