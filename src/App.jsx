import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import ProductPage from './components/Products/ProductPage';
import { CartProvider } from './store/cart-context';
import { CartDisplay } from './store/cart-display-context';
import Home from './pages/Home';
import About from './pages/About';
import RootLayout from './components/Layout/RootLayout';
//import Movie from './pages/Movie';
import ProfilePage from './pages/ProfilePage';
import Contact from './pages/Contact';
import ProductDetailPage from './components/Products/ProductDetailPage';
import LoginPage from './pages/LoginPage';
import { AuthContextProvider } from './store/auth-context';

// Create the router object
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />, // The root layout
    children: [
      { path: '/', element: <Home /> },//Home Page
      
      {path:'/login' ,element:<LoginPage/>},//Login Page
      
      { path: '/store', element: <ProductPage /> },  // Default route, show ProductPage
      
      { path: `/product/:id`, element: <ProductDetailPage /> }, 

      { path: '/about', element: <About /> },  

      {path:'/contact',element:<Contact/>},

      {path:'/profile',element:<ProfilePage/>}
      
      //{path:'/movie',element:<Movie/>},
    ],
  },
]);


function App() {
  return (
    <AuthContextProvider>
    <CartProvider>
      <CartDisplay>
        {/* Provide the router to the app */}
        <RouterProvider router={router} />
      </CartDisplay>
    </CartProvider>
    </AuthContextProvider>
  );
}

export default App;
