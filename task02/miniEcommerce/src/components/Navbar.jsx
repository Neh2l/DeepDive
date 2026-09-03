import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function Navbar() {
  const { user, setUser, favorites } = useContext(UserContext);

  const linkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <nav className="navbar">
      <h2>Mini Store</h2>

      <div className="nav-links">
        <NavLink to="/" end className={linkClass}>
          Home
        </NavLink>

        <NavLink to="/products" className={linkClass}>
          Products
        </NavLink>

        {user ? (
          <>
            <NavLink to="/wishlist" className={linkClass}>
              Wishlist {favorites.length > 0 && `(${favorites.length})`}
            </NavLink>

            <span>Hi, {user.name}</span>

            <button onClick={() => setUser(null)}>
              Logout
            </button>
          </>
        ) : (
          <NavLink to="/login" className={linkClass}>
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
}