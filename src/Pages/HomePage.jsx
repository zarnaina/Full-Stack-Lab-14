import { useState } from 'react';
import ProductCard from '../components/ProductCard.jsx';
import products from '../data/products.js';
 
export default function HomePage() {
  const [category, setCategory] = useState('All');
 
  const shown = category === 'All' ? products : products.filter((p) => p.category === category);
 
  return (
    <div>
      <h1>Products</h1>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
 <option>All</option>
        <option>Accessories</option>
        <option>Books</option>
      </select>
      <div className="grid" style={{ marginTop: 14 }}>
        {shown.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
