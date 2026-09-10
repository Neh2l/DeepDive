import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products"
    );

    const data = await response.json();

    return data;
  }
);

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (product) => {
    const response = await fetch(
      "https://fakestoreapi.com/products",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(product),
      }
    );

    const data = await response.json();

    return data;
  }
);

const productsSlice = createSlice({
  name: "products",

  initialState: {
    items: [],
    loading: false,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;

        state.items = action.payload;
      })

      .addCase(addProduct.fulfilled, (state, action) => {
        state.items.unshift(action.payload);
      });
  },
});

export default productsSlice.reducer;