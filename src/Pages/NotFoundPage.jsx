import { Link } from 'react-router-dom';
 
export default function NotFoundPage() {
  return (
    <div>
      <h1>404 - Page not found</h1>
      <p><Link to="/">Go to the shop</Link></p>
    </div>
  );
}
