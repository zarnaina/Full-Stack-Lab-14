import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
  name: 'wishlist',

  initialState: {
    items: []
  },

  reducers: {
    addToWishlist(state, action) {
      const product = action.payload;

      const found = state.items.find(
        (i) => i.id === product.id
      );

      if (!found) {
        state.items.push(product);
      }
    },

    removeFromWishlist(state, action) {
      state.items = state.items.filter(
        (i) => i.id !== action.payload
      );
    },

    clearWishlist(state) {
      state.items = [];
    }
  }
});

export const {
  addToWishlist,
  removeFromWishlist,
  clearWishlist
} = wishlistSlice.actions;

export const selectWishlistItems = (state) =>
  state.wishlist.items;

export const selectWishlistCount = (state) =>
  state.wishlist.items.length;

export default wishlistSlice.reducer;
