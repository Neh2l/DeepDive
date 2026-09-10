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
    <nav className="bg-slate-900 px-6 py-5 text-white shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        
        <h2 className="text-2xl font-bold">
          Mini<span className="text-blue-400">Store</span>
        </h2>

        <div className="flex items-center gap-6">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 font-semibold"
                : "text-white hover:text-blue-400"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 font-semibold"
                : "text-white hover:text-blue-400"
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