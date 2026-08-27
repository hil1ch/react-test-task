import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    deleteInCart: (state, action) => {
      return state.filter((cart) => cart.id !== action.payload);
    },
    deleteMultipleFromCart: (state, action) => {
      return state.filter((item) => !action.payload.includes(item.id));
    },
    resetCartList: () => [],
    setQuantity: (state, action) => {
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item,
      );
    },
  },
});

export const {
  addToCart,
  setQuantity,
  deleteInCart,
  resetCartList,
  deleteMultipleFromCart,
} = cartSlice.actions;

export const selectorCart = (state) => state.cart;

export default cartSlice.reducer;
