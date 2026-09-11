import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

function Cart() {
  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const total = cartItems.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">

        <div className="mb-5 text-6xl">
          🛒
        </div>

        <h2 className="mb-2 text-2xl font-bold text-slate-800">
          Your cart is empty
        </h2>

        <p className="text-slate-500">
          Add some products and come back here.
        </p>

      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">

      <h1 className="mb-8 text-3xl font-bold text-slate-900">
        Your Cart
      </h1>

      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
        />
      ))}

      <div className="mt-8 flex items-center justify-between rounded-xl bg-white-900 p-6 text-gray-800 shadow-sm">

        <span className="text-lg">
          Total
        </span>

        <span className="text-2xl font-bold">
          ${total.toFixed(2)}
        </span>

      </div>

    </div>
  );
}

export default Cart;