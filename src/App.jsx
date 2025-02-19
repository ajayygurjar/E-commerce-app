import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ProductPage from './components/Products/ProductPage';
import { CartProvider } from './store/cart-context';
import { CartDisplay } from './store/cart-display-context';
import Home from './pages/Home';
import About from './pages/About';
import RootLayout from './components/Layout/RootLayout';
import Movie from './pages/Movie';

// Create the router object
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />, // The root layout
    children: [
      { path: '/', element: <ProductPage /> },  // Default route, show ProductPage
      { path: '/home', element: <Home /> },     
      { path: '/about', element: <About /> },  
      {path:'/movie',element:<Movie/>} 
    ],
  },
]);


function App() {
  return (
    <CartProvider>
      <CartDisplay>
        {/* Provide the router to the app */}
        <RouterProvider router={router} />
      </CartDisplay>
    </CartProvider>
  );
}

export default App;
