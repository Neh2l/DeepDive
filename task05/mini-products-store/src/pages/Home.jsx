import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../redux/productSlice";

import ProductCard from "../components/ProductCard";
import ProductForm from "../components/ProductForm";

function Home() {
  const dispatch = useDispatch();

  const { items, loading } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <h2 className="text-xl font-semibold text-slate-600">
          Loading products...
        </h2>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">

      <div className="mb-10">
        <p className="mb-2 font-medium text-blue-600">
          Welcome to Mini Store
        </p>

        <h1 className="text-3xl font-bold text-slate-900">
          Discover Our Products
        </h1>
      </div>

      <ProductForm />

      <h2 className="mb-6 text-2xl font-bold text-slate-900">
        Products
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {items.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </div>
  );
}

export default Home;