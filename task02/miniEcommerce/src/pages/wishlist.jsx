import { useContext } from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import { UserContext } from "../context/UserContext";

export default function Wishlist() {
  const { user, favorites } = useContext(UserContext);

  if (!user) {
    return (
      <div>
        <h2>Please login to see your wishlist.</h2>
      </div>
    );
  }

  const favoriteProducts = products.filter((product) =>
    favorites.includes(product.id)
  );

  return (
    <div className="wishlist-page">
      <h1>My Wishlist </h1>

      {favoriteProducts.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="products-grid">
          {favoriteProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </div>
  );
}