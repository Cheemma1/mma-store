// import { configureStore } from "@reduxjs/toolkit";
// import { cartSlice } from "./clientSlice";

// export const store = configureStore({
//   reducer: { cart: cartSlice },
// });
import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./clientSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer, // Use cartSlice.reducer to access the reducer function
  },
});
