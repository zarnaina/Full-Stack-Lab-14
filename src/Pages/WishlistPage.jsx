import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import {
  selectWishlistItems,
  removeFromWishlist
} from '../store/wishlistSlice.js';

import { addToCart } from '../store/cartSlice.js';

export default function WishlistPage() {

  const items = useSelector(selectWishlistItems);

  const dispatch = useDispatch();

  if (items.length === 0) {
    return (
      <div>
        <h1>My Wishlist ♥</h1>

        <p className="muted">
          Your wishlist is empty.
        </p>

        <Link to="/" className="btn">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div>

      <h1>My Wishlist ♥</h1>

      <p className="sub">
        Your favourite products are saved here.
      </p>

      <div className="grid">

        {items.map((product) => (

          <div className="card" key={product.id}>

            <h3>
              <Link to={'/product/' + product.id}>
                {product.title}
              </Link>
            </h3>

            <p className="muted">
              {product.category}
            </p>

            <p className="price">
              ${product.price}
            </p>

            <button
              className="btn"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </button>

            <button
              className="btn danger"
              onClick={() =>
                dispatch(removeFromWishlist(product.id))
              }
            >
              Remove from Wishlist
            </button>

          </div>

        ))}

      </div>

      <p>
        <Link to="/">Continue Shopping</Link>
      </p>

    </div>
  );
}
