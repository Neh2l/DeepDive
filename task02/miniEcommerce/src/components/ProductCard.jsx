import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function ProductCard({ product }) {
  const { favorites, toggleFavorite } = useContext(UserContext);

  const isFavorite = favorites.includes(product.id);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />

      <h3>{product.title}</h3>

      <p>{product.category}</p>

      <p>{product.description}</p>

      <h4>${product.price}</h4>

      <button onClick={() => toggleFavorite(product.id)}>
        {isFavorite ? " Remove Favorite" : " Add Favorite"}
      </button>
    </div>
  );
}