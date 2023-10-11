import { NavLink, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 w-full flex px-6 justify-between items-center py-4 bg-gray-800 text-white">
      <div
        className="cursor-pointer"
        onClick={() => navigate("/", { replace: true })}
      >
        React Query
      </div>
      <div className="flex gap-x-10">
        <NavLink
          to="/"
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : "gray",
            };
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : "gray",
            };
          }}
        >
          Post
        </NavLink>
        <NavLink
          to="/products"
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : "gray",
            };
          }}
        >
          Products
        </NavLink>

        <NavLink
          to="/superheros"
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : "gray",
            };
          }}
        >
          Parallel Queries
        </NavLink>

        <NavLink
          to="/dynamicparallel"
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : "gray",
            };
          }}
        >
          Dynamic parallel
        </NavLink>
        <NavLink
          to="/dependent"
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : "gray",
            };
          }}
        >
          Dependent
        </NavLink>
        <NavLink
          to="/initialdata"
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : "gray",
            };
          }}
        >
          Initial Data
        </NavLink>

        <NavLink
          to="/pagination"
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : "gray",
            };
          }}
        >
          Paginate
        </NavLink>
        <NavLink
          to="/infinite"
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : "gray",
            };
          }}
        >
          Infinite
        </NavLink>
      </div>
      <div>
        <button onClick={() => navigate("/signup", { replace: true })}>
          Sign Up
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
