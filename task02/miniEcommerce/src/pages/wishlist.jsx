
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  FaHeart,
  FaEye,
  FaTrash,
} from "react-icons/fa";

import defaultProducts from "../data/products";

export default function Wishlist() {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites =
      localStorage.getItem("favorites");

    return savedFavorites
      ? JSON.parse(savedFavorites)
      : [];
  });

  const [products, setProducts] = useState(() => {
    const savedProducts =
      localStorage.getItem("products");

    return savedProducts
      ? JSON.parse(savedProducts)
      : defaultProducts;
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

  useEffect(() => {
    function updateProducts() {
      const savedProducts =
        localStorage.getItem("products");

      setProducts(
        savedProducts
          ? JSON.parse(savedProducts)
          : defaultProducts
      );
    }

    window.addEventListener(
      "productsChanged",
      updateProducts
    );

    return () => {
      window.removeEventListener(
        "productsChanged",
        updateProducts
      );
    };
  }, []);

  const favoriteProducts = products.filter((product) =>
    favorites.includes(product.id)
  );

  function removeFavorite(id) {
    const updatedFavorites = favorites.filter(
      (favoriteId) => favoriteId !== id
    );

    setFavorites(updatedFavorites);

    localStorage.setItem(
      "favorites",
      JSON.stringify(updatedFavorites)
    );

    window.dispatchEvent(
      new Event("favoritesChanged")
    );
  }

  return (
    <div className="wishlist-page">

      <div className="page-header">

        <span>YOUR FAVORITES</span>

        <h1>
          My Wishlist <FaHeart />
        </h1>

        <p>
          Products you saved for later.
        </p>

      </div>

      {favoriteProducts.length === 0 ? (

        <div className="empty-wishlist">

          <h2>Your wishlist is empty</h2>

          <p>
            Add products to your wishlist
            and they will appear here.
          </p>

          <Link to="/products">
            Browse Products
          </Link>

        </div>

      ) : (

        <div className="products-grid">

          {favoriteProducts.map((product) => (

            <div
              className="product-card"
              key={product.id}
            >

              <div className="product-image">

                <img
                  src={product.image}
                  alt={product.title}
                />

              </div>

              <div className="product-info">

                <span className="category">
                  {product.category}
                </span>

                <h3>
                  {product.title}
                </h3>

                <p>
                  {product.description}
                </p>

                <div className="product-bottom">

                  <h4>
                    ${product.price}
                  </h4>

                  <Link
                    to={`/products/${product.id}`}
                    className="details-button"
                  >
                    <FaEye />
                    Details
                  </Link>

                </div>

                <button
                  className="delete-button"
                  onClick={() =>
                    removeFavorite(product.id)
                  }
                >
                  <FaTrash />
                  Remove
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}
