import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.product.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
        item.price = (item.price * item.quantity).toFixed(2); // Round the price to two decimal places
      } else {
        state.product.push({
          ...action.payload,
          price: (action.payload.price * action.payload.quantity).toFixed(2), // Calculate initial price and round it
        });
      }
    },
    removeFromCart: (state, action) => {
      state.product = state.product.filter(
        (item) => item.id !== action.payload
      );
    },

    incrementQuantity: (state, action) => {
      const item = state.product.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        item.price = (item.price / (item.quantity - 1)).toFixed(2); // Round the price to two decimal places
        item.price = (item.price * item.quantity).toFixed(2);
      }
    },

    decrementQuantity: (state, action) => {
      const item = state.product.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.price = (item.price / (item.quantity + 1)).toFixed(2); // Round the price to two decimal places
        item.price = (item.price * item.quantity).toFixed(2);
      }
    },

    emptyCart: (state) => {
      state.product = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  emptyCart,
} = cartSlice.actions;

export default cartSlice.reducer;
