import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectTotal, selectCount, clearCart } from '../store/cartSlice.js';
 
const empty = { name: '', email: '', address: '', city: 'Islamabad', payment: 'cod', agree: false };
 
export default function CheckoutPage() {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [placed, setPlaced] = useState(false);
  const total = useSelector(selectTotal);
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  }
 
  function validate() {
  const err = {};
    if (form.name.trim().length < 3) err.name = 'Name must be at least 3 letters';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = 'Enter a valid email';
    if (form.address.trim().length < 10) err.address = 'Address must be at least 10 characters';
    if (!form.agree) err.agree = 'You must accept the terms';
    return err;
  }
 
  function handleSubmit(e) {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length > 0) return;
    setPlaced(true);
    dispatch(clearCart());
    navigate('/success', { state: { name: form.name, total } });
  }
 
  if (count === 0 && !placed) return <Navigate to="/cart" replace />;
 
  return (
    <form className="box" onSubmit={handleSubmit} noValidate>
 <h1>Checkout (${total})</h1>
 
      <label htmlFor="name">Full name</label>
      <input id="name" type="text" name="name" value={form.name}
        onChange={handleChange} className={errors.name ? 'bad' : ''} />
      {errors.name && <p className="err">{errors.name}</p>}
 
      <label htmlFor="email">Email</label>
      <input id="email" type="email" name="email" value={form.email}
        onChange={handleChange} className={errors.email ? 'bad' : ''} />
      {errors.email && <p className="err">{errors.email}</p>}
 
      <label htmlFor="address">Address</label>
      <textarea id="address" name="address" rows="3" value={form.address}
        onChange={handleChange} className={errors.address ? 'bad' : ''} />
      {errors.address && <p className="err">{errors.address}</p>}
 
      <label htmlFor="city">City</label>
      <select id="city" name="city" value={form.city} onChange={handleChange}>
        <option>Islamabad</option>
        <option>Lahore</option>
        <option>Karachi</option>
</select>
 
      <label>Payment</label>
      <div className="inline">
        <input id="cod" type="radio" name="payment" value="cod"
          checked={form.payment === 'cod'} onChange={handleChange} />
        <label htmlFor="cod">Cash on delivery</label>
        <input id="card" type="radio" name="payment" value="card"
          checked={form.payment === 'card'} onChange={handleChange} />
        <label htmlFor="card">Card</label>
      </div>
 
      <div className="inline" style={{ marginTop: 12 }}>
        <input id="agree" type="checkbox" name="agree" checked={form.agree} onChange={handleChange} />
        <label htmlFor="agree">I accept the terms</label>
      </div>
      {errors.agree && <p className="err">{errors.agree}</p>}
 
      <button className="btn" type="submit" style={{ marginTop: 14 }}>Place order</button>
    </form>
  );
}
