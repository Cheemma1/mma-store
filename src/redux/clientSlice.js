import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducer: {
    addToCart: (state, action) => {
      state.product.push(action.payLoad);
    },
    removeFromCart: (state, action) => {
      state.product = state.product.filter(
        (item) => item.id !== action.payLoad
      );
    },
    emptyCart: () => {
      state.product = [];
    },
  },
});
export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
