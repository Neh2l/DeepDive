import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col rounded-xl bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

      <div className="mb-4 flex h-52 items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-full max-w-full object-contain"
        />
      </div>

      <p className="mb-2 text-sm text-indigo-500">
        {product.category}
      </p>

      <h3 className="mb-3 min-h-12 font-semibold text-slate-800">
        {product.title}
      </h3>

      <h4 className="mb-4 text-xl font-bold text-slate-900">
        ${product.price}
      </h4>

      <button
        onClick={() => dispatch(addToCart(product))}
        className="mt-auto rounded-lg bg-indigo-600 px-4 py-3 font-medium text-white transition hover:bg-indigo-700"
      >
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;