import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './cartSlice.js';
import wishlistReducer from './wishlistSlice.js';

const KEY = 'mini-shop-cart';

function loadState() {
  try {
    const saved = localStorage.getItem(KEY);
    return saved ? JSON.parse(saved) : undefined;
  } catch {
    return undefined;
  }
}

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer
  },

  preloadedState: loadState()
});

store.subscribe(() => {
  try {
    localStorage.setItem(
      KEY,
      JSON.stringify({
        cart: store.getState().cart,
        wishlist: store.getState().wishlist
      })
    );
  } catch {
  }
});
