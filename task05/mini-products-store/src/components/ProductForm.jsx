import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/productSlice";

function ProductForm() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newProduct = {
      title,
      price: Number(price),
      category,
      image,
      description: "New product",
    };

    dispatch(addProduct(newProduct));

    setTitle("");
    setPrice("");
    setCategory("");
    setImage("");
  }

  return (
    <div className="mb-12 rounded-2xl bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold text-slate-800">
        Add New Product
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid gap-4 md:grid-cols-2"
      >

        <input
          type="text"
          placeholder="Product title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500"
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500"
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500"
        />

        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
          className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500"
        />

        <button
          type="submit"
          className="rounded-lg bg-indigo-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-700 md:col-span-2"
        >
          Add Product
        </button>

      </form>

    </div>
  );
}

export default ProductForm;