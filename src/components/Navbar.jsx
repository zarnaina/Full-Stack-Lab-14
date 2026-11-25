import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { selectCount } from '../store/cartSlice.js';

import {
  selectWishlistCount
} from '../store/wishlistSlice.js';

const linkClass = ({ isActive }) =>
  isActive ? 'active' : '';

export default function Navbar() {

  const count = useSelector(selectCount);

  const wishlistCount = useSelector(selectWishlistCount);

  return (
    <nav className="nav">

      <span className="brand">Mini Shop</span>

      <NavLink to="/" end className={linkClass}>
        Home
      </NavLink>

      <NavLink to="/cart" className={linkClass}>
        Cart <span className="badge">{count}</span>
      </NavLink>

      <NavLink to="/wishlist" className={linkClass}>
        ♥ Wishlist <span className="badge">
          {wishlistCount}
        </span>
      </NavLink>

    </nav>
  );
}
