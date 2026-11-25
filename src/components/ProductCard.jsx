
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { addToCart } from '../store/cartSlice.js';

import {
  addToWishlist,
  removeFromWishlist,
  selectWishlistItems
} from '../store/wishlistSlice.js';

export default function ProductCard({ product }) {

  const dispatch = useDispatch();

  const wishlistItems = useSelector(selectWishlistItems);

  const isSaved = wishlistItems.some(
    (i) => i.id === product.id
  );

  function handleWishlist() {
    if (isSaved) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
  }

  return (
    <div className="card">

      <h3>
        <Link to={'/product/' + product.id}>
          {product.title}
        </Link>
      </h3>

      <p className="muted">{product.category}</p>

      <p className="price">${product.price}</p>

      <button
        className="btn"
        onClick={() => dispatch(addToCart(product))}
      >
        Add to cart
      </button>

      <button
        className="btn ghost"
        onClick={handleWishlist}
      >
        {isSaved ? '♥ Remove from Wishlist' : '♡ Add to Wishlist'}
      </button>

    </div>
  );
}
