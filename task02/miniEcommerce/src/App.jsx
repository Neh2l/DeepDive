import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/home";
import Products from "./pages/products";
import Wishlist from "./pages/wishlist";
import Login from "./pages/login";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/products" element={<Products />} />

          <Route path="/wishlist" element={<Wishlist />} />

          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </>
  );
}