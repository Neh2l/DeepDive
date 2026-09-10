import { useDispatch } from "react-redux";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  const subtotal =
    item.price * item.quantity;

  return (
    <div className="mb-5 flex flex-col gap-6 rounded-xl bg-white p-5 shadow-sm sm:flex-row">

      <img
        src={item.image}
        alt={item.title}
        className="h-32 w-full object-contain sm:w-32"
      />

      <div className="flex flex-1 flex-col">

        <h3 className="mb-2 text-lg font-semibold text-slate-800">
          {item.title}
        </h3>

        <p className="text-slate-500">
          Price: ${item.price}
        </p>

        <p className="mb-4 text-lg font-bold text-slate-900">
          Subtotal: ${subtotal.toFixed(2)}
        </p>

        <div className="flex flex-wrap items-center justify-between gap-4">

          <div className="flex items-center gap-3">

            <button
              onClick={() =>
                dispatch(decreaseQuantity(item.id))
              }
              className="h-10 w-10 rounded-lg bg-gray-200 text-lg text-slate-800 hover:bg-gray-300"
            >
              −
            </button>

            <span className="text-lg font-bold">
              {item.quantity}
            </span>

            <button
              onClick={() =>
                dispatch(increaseQuantity(item.id))
              }
              className="h-10 w-10 rounded-lg bg-slate-900 text-lg text-white hover:bg-slate-700"
            >
              +
            </button>

          </div>

          <button
            onClick={() =>
              dispatch(removeFromCart(item.id))
            }
            className="rounded-lg bg-red-50 px-4 py-2 font-medium text-red-600 transition hover:bg-red-100"
          >
            Remove
          </button>

        </div>

      </div>

    </div>
  );
}

export default CartItem;