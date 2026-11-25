import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';

import HomePage from './pages/HomePage.jsx';

import ProductPage from './pages/ProductPage.jsx';

import CartPage from './pages/CartPage.jsx';

import CheckoutPage from './pages/CheckoutPage.jsx';

import SuccessPage from './pages/SuccessPage.jsx';

import WishlistPage from './pages/WishlistPage.jsx';

import NotFoundPage from './pages/NotFoundPage.jsx';

export default function App() {

  return (
    <div>

      <Navbar />

      <div className="wrap">

        <Routes>

          <Route path="/" element={<HomePage />} />

          <Route path="/product/:id" element={<ProductPage />} />

          <Route path="/cart" element={<CartPage />} />

          <Route path="/wishlist" element={<WishlistPage />} />

          <Route path="/checkout" element={<CheckoutPage />} />

          <Route path="/success" element={<SuccessPage />} />

          <Route path="*" element={<NotFoundPage />} />

        </Routes>

      </div>

    </div>
  );
}
