import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHeart,
  FaTrash,
  FaEye,
} from "react-icons/fa";

export default function ProductCard({
  product,
  onDelete,
}) {
  const [isFavorite, setIsFavorite] = useState(() => {
    const savedFavorites =
      localStorage.getItem("favorites");

    const favorites = savedFavorites
      ? JSON.parse(savedFavorites)
      : [];

    return favorites.includes(product.id);
  });

  function toggleFavorite() {
    const savedFavorites =
      localStorage.getItem("favorites");

    const favorites = savedFavorites
      ? JSON.parse(savedFavorites)
      : [];

    let updatedFavorites;

    if (favorites.includes(product.id)) {
      updatedFavorites = favorites.filter(
        (id) => id !== product.id
      );

      setIsFavorite(false);
    } else {
      updatedFavorites = [
        ...favorites,
        product.id,
      ];

      setIsFavorite(true);
    }

    localStorage.setItem(
      "favorites",
      JSON.stringify(updatedFavorites)
    );
  }

  return (
    <div className="product-card">

      <div className="product-image">
        <img
          src={product.image}
          alt={product.title}
        />

        <button
          className={`favorite-button ${
            isFavorite ? "active" : ""
          }`}
          onClick={toggleFavorite}
          aria-label="Add to wishlist"
        >
          <FaHeart />
        </button>
      </div>

      <div className="product-info">

        <span className="category">
          {product.category}
        </span>

        <h3>{product.title}</h3>

        <p>{product.description}</p>

        <div className="product-bottom">

          <h4>${product.price}</h4>

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
          onClick={() => onDelete(product.id)}
        >
          <FaTrash />
          Delete
        </button>

      </div>
    </div>
  );
}