import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    item: [],
    totalAmount: 0,
  },
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      // { title, amount: 1, price, id, totalPrice: price }
      // { title, amount: 1, price, id, totalPrice: price }
      const existingItem = state.item.find((elem) => elem.id === newItem.id);
      if (existingItem) {
        existingItem.amount++;
        existingItem.totalPrice += existingItem.price;
      } else {
        state.item.push(newItem);
      }
      state.totalAmount++;
    },
    deleteItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.item.find((elem) => elem.id === newItem.id);
      if (existingItem.amount > 1) {
        existingItem.amount--;
        existingItem.totalPrice -= existingItem.price;
      } else {
        state.item = state.item.filter((elem) => elem.id !== newItem.id);
      }
      state.totalAmount--;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
