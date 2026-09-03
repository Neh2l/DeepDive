import { useState } from "react";
import { FaPlus } from "react-icons/fa";

export default function ProductForm({
  onAddProduct,
}) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !title ||
      !category ||
      !price ||
      !description ||
      !image
    ) {
      alert("Please fill in all fields.");
      return;
    }

    const newProduct = {
      id: Date.now(),
      title: title,
      category: category,
      price: Number(price),
      description: description,
      image: image,
    };

    onAddProduct(newProduct);

    setTitle("");
    setCategory("");
    setPrice("");
    setDescription("");
    setImage("");
  }

  return (
    <form
      className="product-form"
      onSubmit={handleSubmit}
    >
      <div className="form-title">
        <FaPlus />

        <div>
          <h2>Add New Product</h2>
          <p>Add a product to your store.</p>
        </div>
      </div>

      <input
        type="text"
        placeholder="Product title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) =>
          setCategory(e.target.value)
        }
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) =>
          setPrice(e.target.value)
        }
      />

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
      />

      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) =>
          setImage(e.target.value)
        }
      />

      <button type="submit">
        <FaPlus />
        Add Product
      </button>
    </form>
  );
}