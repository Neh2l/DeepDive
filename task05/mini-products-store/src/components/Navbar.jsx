import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="bg-white px-6 py-5 text-black shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        
        <h2 className="text-2xl font-bold">
          Mini<span className="text-indigo-400">Store</span>
        </h2>

        <div className="flex items-center gap-6">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-ind-400 font-semibold"
                : "text-white hover:text-ind-400"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-400 font-semibold"
                : "text-gray-700 hover:text-indigo-400"
            }
          >
            Cart ({totalItems})
          </NavLink>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;