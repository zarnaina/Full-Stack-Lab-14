import { useSelector, useDispatch } from 'react-redux';
import { selectItems, selectTotal, setQty, removeFromCart } from '../store/cartSlice.js';
 
export default function CartView() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const dispatch = useDispatch();
 
  if (items.length === 0) return <p className="muted">Your cart is empty.</p>;
 
  return (
    <div>
      {items.map((i) => (
 <div className="row" key={i.id}>
          <span className="grow">{i.title} (${i.price})</span>
          <button className="btn ghost" onClick={() => dispatch(setQty({ id: i.id, qty: i.qty - 1 }))}>-</button>
          <b>{i.qty}</b>
          <button className="btn ghost" onClick={() => dispatch(setQty({ id: i.id, qty: i.qty + 1 }))}>+</button>
          <button className="btn danger" onClick={() => dispatch(removeFromCart(i.id))}>Remove</button>
        </div>
      ))}
      <p className="total">Total: ${total}</p>
    </div>
  );
}
