import ProductCard from "./ProductCard";

export default function ProductsSection({
  products,
  onDeleteProduct,
}) {
  return (
    <section className="products-section">

      <div className="section-title">
        <span>OUR COLLECTION</span>

        <h2>Our Products</h2>

        <p>
          Discover our collection of useful and affordable products.
        </p>
      </div>

      {products.length === 0 ? (
        <div className="empty-message">
          <h3>No products available</h3>
          <p>Add a new product to get started.</p>
        </div>
      ) : (
        <div className="products-grid">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onDelete={onDeleteProduct}
            />
          ))}

        </div>
      )}

    </section>
  );
}