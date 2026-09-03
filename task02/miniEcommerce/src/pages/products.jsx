import ProductCard from "../components/ProductCard";
import products from "../data/products";

export default function Products() {
  return (
    <div className="products-page">
      <h1>Our Products</h1>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}