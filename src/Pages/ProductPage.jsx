import { useParams, useNavigate, Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import products from '../data/products.js';

import { addToCart } from '../store/cartSlice.js';

import {
  addToWishlist,
  removeFromWishlist,
  selectWishlistItems
} from '../store/wishlistSlice.js';

export default function ProductPage() {

  const { id } = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const wishlistItems = useSelector(selectWishlistItems);

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    return (
      <p>
        Product not found. <Link to="/">Back to shop</Link>
      </p>
    );
  }

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

      <h1>{product.title}</h1>

      <p className="muted">{product.category}</p>

      <p>{product.description}</p>

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

      <button
        className="btn ghost"
        onClick={() => navigate(-1)}
      >
        Back
      </button>

    </div>
  );
}
