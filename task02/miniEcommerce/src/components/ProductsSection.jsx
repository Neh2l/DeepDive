import ProductCard from "./ProductCard";

function ProductsSection() {
  return (
    <section className="products-section">

      <h2>Featured Products</h2>

      <div className="products-grid">

        <ProductCard
          title="Laptop"
          category="Computers"
          description="Powerful laptop for work and entertainment."
          price="$900"
          image="/Lab.jpg"
        />

        <ProductCard
          title="Headphones"
          category="Electronics"
          description="Enjoy clear and immersive sound."
          price="$120"
          image="/headphone.jpg"
        />

        <ProductCard
          title="Smart Watch"
          category="Accessories"
          description="Track your activity and stay connected."
          price="$200"
          image="/watch.jpg"
        />

        <ProductCard
          title="Camera"
          category="Photography"
          description="Capture your favorite moments in high quality."
          price="$750"
          image="/camera.jpg"
        />

        <ProductCard
          title="Keyboard"
          category="Accessories"
          description="Mechanical keyboard for a better typing experience."
          price="$95"
          image="/Keyboard.jpg"
        />

        <ProductCard
          title="Smartphone"
          category="Electronics"
          description="Modern smartphone with powerful performance."
          price="$899"
          image="/phone.jpg"
        />

      </div>

    </section>
  );
}

export default ProductsSection;