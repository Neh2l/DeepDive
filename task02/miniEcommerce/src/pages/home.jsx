import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <h1>Welcome to Mini Store </h1>

      <p>
        Find simple and useful products at affordable prices.
      </p>

      <Link to="/products">
        <button>Shop Now</button>
      </Link>
    </div>
  );
}