import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartView from '../components/CartView.jsx';
import { selectCount } from '../store/cartSlice.js';
 
export default function CartPage() {
  const count = useSelector(selectCount);
 
  return (
    <div>
      <h1>Your cart</h1>
      <CartView />
      {count > 0 && <Link className="btn" to="/checkout">Go to checkout</Link>}
    </div>
  );
}
