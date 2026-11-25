import { Link, useLocation } from 'react-router-dom';
 
export default function SuccessPage() {
  const { state } = useLocation();
 
  if (!state) return <p>No order yet. <Link to="/">Go to the shop</Link></p>;
 
  return (
    <div className="ok">
      <h1>Thank you, {state.name}!</h1>
      <p>Your order of ${state.total} has been placed.</p>
      <Link className="btn" to="/">Continue shopping</Link>
    </div>
  );
}
