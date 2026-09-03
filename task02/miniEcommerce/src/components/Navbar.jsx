
import { useEffect, useState } from "react";

import {NavLink, Link, useNavigate,} from "react-router-dom";

import {
  FaHome,
  FaShoppingBag,
  FaHeart,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";

export default function Navbar() {
  const navigate = useNavigate();

  const [user, setUser] = useState(() => {
    const savedUser =
      localStorage.getItem("user");

    return savedUser
      ? JSON.parse(savedUser)
      : null;
  });

  const [favorites, setFavorites] = useState(() => {
    const savedFavorites =
      localStorage.getItem("favorites");

    return savedFavorites
      ? JSON.parse(savedFavorites)
      : [];
  });

  useEffect(() => {
    function updateFavorites() {
      const savedFavorites =
        localStorage.getItem("favorites");

      setFavorites(
        savedFavorites
          ? JSON.parse(savedFavorites)
          : []
      );
    }

    window.addEventListener(
      "favoritesChanged",
      updateFavorites
    );

    return () => {
      window.removeEventListener(
        "favoritesChanged",
        updateFavorites
      );
    };
  }, []);

  function logout() {
    localStorage.removeItem("user");

    setUser(null);

    navigate("/");
  }

  const linkClass = ({ isActive }) =>
    isActive
      ? "nav-link active"
      : "nav-link";

  return (
    <nav className="navbar">
      <Link
        to="/"
        className="logo"
      >
        Mini<span>Store</span>
      </Link>

      <div className="nav-links">

      
        <NavLink
          to="/"
          end
          className={linkClass}
        >
          <FaHome />
          Home
        </NavLink>

       
        <NavLink
          to="/products"
          className={linkClass}
        >
          <FaShoppingBag />
          Products
        </NavLink>

       
        <NavLink
          to="/wishlist"
          className={linkClass}
        >
          <FaHeart />
          Wishlist

          {favorites.length > 0 && (
            <span className="wishlist-count">
              {favorites.length}
            </span>
          )}
        </NavLink>

      
        {user ? (

          <div className="user-area">

            <span>
              <FaUser />
              Hi, {user.name}
            </span>

            <button
              onClick={logout}
              className="logout-button"
            >
              <FaSignOutAlt />
              Logout
            </button>

          </div>

        ) : (

          <NavLink
            to="/login"
            className={linkClass}
          >
            <FaUser />
            Login
          </NavLink>

        )}

      </div>

    </nav>
  );
}

