import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import defaultProducts from "../data/products";

export default function ProductDetails() {
  const { id } = useParams();

  const savedProducts =
    localStorage.getItem("products");

  const products = savedProducts
    ? JSON.parse(savedProducts)
    : defaultProducts;

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="not-found">

        <h2>Product not found</h2>

        <Link to="/products">
          Back to Products
        </Link>

      </div>
    );
  }

  return (
    <div className="product-details">

      <div className="details-image">
        <img
          src={product.image}
          alt={product.title}
        />
      </div>

      <div className="details-content">

        <span className="category">
          {product.category}
        </span>

        <h1>{product.title}</h1>

        <p>{product.description}</p>

        <h2>${product.price}</h2>

        <Link
          to="/products"
          className="back-button"
        >
          <FaArrowLeft />
          Back to Products
        </Link>

      </div>

    </div>
  );
}