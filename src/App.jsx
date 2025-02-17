import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ProductPage from './components/Products/ProductPage';
import { CartProvider } from './store/cart-context';
import { CartDisplay } from './store/cart-display-context';
import './App.css'; // Assuming you have some global styles

function App() {
  return (
    <CartProvider>
      <CartDisplay>
        <Header />
        <ProductPage />
        <Footer />
      </CartDisplay>
    </CartProvider>
  );
}

export default App;
