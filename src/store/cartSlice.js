import { createSlice } from '@reduxjs/toolkit';
 
const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
 
  reducers: {
    addToCart(state, action) {
      const p = action.payload;
      const found = state.items.find((i) => i.id === p.id);
      if (found) {
        found.qty += 1;
      } else {
        state.items.push({ id: p.id, title: p.title, price: p.price, qty: 1 });
      }
    },
    removeFromCart(state, action) {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    setQty(state, action) {
      const { id, qty } = action.payload;
const item = state.items.find((i) => i.id === id);
      if (!item) return;
      if (qty <= 0) {
        state.items = state.items.filter((i) => i.id !== id);
      } else {
        item.qty = qty;
      }
    },
    clearCart(state) {
      state.items = [];
    },
  },
});
 
export const { addToCart, removeFromCart, setQty, clearCart } = cartSlice.actions;
 
export const selectItems = (state) => state.cart.items;
export const selectCount = (state) => state.cart.items.reduce((n, i) => n + i.qty, 0);
export const selectTotal = (state) => state.cart.items.reduce((sum, i) => sum + i.price * i.qty, 0);
 
export default cartSlice.reducer;
