import {
  Routes,
  Route,
} from "react-router-dom";

import Layout from "./layout/Layout";

import Home from "./pages/home";
import Products from "./pages/products";
import ProductDetails from "./pages/productDetials";
import Login from "./pages/login";
import Wishlist from "./pages/wishlist";

export default function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Layout />}
      >

        <Route
          index
          element={<Home />}
        />

        <Route
          path="products"
          element={<Products />}
        />

        <Route
          path="products/:id"
          element={<ProductDetails />}
        />

        <Route
          path="login"
          element={<Login />}
        />

        <Route
          path="wishlist"
          element={<Wishlist />}
        />

      </Route>

    </Routes>
  );
}