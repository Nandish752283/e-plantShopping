import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push({ ...action.payload, quantity: 1 });
    },
    removeItem: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
    increaseQty: (state, action) => {
      const item = state.find(i => i.id === action.payload);
      item.quantity++;
    },
    decreaseQty: (state, action) => {
      const item = state.find(i => i.id === action.payload);
      if (item.quantity > 1) item.quantity--;
    }
  }
});

export const { addItem, removeItem, increaseQty, decreaseQty } = cartSlice.actions;
export default cartSlice.reducer;
