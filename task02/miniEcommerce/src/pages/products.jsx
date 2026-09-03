import {
  useEffect,
  useState,
} from "react";

import ProductForm from "../components/ProductForm";
import ProductsSection from "../components/ProductsSection";

import defaultProducts from "../data/products";

export default function Products() {

  const [products, setProducts] = useState(() => {
    const savedProducts =
      localStorage.getItem("products");

    if (savedProducts) {
      return JSON.parse(savedProducts);
    }

    return defaultProducts;
  });

  useEffect(() => {
    localStorage.setItem(
      "products",
      JSON.stringify(products)
    );
  }, [products]);

  function addProduct(newProduct) {
    setProducts((prevProducts) => [
      ...prevProducts,
      newProduct,
    ]);
  }

  function deleteProduct(id) {
    setProducts((prevProducts) =>
      prevProducts.filter(
        (product) => product.id !== id
      )
    );
  }

  return (
    <div className="products-page">

      <div className="page-header">
        <span>OUR STORE</span>

        <h1>Products</h1>

        <p>
          Browse, add and manage your products.
        </p>
      </div>

      <ProductForm
        onAddProduct={addProduct}
      />

      <ProductsSection
        products={products}
        onDeleteProduct={deleteProduct}
      />

    </div>
  );
}