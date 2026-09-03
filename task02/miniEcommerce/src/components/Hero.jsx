import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <span className="hero-label">
          WELCOME TO MINI STORE
        </span>

        <h1>
          Simple Shopping,
          <br />
          <span>Better Experience.</span>
        </h1>

        <p>
          Discover useful products at simple
          and affordable prices.
        </p>

        <Link
          to="/products"
          className="hero-button"
        >
          Explore Products
          <FaArrowRight />
        </Link>

      </div>

    </section>
  );
}