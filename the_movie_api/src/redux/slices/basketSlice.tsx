import { createSlice } from "@reduxjs/toolkit";
import { getAllCartmovies, getTotalCartItemPrice } from "../helpers";

const initialState = {
  items: [],
};

const authSlice = createSlice({
  name: "busket",
  initialState,
  reducers: {
    updateBusket: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { updateBusket } = authSlice.actions;

export const selectCartItems = (state: { busket: { items: any } }) =>
  state.busket.items;
export const selectTotalPrice = (state: { busket: { items: any } }) =>
  getTotalCartItemPrice(state.busket.items);
export const selectTotalItems = (state: { busket: { items: any } }) =>
  getAllCartmovies(state.busket.items);

export default authSlice.reducer;
